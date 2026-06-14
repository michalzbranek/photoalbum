;(function () {
  'use strict'

  /* =========================================================
     Pomocné funkce
     ========================================================= */

  /** Vrátí ID sekce pro daný rok (např. "rok-2019"). */
  function idForYear(year) {
    return 'rok-' + year
  }

  /* =========================================================
     Sestavení navigace
     ========================================================= */

  function buildNav() {
    var list = document.getElementById('nav-list')
    if (!list) return

    TIMELINE.forEach(function (entry) {
      var li = document.createElement('li')
      var a = document.createElement('a')

      a.href = '#' + idForYear(entry.year)
      a.textContent = entry.year
      a.dataset.year = String(entry.year)
      a.setAttribute('aria-label', 'Přejít na rok ' + entry.year)

      li.appendChild(a)
      list.appendChild(li)
    })
  }

  /* =========================================================
     Sestavení sekcí roků
     ========================================================= */

  function buildSections() {
    var container = document.getElementById('sections-container')
    if (!container) return

    TIMELINE.forEach(function (entry) {
      var section = document.createElement('section')
      section.className = 'timeline-section'
      section.id = idForYear(entry.year)
      section.dataset.year = String(entry.year)

      /* — Fotografie — */
      var photoDiv = document.createElement('div')
      photoDiv.className = 'section-photo'

      var img = document.createElement('img')
      img.src = entry.image
      img.alt = entry.alt || ''
      img.loading = 'lazy'

      photoDiv.appendChild(img)

      /* — Text — */
      var textDiv = document.createElement('div')
      textDiv.className = 'section-text'

      var h2 = document.createElement('h2')
      h2.className = 'section-year'
      h2.textContent = entry.year

      var p = document.createElement('p')
      p.className = 'section-content'
      p.textContent = entry.text

      textDiv.appendChild(h2)
      textDiv.appendChild(p)

      section.appendChild(photoDiv)
      section.appendChild(textDiv)
      container.appendChild(section)
    })
  }

  /* =========================================================
     Scroll-spy — zvýrazní aktivní rok při scrollování
     ========================================================= */

  var activeYear = null

  function setActiveYear(year) {
    var yearStr = String(year)
    if (yearStr === activeYear) return
    activeYear = yearStr

    var links = document.querySelectorAll('#nav-list a')
    links.forEach(function (a) {
      a.classList.remove('is-active')
    })

    var activeLink = document.querySelector('#nav-list a[data-year="' + yearStr + '"]')
    if (!activeLink) return

    activeLink.classList.add('is-active')

    /* Posuň nav lištu tak, aby byl aktivní rok viditelný
       (důležité pro mobilní horizontální lištu). */
    activeLink.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }

  function initScrollSpy() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('.timeline-section'))
    if (!sections.length) return

    function pickActiveYear() {
      var doc = document.documentElement

      /* Snap na dně stránky — krátká poslední sekce by se jinak nemusela
         dostat nad střed; takto je poslední rok zaručen vždy. */
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        return sections[sections.length - 1].dataset.year
      }

      /* Referenční linka = střed viewportu (50 %). Aktivní je poslední sekce,
         jejíž horní okraj již vystoupil nad linku. Sekce jsou seřazeny shora
         dolů, takže první sekce pod linkou hledání ukončí. */
      var line = window.innerHeight / 2
      var current = sections[0]
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= line) {
          current = sections[i]
        } else {
          break
        }
      }
      return current.dataset.year
    }

    var ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(function () {
        ticking = false
        setActiveYear(pickActiveYear())
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    /* Výchozí stav hned po načtení stránky. */
    setActiveYear(pickActiveYear())
  }

  /* =========================================================
     Název stránky
     ========================================================= */

  function setTitle() {
    var title = typeof ALBUM_TITLE !== 'undefined' && ALBUM_TITLE ? ALBUM_TITLE : 'Fotoalbum'

    var h1 = document.getElementById('site-title')
    if (h1) h1.textContent = title

    document.title = title
  }

  /* =========================================================
     Inicializace po načtení DOM
     ========================================================= */

  document.addEventListener('DOMContentLoaded', function () {
    setTitle()
    buildNav()
    buildSections()
    initScrollSpy()
  })
})()
