# Trendpuls Portfolio Website

Dieses Projekt ist eine statische Portfolio- und Landingpage fuer Trendpuls. Die Seite praesentiert Services, Workflow, Projekte und Kontaktinformationen. Fokus liegt auf einer starken Hero-Section, einem klaren CTA sowie interaktiven Elementen wie Video-Overlays, Scroll-Effekten und einem Custom Cursor.

## Technologien
- HTML5, CSS3, JavaScript
- Bootstrap 5 (Layout/Grid)
- AOS (Scroll-Animationen)
- Font Awesome (Icons)
- jQuery (Utility/Plugins)

## Features & Erklaerung der Dateien

### Struktur & Inhalte
- `index.html`  
  Enthaelt die komplette Seitenstruktur: Hero, Logoslider, Funnel/Stats, Services, Workflow, Portfolio-Videos, About und Footer. Das Hero-Video skaliert beim Scrollen (via `data-hero-video`).

### Styling
- `css/style.css`  
  Zentrales Styling fuer Layout, Typografie, Hero, CTA, Videos, Slider-Animationen und Custom Cursor.
- `css/responsive.css`  
  Breakpoints fuer verschiedene Bildschirmgroessen (Hero-Layout, Headlines, Abstaende).
- `css/jquery.fancybox.min.css`  
  Vendor-Styles fuer Fancybox (Lightbox).

### Interaktionen & JavaScript
- `js/main.js`  
  Steuert Video-Overlays (Play/Pause), den Custom Cursor, Smooth-Scroll fuer Anchor-Links, das Mobile-Nav-Verhalten und das Scroll-basierte Skalieren des Hero-Videos. Initialisiert AOS.
- `js/jquery.fancybox.min.js`  
  Fancybox-Library (optional fuer Lightbox-Effekte).

### Assets
- `images/`  
  Grafiken, Logos, Poster und Videos.
- `front/`  
  Lokale Schriften (Neue Montreal).

## Lokales Starten
Einfach `index.html` im Browser oeffnen.

## Schwierigkeiten & Loesungen
- **Hero-Layout & CTA-Design**  
  Der Titel sollte sehr gross und zentriert wirken, ohne dass Inhalte ueberlappen. Ich habe das Layout auf eine gestapelte Struktur umgebaut und den CTA als Block-Button gestaltet.
- **Scroll-basiertes Video-Skalieren**  
  Die Herausforderung war, dass das Video nicht abgeschnitten wird und seine Maximalgroesse frueh genug erreicht. Geloest durch dynamische Breite via Scroll-Progress und ein flexibles Hero-Layout ohne feste Hoehe.
- **Responsive Typografie**  
  Die grosse Headline musste auf kleineren Screens skalieren, ohne den Inhalt zu sprengen. Dafuer wurden eigene Breakpoints und skalierte Fontgroessen definiert.

## Lernpunkte
- Sauberes Zusammenspiel aus Layout (CSS) und Interaktion (JS) fuer scroll-basierte Effekte.
- Feinabstimmung von Typografie und CTA-Design fuer klare visuelle Hierarchie.
