# Fotoalbum — Immersive

Modernizovaná verze fotoalba: tmavá galerie, full-bleed fotky, velké letopočty,
scroll-spy navigace, jemné scroll animace a galerie miniatur u každého roku.
Žádné závislosti, žádný build — stejná struktura jako původní projekt.

## Jak nasadit

Nahraď v repozitáři soubory \`index.html\`, \`css/styles.css\`, \`js/data.js\` a \`js/main.js\`
těmito verzemi a pushni na GitHub. GitHub Pages se aktualizuje automaticky.

## Jak přidat rok / fotky

V \`js/data.js\` má každý rok pole \`photos\`:

\`\`\`js
{
  year: 2026,
  text: 'Text vzpomínky…',
  photos: ['images/2026-1.jpg', 'images/2026-2.jpg', 'images/2026-3.jpg'],
  alt: 'Popis fotografií',
}
\`\`\`

- První fotka v poli se zobrazí jako velká.
- Všechny fotky se ukážou jako miniatury; kliknutím na miniaturu se fotka zobrazí nahoře (miniatury se nemění).
- Doporučená šířka fotek: ~1600 px (JPG kvalita 80–85 % nebo WebP).

## Název alba

V \`js/data.js\` uprav \`ALBUM_TITLE\`.
