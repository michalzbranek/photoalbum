# Glosář

Pojmy používané v projektu fotoalba.

---

## Timeline

Celá časová osa fotoalba. Skládá se ze **sekcí roků** seřazených od nejstaršího po nejnovější rok. Data jsou definována v `js/data.js` jako pole objektů.

## Sekce roku

Jedna vizuální jednotka časové osy odpovídající konkrétnímu roku. Každá sekce obsahuje:
- rok (zobrazený jako velký číselný nadpis)
- fotografii
- text vzpomínky

Sudé a liché sekce střídají strany rozvržení (fotka vlevo / vpravo).

## Navigace

Fixní panel zobrazující seznam roků ze timeline. Umožňuje přeskočit přímo na konkrétní sekci roku.

- **Desktop / tablet:** vertikální lišta na levém okraji obrazovky s vertikální čárou
- **Mobil:** horizontální lišta fixovaná nahoře (vodorovně scrollovatelná)

## Aktivní rok

Rok, jehož sekce je aktuálně viditelná v centrální části viewportu. Příslušný odkaz v navigaci je automaticky zvýrazněn (třída `is-active`). Sledování zajišťuje `IntersectionObserver` v `js/main.js`.
