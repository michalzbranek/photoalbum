;(function () {
  'use strict'

  function idForYear(year) {
    return 'rok-' + year
  }

  /* =========================================================
     Navigace
     ========================================================= */

  function buildNav() {
    var nav = document.getElementById('year-nav')
    if (!nav) return

    TIMELINE.forEach(function (entry) {
      var a = document.createElement('a')
      a.href = '#' + idForYear(entry.year)
      a.textContent = entry.year
      a.dataset.year = String(entry.year)
      a.setAttribute('aria-label', 'Přejít na rok ' + entry.year)
      nav.appendChild(a)
    })
  }

  /* =========================================================
     Sekce roků
     ========================================================= */

  function buildSections() {
    var container = document.getElementById('sections-container')
    if (!container) return

    TIMELINE.forEach(function (entry) {
      var section = document.createElement('section')
      section.id = idForYear(entry.year)
      section.dataset.year = String(entry.year)

      /* — Velká fotka s letopočtem a textem — */
      var hero = document.createElement('div')
      hero.className = 'year-hero reveal'

      var img = document.createElement('img')
      img.src = entry.photos[0]
      img.alt = entry.alt || ''
      img.loading = 'lazy'
      img.className = 'year-hero-img'
      hero.appendChild(img)

      var overlay = document.createElement('div')
      overlay.className = 'year-overlay'

      var num = document.createElement('div')
      num.className = 'year-number'
      num.textContent = entry.year

      var p = document.createElement('p')
      p.className = 'year-text'
      p.textContent = entry.text

      overlay.appendChild(num)
      overlay.appendChild(p)
      hero.appendChild(overlay)
      section.appendChild(hero)

      /* — Miniatury (všechny fotky roku; klik = zobrazit nahoře) — */
      if (entry.photos.length > 1) {
        var thumbs = document.createElement('div')
        thumbs.className = 'year-thumbs reveal'

        entry.photos.forEach(function (src, i) {
          var t = document.createElement('img')
          t.src = src
          t.alt = (entry.alt || 'Fotografie') + ' — fotka ' + (i + 1)
          t.loading = 'lazy'
          t.addEventListener('click', function () {
            img.src = src
          })
          thumbs.appendChild(t)
        })

        section.appendChild(thumbs)
      }

      container.appendChild(section)
    })
  }

  /* =========================================================
     Scroll-spy + scroll reveal
     ========================================================= */

  function initScroll() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('section[data-year]'))
    var links = Array.prototype.slice.call(document.querySelectorAll('#year-nav a'))
    var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'))
    var activeYear = null

    function update() {
      /* reveal prvků, které vstoupily do viewportu */
      reveals.forEach(function (el) {
        if (
          !el.classList.contains('is-visible') &&
          el.getBoundingClientRect().top < window.innerHeight * 0.92
        ) {
          el.classList.add('is-visible')
        }
      })

      /* scroll-spy */
      if (!sections.length) return
      var line = window.innerHeight / 2
      var cur = null
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= line) cur = sections[i].dataset.year
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        cur = sections[sections.length - 1].dataset.year
      }
      if (cur === activeYear) return
      activeYear = cur
      links.forEach(function (a) {
        a.classList.toggle('is-active', a.dataset.year === cur)
      })
    }

    var ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(function () {
        ticking = false
        update()
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()
  }

  /* =========================================================
     Název stránky
     ========================================================= */

  function setTitle() {
    var title = typeof ALBUM_TITLE !== 'undefined' && ALBUM_TITLE ? ALBUM_TITLE : 'Fotoalbum'
    var el = document.getElementById('site-title')
    if (el) el.textContent = title
    document.title = title
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTitle()
    buildNav()
    buildSections()
    initScroll()
  })
})()
