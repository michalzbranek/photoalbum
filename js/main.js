(function () {
  'use strict';

  /* =========================================================
     Pomocné funkce
     ========================================================= */

  /** Vrátí ID sekce pro daný rok (např. "rok-2019"). */
  function idForYear(year) {
    return 'rok-' + year;
  }

  /* =========================================================
     Sestavení navigace
     ========================================================= */

  function buildNav() {
    var list = document.getElementById('nav-list');
    if (!list) return;

    TIMELINE.forEach(function (entry) {
      var li = document.createElement('li');
      var a  = document.createElement('a');

      a.href        = '#' + idForYear(entry.year);
      a.textContent = entry.year;
      a.dataset.year = String(entry.year);
      a.setAttribute('aria-label', 'Přejít na rok ' + entry.year);

      li.appendChild(a);
      list.appendChild(li);
    });
  }

  /* =========================================================
     Sestavení sekcí roků
     ========================================================= */

  function buildSections() {
    var container = document.getElementById('sections-container');
    if (!container) return;

    TIMELINE.forEach(function (entry) {
      var section          = document.createElement('section');
      section.className    = 'timeline-section';
      section.id           = idForYear(entry.year);
      section.dataset.year = String(entry.year);

      /* — Fotografie — */
      var photoDiv = document.createElement('div');
      photoDiv.className = 'section-photo';

      var img    = document.createElement('img');
      img.src    = entry.image;
      img.alt    = entry.alt || '';
      img.loading = 'lazy';

      photoDiv.appendChild(img);

      /* — Text — */
      var textDiv       = document.createElement('div');
      textDiv.className = 'section-text';

      var h2        = document.createElement('h2');
      h2.className  = 'section-year';
      h2.textContent = entry.year;

      var p        = document.createElement('p');
      p.className  = 'section-content';
      p.textContent = entry.text;

      textDiv.appendChild(h2);
      textDiv.appendChild(p);

      section.appendChild(photoDiv);
      section.appendChild(textDiv);
      container.appendChild(section);
    });
  }

  /* =========================================================
     Scroll-spy — zvýrazní aktivní rok při scrollování
     ========================================================= */

  var activeYear       = null;
  var visibleSections  = new Set();

  function setActiveYear(year) {
    var yearStr = String(year);
    if (yearStr === activeYear) return;
    activeYear = yearStr;

    var links = document.querySelectorAll('#nav-list a');
    links.forEach(function (a) { a.classList.remove('is-active'); });

    var activeLink = document.querySelector('#nav-list a[data-year="' + yearStr + '"]');
    if (!activeLink) return;

    activeLink.classList.add('is-active');

    /* Posuň nav lištu tak, aby byl aktivní rok viditelný
       (důležité pro mobilní horizontální lištu). */
    activeLink.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }

  function initScrollSpy() {
    var sections = document.querySelectorAll('.timeline-section');
    if (!sections.length) return;

    /* Pás, ve kterém detekujeme "aktivní" sekci:
       od 25 % od vrchu po 70 % od vrchu viewportu. */
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target);
        } else {
          visibleSections.delete(entry.target);
        }
      });

      /* Z viditelných sekcí vyber tu nejvýše v dokumentu. */
      var allSections = Array.from(document.querySelectorAll('.timeline-section'));
      var topmost = allSections.find(function (s) { return visibleSections.has(s); });
      if (topmost) setActiveYear(topmost.dataset.year);
    }, {
      rootMargin: '-25% 0px -70% 0px',
      threshold: 0
    });

    sections.forEach(function (s) { observer.observe(s); });

    /* Detekce spodku stránky — poslední sekce se nikdy nedostane do
       detekčního pásu (25–30 %), protože stránka skončí dřív. Když jsme
       prakticky úplně dole, vynutíme jako aktivní poslední rok. */
    var bottomTicking = false;
    function checkBottom() {
      bottomTicking = false;
      var doc = document.documentElement;
      /* Guard: jen když stránka reálně scrolluje. */
      if (doc.scrollHeight <= window.innerHeight + 2) return;
      var atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
      if (atBottom && TIMELINE.length) {
        setActiveYear(TIMELINE[TIMELINE.length - 1].year);
      }
    }

    window.addEventListener('scroll', function () {
      if (bottomTicking) return;
      bottomTicking = true;
      window.requestAnimationFrame(checkBottom);
    }, { passive: true });

    /* Nastav výchozí aktivní rok (první v pořadí). */
    if (TIMELINE.length) setActiveYear(TIMELINE[0].year);
  }

  /* =========================================================
     Název stránky
     ========================================================= */

  function setTitle() {
    var title = (typeof ALBUM_TITLE !== 'undefined' && ALBUM_TITLE)
      ? ALBUM_TITLE
      : 'Fotoalbum';

    var h1 = document.getElementById('site-title');
    if (h1) h1.textContent = title;

    document.title = title;
  }

  /* =========================================================
     Inicializace po načtení DOM
     ========================================================= */

  document.addEventListener('DOMContentLoaded', function () {
    setTitle();
    buildNav();
    buildSections();
    initScrollSpy();
  });

})();
