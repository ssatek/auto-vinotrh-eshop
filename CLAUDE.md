# CLAUDE.md — Vinotrh Wine Truck Landing Page

## O projektu
Landing page pro prodejní stánek **Vinotrh Wine Truck** na Hradní ulici ve Znojmě.
Stánek je součástí konceptu Vinotrh — nenabízí víno, ale pivo, koktejly, kávu, limonády a zmrzlinu.
Sezóna: **15. 6. – 30. 9. 2026**, otevřeno každý den 10:00–22:00.

## Stack
- Čistý HTML/CSS/JS — žádný framework, žádné build nástroje
- Fonty: **Barlow** (display/nadpisy) + **DM Sans** (tělo) — Google Fonts
- Deploy: Vercel (auto-deploy z GitHub)

## Deploy & URL
- GitHub: https://github.com/ssatek/auto-vinotrh-eshop
- Vercel: https://auto-vinotrh-eshop.vercel.app
- Produkční doména: https://truck.vinotrh.cz (CNAME na Websupport — čeká na propagaci DNS)
- Workflow: `git push` → Vercel automaticky deployuje

## Spuštění
Otevřít `index.html` přímo v prohlížeči nebo spustit přes live server:
```
npx live-server .
```

## Struktura
```
auto_vinotrh.eshop/
├── index.html              # Hlavní landing page
├── Foto_auto/              # Původní fotografie auta (zdroj)
│   ├── Lahofer_Wine Trucku_text a graficke prvky.png
│   ├── Lahofer_Wine Trucku_web_komplet.jpg
│   └── ...
├── assets/
│   ├── css/style.css       # Veškeré styly, CSS proměnné (barvy, fonty)
│   ├── js/main.js          # Animace, scroll, formulář
│   ├── wine truck ceník.xlsx  # Zdrojový ceník (sloupec A: kategorie, B: název, F: cena)
│   └── images/
│       ├── logo/           # vinotrh_logo.png
│       ├── truck/          # Kopie fotek auta (truck_01–04.jpg)
│       └── bg/             # Pozadí a hero grafika
└── docs/                   # Dokumentace, poznámky
```

## Barevná paleta (z Foto_auto)
| Proměnná              | Hex       | Použití                    |
|-----------------------|-----------|----------------------------|
| `--color-dark`        | `#3D1A1A` | Nav, footer, tmavé pozadí  |
| `--color-primary`     | `#6B2D2D` | Tlačítka, akcenty          |
| `--color-mid`         | `#8B4545` | Labely, bordery            |
| `--color-light`       | `#B07070` | Jemnější akcenty           |
| `--color-bg-section`  | `#F5EDE8` | Světlé sekce               |

Paleta odvozena z polepy Wine Trucku (Foto_auto/IMG_9043.jpeg).

## Brand assets
- Logo (světlé pozadí): `assets/images/logo/vinotrh_logo.png`
- Na tmavém pozadí: CSS `filter: brightness(0) invert(1)`
- Vizuální jazyk: terracotta/burgundy, bílé liniové ilustrace vinic, bold sans-serif
- Font vychází z polepy auta — geometrický bold sans-serif (Barlow jako nejbližší shoda)

## Sekce landing page
1. **Hero** — fullscreen, vineyard background, "wine & people" headline
2. **O stánku** — popis + 4 feature cards + foto (badge: Vinotrh / součást konceptu)
3. **Nápojový lístek** — 4 kategorie: Nápoje, Koktejly & Prosecco, Káva, Zmrzlina
4. **Galerie** — CSS grid s 5 fotkami auta + lightbox (klávesy ESC/šipky, blur overlay, caption)
5. **Kontakt** — adresa, otevírací doba, e-mail, web + formulář + vložená Google Mapa

## Mobilní menu
- Hamburger tlačítko v navu otevírá fullscreen overlay
- Zavírání: křížek (pravý horní roh), klik na odkaz, nebo JS `closeMenu()`

## Responzivní poznámky
- Hero na mobilu: `padding-top: 5rem; align-items: flex-start` — aby eyebrow text nepřekrýval fixní nav

## Safari kompatibilita
- Nav blur: `-webkit-backdrop-filter` prefix nutný
- Hero výška: `min-height: 100svh` (iOS URL bar)
- Galerie: `aspect-ratio` na kontejneru `.gallery-grid__item`, ne na `img`

## Nápojový lístek — zdroj dat
Ceník: `assets/wine truck ceník.xlsx`
- Sloupec A: objem / kategorie
- Sloupec B: název nápoje
- Sloupec F: prodejní cena s DPH

**Důležité:** Wine Truck nenabízí víno. Sortiment = pivo, limonády, koktejly, prosecco, káva, zmrzlina.

## Kontaktní info na stránce
- Adresa: Hradní ulice, Znojmo
- Otevírací doba: Po–Čt 11:00–22:00, Pá–Ne 10:00–22:00 (sezóna 15. 6. – 30. 9. 2026)
- E-mail: truck@vinotrh.cz
- Web: www.vinotrh.cz
- Google Mapa: vložená jako iframe (search query: Hradní ulice, Znojmo)
