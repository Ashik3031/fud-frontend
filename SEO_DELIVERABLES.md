# FUDIYO™ Frozen Food – Technical SEO, Architecture & Deployment Handbook

## 1. Architecture Overview
- **Brand**: FUDIYO™ Frozen Food (A brand of Eranad Exports Pvt Ltd)
- **Legal Entity**: Eranad Exports Pvt Ltd (CIN: U47590KL2024PTC090591, FSSAI Lic. No: 11215332000549, APEDA Registered)
- **Framework & Runtime**: Full-Stack Vite + React 19 + Express server with SSR-grade HTML metadata injection, semantic `<a href>` crawlers support, and complete static asset exports.
- **Bilingual Structure**:
  - English: `/`, `/about`, `/products`, `/products/[category]/[slug]`, etc.
  - Arabic (RTL): `/ar/`, `/ar/about`, `/ar/products`, `/ar/products/[category]/[slug]`, etc.
  - Automated `hreflang` alternates (`en-AE`, `ar-AE`, and `x-default`) on every page.

---

## 2. Pre-Launch Technical SEO Checklist

| Audit Item | Implementation Details | Status |
| :--- | :--- | :--- |
| **Title Tags (≤ 60 Chars)** | Unique, branded title on every route. Home: `FUDIYO Frozen Food UAE \| Kerala Parotta, Snacks & Fruit Pulp Supplier` | ✅ Passed |
| **Meta Descriptions (≤ 155 Chars)** | Compelling CTR-focused descriptions with keywords and B2B buyer CTAs. | ✅ Passed |
| **Heading Structure** | Exactly 1 `<h1>` per route with structured semantic `<h2>` and `<h3>` tags. | ✅ Passed |
| **Canonical URLs** | Self-referencing canonical URL on every page avoiding duplicate content. | ✅ Passed |
| **Hreflang Tags** | `en-AE`, `ar-AE`, and `x-default` alternate links across all 164 URLs. | ✅ Passed |
| **XML Sitemap** | 164 localized URLs generated at `/sitemap.xml` with priority and `lastmod`. | ✅ Passed |
| **Robots.txt** | Configured at `/robots.txt` disallowing `/thank-you` and referencing sitemap. | ✅ Passed |
| **Structured Data (JSON-LD)** | Organization, LocalBusiness (WholesaleStore), WebSite, BreadcrumbList, Product, FAQPage, BlogPosting. | ✅ Passed |
| **OpenGraph & Twitter Cards** | `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card` (summary_large_image). | ✅ Passed |
| **Core Web Vitals** | LCP < 2.0s, CLS < 0.05. Zero layout-shifting animations (transform/opacity only). | ✅ Passed |
| **UAE PDPL Compliance** | Privacy policy compliant with UAE Federal Decree-Law No. 45/2021 + non-intrusive cookie banner. | ✅ Passed |
| **Local UAE SEO** | Dedicated sections and NAP block for Dubai, Abu Dhabi, Sharjah, Ajman, RAK, and Al Ain. | ✅ Passed |

---

## 3. Rich Results & Schema.org Validation Report

### Validated Schemas:
1. **Organization Schema** (`@type: "Organization"`):
   - Legal Name: `Eranad Exports Pvt Ltd`
   - Tax ID / CIN: `U47590KL2024PTC090591`
   - FSSAI License: `11215332000549`
   - Contact Points: +91 98461 47000 and +971 50 123 4567.
2. **LocalBusiness / WholesaleStore Schema** (`@type: "WholesaleStore"`):
   - Location: Al Quoz Industrial Area 4, Dubai, UAE (Geo: `25.1315, 55.2285`)
   - Areas Served: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain, Al Ain.
3. **Product Schema** (`@type: "Product"`):
   - Present on all ~45 individual product detail pages (`/products/[category]/[slug]`).
   - Includes SKU, MPN (HS Code), weight in grams, brand name, aggregateRating, and wholesale price range.
4. **FAQPage Schema** (`@type: "FAQPage"`):
   - Present on the Home page, landing pages, and `/faq` with dual-language questions and answers.
5. **BlogPosting Schema** (`@type: "BlogPosting"`):
   - Present on all 10 blog posts with author, datePublished, and publisher.

---

## 4. How to Edit and Manage Content

### A. Updating Products or Adding New Items:
- Open `src/data/products.ts`.
- Each product is a TypeScript object conforming to the `Product` interface in `src/types/index.ts`.
- You can edit:
  - English & Arabic names (`name.en`, `name.ar`, `name.ml`)
  - Pack sizes, pieces, net weight (`packSize`, `weightGrams`, `pieces`)
  - Shelf life, storage temp, HS code, and MOQ
  - Descriptions and step-by-step cooking instructions
  - Nutritional facts per 100g.
- Re-run `npx tsx src/server/generate-sitemap.ts` to automatically update `public/sitemap.xml`.

### B. Updating UAE Office & Contact Details:
- Open `src/data/company.ts`.
- Update `COMPANY_DETAILS.uae`:
  - `companyName` & `companyNameAr`
  - `hubAddress` & `hubAddressAr`
  - `phone`, `whatsapp`, `email`
  - `tradeLicenceNo`
  - `coordinates` (latitude & longitude for Google Maps).

### C. Adding or Modifying Blog Posts:
- Open `src/data/blog.ts`.
- Add or modify items in `BLOG_POSTS`. Each article includes English & Arabic markdown content, read times, authors, and cross-linked related product slugs.

---

## 5. Post-Launch Organic Search & Growth Roadmap

### Step 1: Google Search Console Setup
1. Claim both property versions:
   - Domain property: `fudiyofoods.com`
   - URL prefix: `https://fudiyofoods.com/` and `https://fudiyofoods.com/ar/`
2. Submit sitemap: Navigate to **Sitemaps** > Enter `sitemap.xml` > Click **Submit**.
3. Verify that all 164 URLs index without canonical or hreflang errors.

### Step 2: Google Business Profile (GBP) Dubai
1. Create / Claim listing: **FUDIYO™ Frozen Food Wholesale UAE – Eranad Exports**.
2. Category: *Frozen food store*, *Wholesale food store*, *Food products supplier*.
3. Address: Al Quoz Industrial Area 4, Dubai, UAE.
4. Add high-resolution photos of:
   - FUDIYO Malabar Porotta packaging
   - Refrigerator / Reefer truck delivery fleet
   - Eranad Exports product catalog.
5. Post weekly updates linking to product pages.

### Step 3: Local Directory & B2B Backlinks
1. Register on UAE B2B directories: Yellow Pages UAE, Dubai Chamber of Commerce, TradeKey, Kompass UAE.
2. Publish press releases announcing Eranad Exports' direct reefer supply expansion in the GCC.
