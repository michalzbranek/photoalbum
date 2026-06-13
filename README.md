# Fotoalbum

Responzivní statická webová stránka — fotoalbum ve formě časové osy.
Žádné závislosti, žádný build. Funguje přímo z prohlížeče.

## Jak přidat rok

1. Ulož fotografii do složky `images/` (doporučený formát: JPG nebo WebP, šířka ~1 200–1 600 px).
2. Otevři `js/data.js` a přidej nový objekt do pole `TIMELINE`:

```js
{
  year: 2026,
  text: "Text vzpomínky na tento rok…",
  image: "images/2026.jpg",
  alt: "Stručný popis fotografie pro přístupnost"
}
```

Záznamy nechej seřazené od nejstaršího roku po nejnovější.

## Jak změnit název alba

V `js/data.js` uprav konstantu `ALBUM_TITLE`:

```js
const ALBUM_TITLE = "Název tvého alba";
```

## Jak spustit lokálně

Stránka vyžaduje jednoduchý HTTP server (přímé otevření `index.html` v prohlížeči
nefunguje správně kvůli lazy-loadingu a bezpečnostním omezením).

Pokud máš nainstalovaný Python 3:

```bash
python3 -m http.server
# Otevři http://localhost:8000
```

Alternativy: VS Code Live Server, `npx serve`, `npx http-server`.

## Nasazení na GitHub Pages

1. Push repozitář na GitHub.
2. V repozitáři otevři **Settings → Pages**.
3. Pod **Source** vyber větev `main` a složku `/ (root)`.
4. Uložit — stránka bude za chvíli dostupná na `https://<username>.github.io/<repo>/`.

## Optimalizace fotografií

Velké soubory v repu zpomalí stahování a mohou překročit limity GitHubu.
Doporučená příprava fotek před nahráním:

- Šířka: 1 200–1 600 px (větší rozlišení není v prohlížeči vidět)
- Formát: WebP (~30–40 % menší než JPG při stejné kvalitě), nebo JPG s kvalitou 80–85 %
- Nástroje: [Squoosh](https://squoosh.app/), ImageMagick, Preview (macOS)

## Struktura projektu

```
photoalbum/
├── index.html          # HTML kostra stránky
├── css/
│   └── styles.css      # styly (mobile-first, 3 breakpointy)
├── js/
│   ├── data.js         # OBSAH — zde edituj roky, texty, fotky
│   └── main.js         # logika: render, navigace, scroll-spy
├── images/             # sem patří tvé fotografie
├── CONTEXT.md          # glosář pojmů projektu
├── .nojekyll           # vypíná Jekyll processing na GitHub Pages
└── README.md           # tento soubor
```
