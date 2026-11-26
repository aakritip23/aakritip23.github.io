// Sidebar contacts toggle, tab navigation (with #hash links), project filter, contact form.
(function () {
  // Sidebar "Show contacts"
  var sidebar = document.getElementById('sidebar');
  var moreBtn = document.querySelector('.info-more-btn');
  if (sidebar && moreBtn) {
    moreBtn.addEventListener('click', function () {
      var open = sidebar.classList.toggle('open');
      moreBtn.setAttribute('aria-expanded', String(open));
      moreBtn.querySelector('span').textContent = open ? 'Hide contacts' : 'Show contacts';
    });
  }

  // Tabs: each nav link shows one page; the URL hash keeps it shareable.
  var links = document.querySelectorAll('[data-nav]');
  var pages = document.querySelectorAll('[data-page]');
  function show(name, scroll) {
    var found = false;
    pages.forEach(function (p) {
      var on = p.dataset.page === name;
      p.classList.toggle('active', on);
      if (on) found = true;
    });
    if (!found) return show('about', scroll);
    links.forEach(function (l) {
      var on = l.dataset.nav === name;
      l.classList.toggle('active', on);
      if (on) l.setAttribute('aria-current', 'page'); else l.removeAttribute('aria-current');
    });
    if (scroll) window.scrollTo({ top: 0 });
  }
  links.forEach(function (l) {
    l.addEventListener('click', function (e) {
      e.preventDefault();
      history.replaceState(null, '', '#' + l.dataset.nav);
      show(l.dataset.nav, true);
    });
  });
  window.addEventListener('hashchange', function () { show(location.hash.slice(1), true); });
  show(location.hash.slice(1) || 'about', false);

  // Portfolio filter
  var filters = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('.project-item');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.dataset.filter;
      filters.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      items.forEach(function (it) {
        it.hidden = !(f === 'all' || it.dataset.category.split(' ').indexOf(f) !== -1);
      });
    });
  });

  // Contact form: GitHub Pages has no backend, so this opens the visitor's email app.
  var form = document.getElementById('contact-form');
  if (form) {
    var btn = form.querySelector('.form-btn');
    form.addEventListener('input', function () { btn.disabled = !form.checkValidity(); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) return;
      var d = new FormData(form);
      var subject = 'Hello from ' + d.get('name');
      var body = d.get('message') + '\n\n— ' + d.get('name') + ' (' + d.get('email') + ')';
      window.location.href = 'mailto:aakritip23@iitk.ac.in?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();
