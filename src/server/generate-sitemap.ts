import fs from 'fs';
import path from 'path';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BLOG_POSTS } from '../data/blog';

const BASE_URL = process.env.APP_URL || 'https://fudiyofoods.com';
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
  enLoc: string;
  arLoc: string;
}

const urls: SitemapUrl[] = [];

function addRoute(enPath: string, priority = '0.8', changefreq: 'daily' | 'weekly' | 'monthly' = 'weekly') {
  const cleanPath = enPath === '/' ? '' : enPath;
  const enUrl = `${BASE_URL}${cleanPath}`;
  const arUrl = `${BASE_URL}/ar${cleanPath}`;

  // English entry
  urls.push({
    loc: enUrl,
    lastmod: TODAY,
    changefreq,
    priority,
    enLoc: enUrl,
    arLoc: arUrl,
  });

  // Arabic entry
  urls.push({
    loc: arUrl,
    lastmod: TODAY,
    changefreq,
    priority,
    enLoc: enUrl,
    arLoc: arUrl,
  });
}

// 1. Static Pages
addRoute('/', '1.0', 'daily');
addRoute('/about', '0.8', 'monthly');
addRoute('/products', '0.9', 'daily');
addRoute('/wholesale-distributor-enquiry', '0.9', 'weekly');
addRoute('/private-label-export', '0.8', 'weekly');
addRoute('/quality-certifications', '0.8', 'monthly');
addRoute('/blog', '0.8', 'daily');
addRoute('/faq', '0.7', 'weekly');
addRoute('/contact', '0.8', 'monthly');
addRoute('/privacy-policy', '0.3', 'yearly' as any);
addRoute('/terms', '0.3', 'yearly' as any);

// 2. Strategic SEO Landing Pages
addRoute('/frozen-food-supplier-uae', '0.95', 'weekly');
addRoute('/frozen-kerala-parotta-dubai', '0.95', 'weekly');
addRoute('/halal-frozen-chicken-uae', '0.95', 'weekly');
addRoute('/fruit-pulp-supplier-uae', '0.95', 'weekly');

// 3. Category Pages
CATEGORIES.forEach((cat) => {
  addRoute(`/products/${cat.slug}`, '0.85', 'weekly');
});

// 4. Products (~45 items)
PRODUCTS.forEach((p) => {
  addRoute(`/products/${p.categorySlug}/${p.slug}`, '0.8', 'weekly');
});

// 5. Blog Posts (10 posts)
BLOG_POSTS.forEach((b) => {
  addRoute(`/blog/${b.slug}`, '0.75', 'monthly');
});

// Generate XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

urls.forEach((u) => {
  xml += `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en-AE" href="${u.enLoc}" />
    <xhtml:link rel="alternate" hreflang="ar-AE" href="${u.arLoc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${u.enLoc}" />
  </url>
`;
});

xml += `</urlset>\n`;

const outputPath = path.resolve(process.cwd(), 'public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');
console.log(`Generated sitemap with ${urls.length} localized URLs at ${outputPath}`);
