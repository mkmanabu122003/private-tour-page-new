# Dead Click Audit — 2026-04-26

Static analysis of unlinked clickable-looking elements across all 123 prerendered pages, cross-referenced with Microsoft Clarity dead-click data (3-day window ending 2026-04-26).

## Methodology

- **Unlinked images**: `<img>` tags inside `<main>` or `<article>` not wrapped by `<a>`. Logos/icons/avatars excluded.
- **Dead table rows**: `<tr>` with no `<a>` link inside any `<td>`.
- **Score**: `imgs × 1 + dead_rows × 2 + clarity_pc_dead_pct × 0.5`. Higher = higher dead-click risk.
- **Clarity data**: From `docs/analytics/raw/2026-04-26_clarity_3d_url_x_device.json`. Only URLs with traffic in the 3-day window have measured percentages.

## Priority Matrix (Top 30)

| Rank | URL | Unlinked imgs | Table rows w/o link | PC dead% | Mobile dead% | Sessions | Score |
|---|---|---|---|---|---|---|---|
| 1 | `/tours/tsukiji-ginza` | 3 | 16 | **50.0%** | — | 4 | 60.0 |
| 2 | `/blog/kamakura-day-trip-guide-vs-solo` | 1 | 29 | — | — | — | 59.0 |
| 3 | `/es/blog/kamakura-con-guia-vs-solo` | 1 | 29 | — | — | — | 59.0 |
| 4 | `/es` | 5 | 0 | **100.0%** | — | 1 | 55.0 |
| 5 | `/blog/japan-rail-pass-worth-it` | 5 | 7 | **66.7%** | — | 4 | 52.3 |
| 6 | `/blog/nikko-day-trip-guide-vs-solo` | 1 | 22 | — | — | — | 45.0 |
| 7 | `/es/blog/nikko-con-guia-vs-solo` | 1 | 22 | — | — | — | 45.0 |
| 8 | `/blog/kamakura-vs-hakone-vs-nikko-day-trip` | 4 | 7 | **50.0%** | — | 5 | 43.0 |
| 9 | `/es/blog/japan-rail-pass-vale-la-pena` | 5 | 18 | — | — | — | 41.0 |
| 10 | `/tours/tokyo-food-tour` | 6 | 16 | — | — | 1 | 38.0 |
| 11 | `/tours/asakusa` | 4 | 16 | — | — | 1 | 36.0 |
| 12 | `/tours/tokyo-night-tour` | 4 | 16 | — | — | 1 | 36.0 |
| 13 | `/tours/hakone-day-trip` | 3 | 16 | — | — | — | 35.0 |
| 14 | `/tours/imperial-palace` | 3 | 16 | — | — | — | 35.0 |
| 15 | `/tours/kamakura-day-trip` | 3 | 16 | — | — | 2 | 35.0 |
| 16 | `/tours/shibuya-harajuku` | 3 | 16 | — | — | — | 35.0 |
| 17 | `/tours/yanaka` | 3 | 16 | — | — | — | 35.0 |
| 18 | `/tours/custom` | 1 | 16 | — | — | 1 | 33.0 |
| 19 | `/tours/nikko-day-trip` | 1 | 16 | — | — | — | 33.0 |
| 20 | `/es/blog/tokio-con-presupuesto` | 1 | 15 | — | — | — | 31.0 |
| 21 | `/blog/tsukiji-vs-toyosu` | 3 | 13 | — | — | 2 | 29.0 |
| 22 | `/es/blog/tsukiji-vs-toyosu` | 3 | 13 | — | — | — | 29.0 |
| 23 | `/blog/best-time-to-visit-tokyo` | 1 | 13 | — | — | — | 27.0 |
| 24 | `/es/blog/mejor-epoca-visitar-tokio` | 1 | 13 | — | — | — | 27.0 |
| 25 | `/blog/tsukiji-market-guide` | 8 | 0 | **28.6%** | 8.3% | 19 | 22.3 |
| 26 | `/blog/harajuku-vs-shibuya-vs-shinjuku` | 1 | 9 | — | — | — | 19.0 |
| 27 | `/es/blog/comparativa-excursiones` | 4 | 7 | — | — | 1 | 18.0 |
| 28 | `/es/blog/guia-asakusa-completa` | 4 | 6 | — | — | — | 16.0 |
| 29 | `/` | 5 | 0 | **16.7%** | — | 9 | 13.3 |
| 30 | `/blog/onsen-day-trips-beyond-hakone` | 1 | 6 | — | — | — | 13.0 |

