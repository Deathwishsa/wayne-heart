# Cosmetology Website Project Plan (Hair + Nails) – UPDATED
**Client Type:** Cosmetology salon (hair & nails)  
**Budget:** $10,000 (premium frontend-only Angular experience)  
**Scope:** 100% whitelisted (all client data lives in one constants file)  
**Theme:** Clean white background + professional pink accents (feminine, luxurious, modern)  
**Goal:** Fast, beautiful, conversion-focused single-page-feel site that feels like a $10k custom build.

### Key Updates (as per your instructions)
- **SCSS only** – All styles will use `.scss` files (global `styles.scss` + component-specific SCSS)
- **Exact folder structure** you requested:
src/app/
├── common/
│   └── component/
│       ├── header/
│       └── footer/
├── page/
│   ├── home/          ← (or index – I recommend "home" for clarity)
│   ├── contact-us/
│   ├── booking/
│   ├── gallery/
│   └── menu/          ← (this replaces "services" – products & services page)
├── constants/
│   └── client-data.ts
├── models/
├── services/
└── shared/            ← reusable UI components (cards, calendar, etc.)

- All pages will be standalone components under `src/app/page/`
- Routing will map cleanly: `/` → Home, `/menu`, `/gallery`, `/booking`, `/contact-us`

### Research Summary (unchanged)
Top nail/hair salon sites use hero sliders, high-res galleries, prominent booking CTAs, clean white space, soft pink/blush palettes. Pink + white theme is perfect.

### Tech Stack (Frontend-Only, Professional)
- Angular 18+ (standalone components)
- **SCSS** (global variables for colors)
- TypeScript
- No heavy frameworks — keep it lightweight
- Optional: `date-fns` + custom calendar (or `angular-calendar` if you prefer)
- Responsive, accessible, SEO-ready

---

**UPDATED-COLOR-PALETTE-AND-GLOBAL-STYLES.md**

```markdown
# Global SCSS (styles.scss) + Color System

## Primary, Secondary, Tertiary Colors (whitelisted in :root)
```scss
:root {
--primary-pink: #e91e63;     /* Main brand pink - buttons, accents, hover */
--secondary-pink: #f8bbd0;   /* Soft blush pink - backgrounds, highlights */
--tertiary-pink: #ff4081;    /* Bright accent pink - CTAs, highlights */
--white: #ffffff;
--text-dark: #1f1f1f;
--text-light: #555555;
--gray-light: #f5f5f5;
--shadow: 0 10px 30px rgba(233, 30, 99, 0.15);
}


---

**UPDATED-ANGULAR-STRUCTURE-AND-COMPONENTS.md**

```markdown
# Angular Project Structure (Exact Folder Layout You Requested)

src/app/
├── common/
│   └── component/
│       ├── header/
│       │   ├── header.component.ts
│       │   ├── header.component.html
│       │   └── header.component.scss
│       └── footer/
│           ├── footer.component.ts
│           ├── footer.component.html
│           └── footer.component.scss
├── page/
│   ├── home/
│   │   ├── home.component.ts
│   │   ├── home.component.html
│   │   └── home.component.scss
│   ├── contact-us/
│   │   ├── contact-us.component.ts
│   │   ├── contact-us.component.html
│   │   └── contact-us.component.scss
│   ├── booking/
│   │   ├── booking.component.ts
│   │   ├── booking.component.html
│   │   └── booking.component.scss
│   ├── gallery/
│   │   ├── gallery.component.ts
│   │   ├── gallery.component.html
│   │   └── gallery.component.scss
│   └── menu/                  ← Products & Services (was "services")
│       ├── menu.component.ts
│       ├── menu.component.html
│       └── menu.component.scss
├── constants/
│   └── client-data.ts
├── models/
│   └── booking.model.ts
├── services/
│   └── data.service.ts
├── shared/                    ← Reusable components
│   ├── service-card/
│   ├── gallery-grid/
│   ├── calendar-grid/
│   ├── day-cell/
│   └── hero-slider/
├── app.component.ts
├── app.routes.ts
└── styles.scss