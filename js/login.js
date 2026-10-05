// Login: POST /api/login (rossaapi), simpan JWT di localStorage.token lalu masuk ke dashboard.
(function () {
  var API = (localStorage.getItem('apiBaseUrl') || 'http://localhost').replace(/\/$/, '') + '/api';
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var btn = document.getElementById('btnLogin');
  var err = document.getElementById('loginError');

  function showError(msg) {
    err.textContent = msg;
    err.classList.remove('d-none');
  }

  function login() {
    err.classList.add('d-none');
    if (!email.value || !password.value) {
      showError('Email dan password harus diisi');
      return;
    }
    btn.disabled = true;
    fetch(API + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    }).then(function (r) { return r.json(); }).then(function (res) {
      if (res.status && res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.data || {}));
        window.location.href = 'index.html';
      } else {
        showError(res.message || 'Email atau password salah');
      }
    }).catch(function () {
      showError('Gagal menghubungi server');
    }).then(function () { btn.disabled = false; });
  }

  btn.addEventListener('click', login);
  [email, password].forEach(function (el) {
    el.addEventListener('keydown', function (e) { if (e.key === 'Enter') login(); });
  });
})();
