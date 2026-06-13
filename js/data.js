/**
 * Konfigurace fotoalba
 * --------------------
 * Změň ALBUM_TITLE na název svého alba.
 * Do TIMELINE přidávej záznamy — nejstarší rok jako první.
 *
 * Každý záznam má:
 *   year  — číslo roku (zobrazí se jako nadpis)
 *   text  — text vzpomínky (odstavec)
 *   image — cesta k obrázku (relativní ke stránce, např. "images/2019.jpg")
 *   alt   — popis fotografie (pro přístupnost a SEO — nezanedbávej ho!)
 */

const ALBUM_TITLE = "Michalovo Fotoalbum";

const TIMELINE = [
  {
    year: 2015,
    text: "Říká se, že nejdůležitější okamžiky v životě nikdy neohlásí svůj příchod. Prostě přijdou — tiše, skoro nenápadně — a teprve zpětně pochopíš, že se tady všechno začalo.",
    image: "https://picsum.photos/seed/2015album/900/600",
    alt: "Vzpomínka na rok 2015"
  },
  {
    year: 2017,
    text: "Nové místo, nový začátek. Prázdný pokoj, krabice u dveří a okno, ze kterého jsme poprvé viděli, jak nad střechami vychází slunce. Stačilo nám to.",
    image: "https://picsum.photos/seed/2017album/600/900",
    alt: "Nový byt, prázdný pokoj s výhledem, 2017"
  },
  {
    year: 2019,
    text: "Hory v záři pozdního odpoledne. Výhled, který stojí za každý krok. Káva z termosky tam nahoře chutná vždy líp než jakákoli jiná — to je prostě fakt.",
    image: "https://picsum.photos/seed/2019album/900/600",
    alt: "Horský výhled do údolí, 2019"
  },
  {
    year: 2021,
    text: "Rok, který nás naučil vnímat malé věci. Ranní kávu. Světlo, jak se v odpoledni přelévá přes parket. Ticho, které není prázdné, jen klidné.",
    image: "https://picsum.photos/seed/2021album/900/650",
    alt: "Ranní světlo doma, 2021"
  },
  {
    year: 2023,
    text: "Oslava u velkého kulatého stolu. Všichni, které milujeme, na jednom místě ve stejný čas. Dort se svíčkami, které jsme nakonec zapomněli sfouknout — ale to nevadilo.",
    image: "https://picsum.photos/seed/2023album/900/600",
    alt: "Oslava narozenin, rodinné setkání, 2023"
  },
  {
    year: 2025,
    text: "Nová kapitola. Každá cesta začíná prvním krokem a tento vedl přesně tam, kde jsme chtěli být. Před sebou máme spoustu prázdných stran — a to je to nejlepší, co může být.",
    image: "https://picsum.photos/seed/2025album/900/600",
    alt: "Nová cesta, výhled do budoucnosti, 2025"
  }
];
