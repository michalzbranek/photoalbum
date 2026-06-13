# Fotoalbum — instrukce pro Claude Code

## Co je tento projekt

Responzivní statická webová stránka — fotoalbum ve formě **časové osy (timeline)**.
Vanilla HTML/CSS/JS, **žádné závislosti, žádný build krok**. Přímo nasazeno na
GitHub Pages z větve `main`.

Živá URL: **https://michalzbranek.github.io/photoalbum/**

---

## Struktura souborů

```
photoalbum/
├── index.html          # HTML kostra; nav a sekce generuje JS
├── css/
│   └── styles.css      # styly (mobile-first, 3 breakpointy: <768, 768–1023, ≥1024)
├── js/
│   ├── data.js         # ← OBSAH: název alba (ALBUM_TITLE) + pole roků (TIMELINE)
│   └── main.js         # render navigace a sekcí + scroll-spy (IntersectionObserver)
├── images/             # sem patří fotografie
├── CONTEXT.md          # glosář doménových pojmů (Timeline, Sekce roku, Navigace…)
├── README.md           # uživatelský návod (přidat rok, nasadit, optimalizovat fotky)
├── .nojekyll           # vypíná Jekyll na GitHub Pages
└── CLAUDE.md           # tento soubor
```

Veškerý obsah (roky, texty, fotky) se edituje **pouze v `js/data.js`**. Všechno
ostatní se generuje z dat automaticky.

---

## Jak spustit lokálně

```bash
python3 -m http.server 8000
# Otevři http://localhost:8000
```

Nestačí otevřít `index.html` přímo jako soubor (protokol `file://`) — prohlížeče
blokují `loading="lazy"` a mohou mít problémy s relativními cestami obrázků.

---

## Konvence a pravidla

### Žádné závislosti ani build
Nesmí se přidávat npm balíčky, bundlery, frameworky ani jakýkoli build krok.
Cílem je, aby šlo repo publikovat přímo na GitHub Pages bez CI.

### Jazyk obsahu
Texty v `js/data.js` (název alba, vzpomínky) jsou **česky**.
Komentáře v kódu mohou být česky nebo anglicky.

### Fotografie
- Ukládat do složky `images/`.
- V `data.js` uvést relativní cestu: `"images/2024.jpg"`.
- Vždy vyplnit pole `alt` — stručně, ale smysluplně (pro přístupnost i SEO).
- Doporučená příprava: šířka **1 200–1 600 px**, formát **WebP nebo JPG (kvalita 80–85 %)**.
  Větší soubory zbytečně nafukují repo a zpomalují načítání.
- Poměr stran fotek se **zachovává** — nic se neořezává (`object-fit` se nepoužívá).

### Sémantické HTML
Používat sémantické tagy: `<nav>`, `<main>`, `<section>`, `<header>`, `<figure>`.
Vyhýbat se nadbytečným `<div>` obalovačům bez sémantiky.

### CSS
CSS proměnné jsou v `:root` (barvy, mezery, breakpointy). Přizpůsobovat přes ně,
ne přímými hodnotami. Mobile-first — základní styly platí pro mobil, media queries
přidávají tablet a desktop.

---

## Workflow

### Přidat nový rok

1. Připrav a optimalizuj fotografii → ulož do `images/YYYY.jpg` (nebo `.webp`).
2. Otevři `js/data.js` a přidej objekt do pole `TIMELINE` (nejstarší rok první):

```js
{
  year: 2026,
  text: "Text vzpomínky…",
  image: "images/2026.jpg",
  alt: "Popisek fotografie pro přístupnost"
}
```

3. Ověř lokálně (`python3 -m http.server`).
4. Commit + push (viz níže).

### Nasadit na GitHub Pages

```bash
git add .
git commit -m "Přidat rok YYYY"
git push
```

GitHub Pages se po pushnutí aktualizují automaticky (obvykle do 1–2 minut).
Stav buildu: **https://github.com/michalzbranek/photoalbum/actions**
nebo `gh api repos/michalzbranek/photoalbum/pages --jq .status`.

---

## Viz také

- **`CONTEXT.md`** — glosář doménových pojmů projektu (co je Timeline, Sekce roku…)
- **`README.md`** — uživatelský návod pro přidávání obsahu a správu alba
