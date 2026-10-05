// Dashboard: filter + grafik tersambung ke GET /api/laporan/grafikdashboard (rossaapi).
// Konfigurasi: localStorage.apiBaseUrl dan localStorage.token (lihat login.js).
(function () {
  if (!localStorage.getItem('token')) { window.location.href = 'login.html'; return; }
  var API = (localStorage.getItem('apiBaseUrl') || 'http://localhost').replace(/\/$/, '') + '/api';

  // Pilihan metrik pada dropdown "Pilih Filter".
  var METRICS = {
    hd:    { label: 'Avg. % produksi',      field: 'avg_percentase_telur',    unit: '%',  agg: 'avg' },
    butir: { label: 'Jumlah Butir',         field: 'sum_jumlah_butir',        unit: '',   agg: 'sum' },
    fcr:   { label: 'FCR',                  field: 'fcr',                     unit: '',   agg: 'avg' },
    pakan: { label: 'Total Konsumsi Pakan', field: 'total_konsumsi_pakan_kg', unit: ' kg', agg: 'sum' }
  };

  var $ = function (id) { return document.getElementById(id); };
  var panel = $('dashFilterPanel');

  function request(path, params) {
    var qs = new URLSearchParams(params || {}).toString();
    return fetch(API + path + (qs ? '?' + qs : ''), {
      headers: { Accept: 'application/json', Authorization: 'Bearer ' + (localStorage.getItem('token') || '') }
    }).then(function (r) {
      if (r.status === 401) { localStorage.removeItem('token'); window.location.href = 'login.html'; }
      return r.json();
    });
  }

  function pad(n) { return ('0' + n).slice(-2); }
  function ymd(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function num(v) { return v === null || v === undefined ? null : Number(v); }
  function fmt(v, unit) {
    return v === null || isNaN(v) ? '-' : Number(v).toLocaleString('id-ID', { maximumFractionDigits: 2 }) + (unit || '');
  }
  function signed(v) { return v === null || isNaN(v) ? '-' : (v > 0 ? '+' : '') + fmt(v, '%'); }

  // ---- default filter ----
  var end = new Date(), start = new Date();
  start.setDate(end.getDate() - 6);
  $('dashStart').value = ymd(start);
  $('dashEnd').value = ymd(end);

  // ---- panel buka/tutup ----
  $('dashFilterToggle').addEventListener('click', function (e) {
    e.preventDefault();
    panel.classList.toggle('d-none');
  });
  $('dashClear').addEventListener('click', function (e) {
    e.preventDefault();
    $('dashMetric').value = 'hd';
    $('dashTime').value = 'daily';
    $('dashStart').value = ymd(start);
    $('dashEnd').value = ymd(end);
    $('dashUsia').checked = false;
    Array.prototype.forEach.call($('dashKandang').querySelectorAll('input'), function (c) { c.checked = false; });
  });

  // ---- daftar kandang (checklist) ----
  request('/kandang', { page_size: 100, page_number: 1 }).then(function (res) {
    ((res.data && res.data.items) || []).forEach(function (k) {
      var lb = document.createElement('label');
      lb.className = 'd-flex align-items-center mb-1';
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'form-check-input me-2 mt-0';
      cb.value = k.id;
      lb.appendChild(cb);
      lb.appendChild(document.createTextNode(k.nama));
      $('dashKandang').appendChild(lb);
    });
  }).catch(function () {});

  // ---- ambil & tampilkan data ----
  function load() {
    var params = {
      time_filter_type: $('dashTime').value,
      start_date: $('dashStart').value + ' 00:00:00',
      end_date: $('dashEnd').value + ' 23:59:59',
      view_by_usia: $('dashUsia').checked
    };
    var ids = Array.prototype.filter.call($('dashKandang').querySelectorAll('input:checked'), Boolean)
      .map(function (c) { return c.value; });
    if (ids.length) params.id_kandang = ids.join(',');
    request('/laporan/grafikdashboard', params).then(function (res) {
      if (!res.success) { $('dashRange').textContent = res.message || 'Gagal memuat data'; return; }
      render(res.data.items || []);
    }).catch(function () { $('dashRange').textContent = 'Gagal menghubungi server'; });
  }

  function render(items) {
    var key = $('dashMetric').value, m = METRICS[key];
    var values = items.map(function (it) { return num(it[m.field]); });
    var valid = values.filter(function (v) { return v !== null; });
    var total = valid.reduce(function (a, b) { return a + b; }, 0);
    var headline = !valid.length ? null : (m.agg === 'sum' ? total : total / valid.length);

    $('dashMetricLabel').textContent = m.label;
    $('dashValue').textContent = fmt(headline, m.unit);
    $('dashRange').textContent = 'dari ' + $('dashStart').value + ' s/d ' + $('dashEnd').value;

    // HD kemarin & selisih HD (hanya untuk Avg. % produksi), dihitung pada titik terakhir
    var last = items[items.length - 1];
    var cmp = $('dashCompare');
    if (key === 'hd' && last) {
      var sel = num(last.selisih_hd);
      cmp.innerHTML = 'HD terakhir ' + fmt(num(last.avg_percentase_telur), '%') +
        ' &middot; HD kemarin ' + fmt(num(last.hd_sebelumnya), '%') +
        ' &middot; Selisih HD <span class="' + (sel !== null && sel < 0 ? 'text-danger' : 'color-text-rossa') + '">' + signed(sel) + '</span>';
    } else {
      cmp.textContent = '';
    }

    // grafik
    var base = mainChart.data.datasets[0];
    base.label = m.label;
    base.data = values;
    var sets = [base];
    if (key === 'hd') {
      var prev = JSON.parse(JSON.stringify(mainChart.data.datasets[1] || {}));
      prev.label = 'HD kemarin';
      prev.borderColor = coreui.Utils.getStyle('--cui-success');
      prev.borderWidth = 1;
      prev.borderDash = [8, 5];
      prev.data = items.map(function (it) { return num(it.hd_sebelumnya); });
      sets.push(prev);
    }
    mainChart.data.labels = items.map(function (it) { return it.grafik_x_value; });
    mainChart.data.datasets = sets;
    mainChart.options.scales.y.ticks.stepSize = undefined;
    mainChart.update();
  }

  $('dashApply').addEventListener('click', function () {
    panel.classList.add('d-none');
    load();
  });

  load();
})();
