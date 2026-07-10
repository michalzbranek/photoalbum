# Glosář

Pojmy používané v projektu fotoalba.

---

## Timeline

Celá časová osa fotoalba. Skládá se ze **sekcí roků** seřazených od nejstaršího po nejnovější rok. Data jsou definována v `js/data.js` jako pole objektů.

## Sekce roku

Jedna vizuální jednotka časové osy odpovídající konkrétnímu roku. Každá sekce obsahuje:
- full-bleed velkou fotku (první z pole `photos`) s tmavým overlay, přes který
  je obrysový letopočet a text vzpomínky
- galerii miniatur se všemi fotkami daného roku (pokud je jich víc) — klik na
  miniaturu vymění fotku zobrazenou nahoře, miniatury samy se nemění

## Navigace

Fixní horní lišta (`#site-header`) se seznamem roků ze timeline. Umožňuje
přeskočit přímo na konkrétní sekci roku. Na mobilu (< 720 px) se zalamuje a
zůstává vystředěná; na širších obrazovkách je řádek roků zarovnaný doprava
vedle názvu alba.

## Aktivní rok

Rok, jehož sekce jako poslední překročila svým horním okrajem **střed viewportu**. Na úplném spodku stránky je aktivní vždy poslední rok. Příslušný odkaz v navigaci je automaticky zvýrazněn (třída `is-active`).