## Top 5 — Detail with image candidates

### `/tours/tsukiji-ginza`
- Unlinked images: **3**
- Table rows without links: **16 of 16**
- Clarity PC dead click rate: **50.00%**

Unlinked image candidates:

| Image | Alt text |
|---|---|
| `/tours/tsukiji-outer-market.webp` | Tsukiji Outer Market - Tokyo private food tour |
| `/tours/tsukiji-street-food.webp` | Fresh seafood skewers at Tsukiji Market Tokyo |
| `/tours/ginza-shopping-district.webp` | Ginza luxury shopping district - combine with Tsukiji tour |

### `/blog/kamakura-day-trip-guide-vs-solo`
- Unlinked images: **1**
- Table rows without links: **29 of 29**

Unlinked image candidates:

| Image | Alt text |
|---|---|
| `/tours/kamakura-great-buddha.webp` | The Great Buddha of Kamakura (Kotoku-in) |

### `/es/blog/kamakura-con-guia-vs-solo`
- Unlinked images: **1**
- Table rows without links: **29 of 29**

Unlinked image candidates:

| Image | Alt text |
|---|---|
| `/tours/kamakura-great-buddha.webp` | Gran Buda de Kamakura (Kotoku-in) |

### `/es`
- Unlinked images: **5**
- Table rows without links: **0 of 0**
- Clarity PC dead click rate: **100.00%**

Unlinked image candidates:

| Image | Alt text |
|---|---|
| `/tour-photos/group-photo.webp` | Foto grupal con invitados durante un tour privado a pie por  |
| `/tour-photos/group-photo.webp` | Foto grupal con invitados durante un tour privado a pie por  |
| `/tour-photos/photo1.webp` | Explorando los monumentos culturales de Tokio en un tour gui |
| `/tour-photos/photo2.webp` | Descubriendo los tesoros ocultos de Tokio con un guía local |
| `/tour-photos/asakusa-guest-selfie.webp` | Selfie con invitados junto al río Sumida cerca de Asakusa co |

### `/blog/japan-rail-pass-worth-it`
- Unlinked images: **5**
- Table rows without links: **7 of 7**
- Clarity PC dead click rate: **66.67%**

Unlinked image candidates:

| Image | Alt text |
|---|---|
| `/tours/hakone-lake-ashi-fuji.webp` | Lake Ashi and Mt. Fuji in Hakone, a popular JR Pass day trip |
| `/blog/shinkansen-n700-tokyo-station.webp` | N700 Series Shinkansen bullet train at a station platform in |
| `/blog/fushimi-inari-senbon-torii-kyoto.webp` | Thousands of vermillion torii gates forming a tunnel at Fush |
| `/blog/kinkakuji-golden-pavilion-kyoto.webp` | Kinkaku-ji, the Golden Pavilion temple reflecting on a pond  |
| `/blog/jr-okachimachi-station-entrance.webp` | JR Okachimachi Station entrance in Tokyo showing the JR logo |

## Recommended fix patterns

**Pattern 1 — Content image inside blog → wrap with `<Link>`:**
```tsx
// before
<img src="/images/tours/hakone-lake-ashi-fuji.webp" alt="..." />

// after
<Link to="/tours/hakone-day-trip" className="block hover:opacity-90 transition">
  <img src="/images/tours/hakone-lake-ashi-fuji.webp" alt="..." />
</Link>
```

**Pattern 2 — Comparison table row → make first cell linked:**
```tsx
<td>
  <Link to="/tours/hakone-day-trip" className="text-accent hover:underline">
    Hakone
  </Link>
</td>
```

**Pattern 3 — Hero/decorative image → leave unlinked but add `pointer-events-none` to confirm intent:**
```tsx
<img src="...hero.webp" className="... pointer-events-none" />
```

## Page count summary

- Pages scanned: **123**
- Pages with at least 1 issue: **112**
- Pages with measured Clarity dead-click data: **6**
- Total unlinked images across site: **346**
