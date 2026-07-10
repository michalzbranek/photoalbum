/**
 * Konfigurace fotoalba
 * --------------------
 * Změň ALBUM_TITLE na název svého alba.
 * Do TIMELINE přidávej záznamy — nejstarší rok jako první.
 *
 * Každý záznam má:
 *   year   — číslo roku (zobrazí se jako velký letopočet)
 *   text   — text vzpomínky
 *   photos — pole cest k fotkám (např. ["images/2019-1.jpg", "images/2019-2.jpg"]).
 *            První fotka se zobrazí jako velká; všechny se ukážou jako miniatury
 *            a kliknutím na miniaturu se fotka zobrazí nahoře.
 *            Doporučená šířka fotek: ~1600 px.
 *   alt    — popis fotografií (pro přístupnost a SEO)
 */
/* exported ALBUM_TITLE, TIMELINE */

const ALBUM_TITLE = 'Michalovo Fotoalbum'

const TIMELINE = [
  {
    year: 2015,
    text: 'Říká se, že nejdůležitější okamžiky v životě nikdy neohlásí svůj příchod. Prostě přijdou — tiše, skoro nenápadně — a teprve zpětně pochopíš, že se tady všechno začalo.',
    photos: [
      'https://picsum.photos/seed/2015album/1600/900',
      'https://picsum.photos/seed/2015b/1600/900',
      'https://picsum.photos/seed/2015c/1600/900',
      'https://picsum.photos/seed/2015d/1600/900',
    ],
    alt: 'Vzpomínka na rok 2015',
  },
  {
    year: 2017,
    text: 'Nové místo, nový začátek. Prázdný pokoj, krabice u dveří a okno, ze kterého jsme poprvé viděli, jak nad střechami vychází slunce. Stačilo nám to.',
    photos: [
      'https://picsum.photos/seed/2017album/1600/900',
      'https://picsum.photos/seed/2017b/1600/900',
      'https://picsum.photos/seed/2017c/1600/900',
      'https://picsum.photos/seed/2017d/1600/900',
    ],
    alt: 'Nový byt, prázdný pokoj s výhledem, 2017',
  },
  {
    year: 2019,
    text: 'Hory v záři pozdního odpoledne. Výhled, který stojí za každý krok. Káva z termosky tam nahoře chutná vždy líp než jakákoli jiná — to je prostě fakt.',
    photos: [
      'https://picsum.photos/seed/2019album/1600/900',
      'https://picsum.photos/seed/2019b/1600/900',
      'https://picsum.photos/seed/2019c/1600/900',
      'https://picsum.photos/seed/2019d/1600/900',
    ],
    alt: 'Horský výhled do údolí, 2019',
  },
  {
    year: 2021,
    text: 'Rok, který nás naučil vnímat malé věci. Ranní kávu. Světlo, jak se v odpoledni přelévá přes parket. Ticho, které není prázdné, jen klidné.',
    photos: [
      'https://picsum.photos/seed/2021album/1600/900',
      'https://picsum.photos/seed/2021b/1600/900',
      'https://picsum.photos/seed/2021c/1600/900',
      'https://picsum.photos/seed/2021d/1600/900',
    ],
    alt: 'Ranní světlo doma, 2021',
  },
  {
    year: 2023,
    text: 'Oslava u velkého kulatého stolu. Všichni, které milujeme, na jednom místě ve stejný čas. Dort se svíčkami, které jsme nakonec zapomněli sfouknout — ale to nevadilo.',
    photos: [
      'https://picsum.photos/seed/2023album/1600/900',
      'https://picsum.photos/seed/2023b/1600/900',
      'https://picsum.photos/seed/2023c/1600/900',
      'https://picsum.photos/seed/2023d/1600/900',
    ],
    alt: 'Oslava narozenin, rodinné setkání, 2023',
  },
  {
    year: 2025,
    text: 'Nová kapitola. Každá cesta začíná prvním krokem a tento vedl přesně tam, kde jsme chtěli být. Před sebou máme spoustu prázdných stran — a to je to nejlepší, co může být.',
    photos: [
      'https://picsum.photos/seed/2025album/1600/900',
      'https://picsum.photos/seed/2025b/1600/900',
      'https://picsum.photos/seed/2025c/1600/900',
      'https://picsum.photos/seed/2025d/1600/900',
    ],
    alt: 'Nová cesta, výhled do budoucnosti, 2025',
  },
]
