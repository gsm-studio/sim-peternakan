// Pelaporan: filter tindakan (checklist) tersambung ke API rossaapi.
// Konfigurasi: localStorage.apiBaseUrl (default http://localhost) dan localStorage.token (JWT dari POST /api/login).
(function () {
  if (!localStorage.getItem('token')) { window.location.href = 'login.html'; return; }
  var API = (localStorage.getItem('apiBaseUrl') || 'http://localhost').replace(/\/$/, '') + '/api';
  var menu = document.getElementById('filterTreatmentList');
  var label = document.getElementById('filterTreatmentLabel');
  var body = document.getElementById('laporanBody');

  function request(path, params) {
    var qs = new URLSearchParams(params || {}).toString();
    return fetch(API + path + (qs ? '?' + qs : ''), {
      headers: { Accept: 'application/json', Authorization: 'Bearer ' + (localStorage.getItem('token') || '') }
    }).then(function (r) {
      if (r.status === 401) { localStorage.removeItem('token'); window.location.href = 'login.html'; }
      return r.json();
    });
  }

  function selectedIds() {
    return Array.prototype.filter.call(menu.querySelectorAll('input:checked'), Boolean)
      .map(function (b) { return b.value; });
  }

  function today() {
    var d = new Date(), p = function (n) { return ('0' + n).slice(-2); };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

  function cell(v) { return '<td>' + (v === null || v === undefined || v === '' ? '-' : v) + '</td>'; }

  function renderRows(items) {
    body.innerHTML = '';
    if (!items.length) {
      body.innerHTML = '<tr><td colspan="12" class="text-center">Tidak ada data</td></tr>';
      return;
    }
    items.forEach(function (it) {
      var tr = document.createElement('tr');
      var th = document.createElement('th');
      th.scope = 'row';
      th.textContent = it.nama_kandang;
      tr.appendChild(th);
      tr.insertAdjacentHTML('beforeend', [
        it.usia_mgg, it.jumlah_mati, it.jumlah_afkir, it.jumlah_pindah, it.jumlah_terima,
        it.telur_utuh, it.telur_bentes, it.berat_telur_utuh_kg, it.berat_telur_bentes_kg,
        it.percentase_telur === null || it.percentase_telur === undefined ? null : it.percentase_telur + '%',
        it.avg_berat_telur_gr === null || it.avg_berat_telur_gr === undefined ? null : it.avg_berat_telur_gr + 'gr'
      ].map(cell).join(''));
      body.appendChild(tr);
    });
  }

  function loadLaporan() {
    var params = { time_filter_type: 'daily', start_date: today(), end_date: today() };
    var ids = selectedIds();
    if (ids.length) params.id_treatment = ids.join(',');
    request('/laporan', params).then(function (res) {
      if (res.success) renderRows(res.data.items || []);
      else body.innerHTML = '<tr><td colspan="12" class="text-center">' + (res.message || 'Gagal memuat laporan') + '</td></tr>';
    }).catch(function () {
      body.innerHTML = '<tr><td colspan="12" class="text-center">Gagal menghubungi server</td></tr>';
    });
  }

  menu.addEventListener('change', function () {
    var n = selectedIds().length;
    label.textContent = n === 0 ? 'Semua tindakan' : n + ' tindakan dipilih';
    loadLaporan();
  });

  request('/tugas', { is_treatment: true }).then(function (res) {
    var items = (res.data && res.data.items) || [];
    items.forEach(function (t) {
      var li = document.createElement('li');
      var lb = document.createElement('label');
      lb.className = 'dropdown-item d-flex align-items-center mb-0';
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'form-check-input me-2 mt-0';
      cb.value = t.id;
      lb.appendChild(cb);
      lb.appendChild(document.createTextNode(t.nama));
      li.appendChild(lb);
      menu.appendChild(li);
    });
  }).catch(function () {});

  loadLaporan();
})();
