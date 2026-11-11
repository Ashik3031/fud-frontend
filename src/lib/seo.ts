import { COMPANY_DETAILS } from '../data/company';
import { Locale, Product, BlogPost, FAQItem } from '../types';

export const APP_BASE_URL = typeof window !== 'undefined' 
  ? window.location.origin 
  : (process.env.APP_URL || 'https://fudiyofoods.com');

export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${APP_BASE_URL}${cleanPath}`;
}

export function getAlternateHreflangs(currentPath: string, locale: Locale) {
  // If in /ar/... currentPath has /ar prefix
  let englishPath = currentPath;
  let arabicPath = currentPath;

  if (currentPath.startsWith('/ar/')) {
    englishPath = currentPath.replace(/^\/ar/, '') || '/';
    arabicPath = currentPath;
  } else if (currentPath === '/ar') {
    englishPath = '/';
    arabicPath = '/ar';
  } else {
    englishPath = currentPath;
    arabicPath = currentPath === '/' ? '/ar' : `/ar${currentPath}`;
  }

  return {
    'en-AE': `${APP_BASE_URL}${englishPath}`,
    'ar-AE': `${APP_BASE_URL}${arabicPath}`,
    'x-default': `${APP_BASE_URL}${englishPath}`,
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FUDIYO™ Frozen Food',
    legalName: COMPANY_DETAILS.legalName,
    url: APP_BASE_URL,
    logo: `${APP_BASE_URL}/brand/catalogue-cover.jpg`,
    description: 'Premier Indian frozen food brand by Eranad Exports Pvt Ltd delivering authentic Kerala Malabar parotta, snacks, fresh-cut vegetables, instant gravy mixes, halal chicken and 100% natural fruit pulps.',
    foundingDate: '2024',
    taxID: COMPANY_DETAILS.cin,
    fssaiLicense: COMPANY_DETAILS.fssaiNumber,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '18/624E, K.V. Tower, Manjeri Road, Pandikkad',
      addressLocality: 'Malappuram',
      addressRegion: 'Kerala',
      postalCode: '676521',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-98461-47000',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic', 'Malayalam', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971-50-123-4567',
        contactType: 'sales',
        areaServed: 'AE',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    sameAs: [
      'https://www.eranadexports.com',
      'https://www.instagram.com/fudiyofoods',
      'https://www.facebook.com/fudiyofoods',
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WholesaleStore',
    name: 'FUDIYO Frozen Food Wholesale UAE',
    image: `${APP_BASE_URL}/brand/catalogue-cover.jpg`,
    '@id': `${APP_BASE_URL}/#wholesale-store`,
    url: APP_BASE_URL,
    telephone: '+971 50 123 4567',
    priceRange: 'AED 150 - AED 15,000+',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al Quoz Industrial Area 4',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_DETAILS.uae.coordinates.lat,
      longitude: COMPANY_DETAILS.uae.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
    areaServed: COMPANY_DETAILS.uae.emiratesServed.map((emirate) => ({
      '@type': 'AdministrativeArea',
      name: emirate,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FUDIYO Frozen Food UAE',
    url: APP_BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${APP_BASE_URL}/products?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${APP_BASE_URL}${item.url}`,
    })),
  };
}

export function generateProductSchema(product: Product, locale: Locale) {
  const isEn = locale === 'en';
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: isEn ? product.name.en : product.name.ar,
    image: [`${APP_BASE_URL}${product.image}`, `${APP_BASE_URL}/brand/catalogue-cover.jpg`],
    description: isEn ? product.description.en : product.description.ar,
    sku: `FUD-${product.id.toUpperCase()}`,
    mpn: `HS-${product.hsCode}`,
    brand: {
      '@type': 'Brand',
      name: 'FUDIYO',
    },
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY_DETAILS.legalName,
    },
    weight: {
      '@type': 'QuantitativeValue',
      value: product.weightGrams,
      unitCode: 'GRM',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'AED',
      lowPrice: '12.00',
      highPrice: '125.00',
      offerCount: '500',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'FUDIYO UAE',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '128',
    },
  };
}

export function generateFAQSchema(faqs: FAQItem[], locale: Locale) {
  const isEn = locale === 'en';
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: isEn ? faq.question.en : faq.question.ar,
      acceptedAnswer: {
        '@type': 'Answer',
        text: isEn ? faq.answer.en : faq.answer.ar,
      },
    })),
  };
}

export function generateBlogPostingSchema(post: BlogPost, locale: Locale) {
  const isEn = locale === 'en';
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: isEn ? post.title.en : post.title.ar,
    description: isEn ? post.excerpt.en : post.excerpt.ar,
    image: [`${APP_BASE_URL}${post.image}`],
    datePublished: `${post.date}T08:00:00+04:00`,
    dateModified: `${post.date}T12:00:00+04:00`,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'FUDIYO Foods',
      logo: {
        '@type': 'ImageObject',
        url: `${APP_BASE_URL}/brand/catalogue-cover.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${APP_BASE_URL}/blog/${post.slug}`,
    },
  };
}
