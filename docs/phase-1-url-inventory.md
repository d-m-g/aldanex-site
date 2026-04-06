# Phase 1 URL Inventory

## Scope

This file completes Phase 1, Step 1 from [plan.md](/Users/denisgorovoi/PROGr/aldanex-site/plan.md): crawl all existing WordPress URLs, including navigation and likely hidden/footer destinations, and record them as the migration source of truth.

## Crawl Date

- 2026-04-06

## Source

- Public crawl of `https://aldanex.fi/`
- Public crawl of internal links exposed from the homepage
- Search-index discovery for internal WordPress pages

## Confirmed WordPress URLs

| URL                            | Page title                     | Discovery source                  | Notes                                                           |
| ------------------------------ | ------------------------------ | --------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------- |
| `https://aldanex.fi/`          | `ALDANEX GROUP                 | `                                 | homepage + search index                                         | Homepage includes service overview and embedded contact section. |
| `https://aldanex.fi/property/` | `Property \| ALDANEX GROUP`    | homepage nav + search index       | Core business page for property, rentals, and maintenance.      |
| `https://aldanex.fi/saas/`     | `IT services \| ALDANEX GROUP` | homepage "IT" link + search index | Live WordPress IT page currently uses the legacy slug `/saas/`. |

## Internal Links Found On Current Site

| Link label   | Destination                            | Type             | Notes                                                                                                                           |
| ------------ | -------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `Aldanex`    | `https://aldanex.fi/`                  | internal         | Main nav item.                                                                                                                  |
| `Property`   | `https://aldanex.fi/property/`         | internal         | Main nav item.                                                                                                                  |
| `IT`         | `https://aldanex.fi/saas/`             | internal         | Main nav item label is `IT`; rebuild target should normalize this route to `/it/`.                                              |
| `Contact us` | `#contact` or homepage contact section | internal section | Exposed as a nav/action entry, but current crawl shows the contact form embedded on the homepage rather than a standalone page. |

## External Destinations Referenced

| URL                          | Why it matters                                          |
| ---------------------------- | ------------------------------------------------------- |
| `https://rauhanvillage.com/` | Linked from property/service cards and product details. |

## Hidden / Footer / Legal Link Findings

- Footer content currently exposes company names, business IDs, phone number, and email.
- No dedicated legal-policy URLs were discovered from the indexed pages or visible footer content.
- No additional hidden internal WordPress pages were confirmed from the accessible crawl snapshot beyond `/`, `/property/`, and `/saas/`.

## Migration Notes

- The target rebuild structure in [plan.md](/Users/denisgorovoi/PROGr/aldanex-site/plan.md) is now `home`, `property`, and `it`, with the contact experience rebuilt as a homepage section plus form flow.
- The live WordPress site still serves the IT content from `/saas/`, so launch should include a redirect from `/saas/` to `/it/` if the new route naming is kept.
- Recommended next artifact: page-by-page content inventory covering headings, body copy, CTAs, form fields, and SEO metadata for the three confirmed URLs.
