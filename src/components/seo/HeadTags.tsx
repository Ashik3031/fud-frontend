import React, { useEffect } from 'react';
import { Locale } from '../../types';
import { getCanonicalUrl, getAlternateHreflangs } from '../../lib/seo';

interface HeadTagsProps {
  title: string;
  description: string;
  pathname: string;
  locale: Locale;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
}

export const HeadTags: React.FC<HeadTagsProps> = ({
  title,
  description,
  pathname,
  locale,
  jsonLd,
  noIndex = false,
}) => {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Update html lang and dir
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';

    // 3. Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 4. Update robots
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');

    // 5. Update canonical link
    const canonicalUrl = getCanonicalUrl(pathname);
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Update OpenGraph tags
    const updateOg = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOg('og:title', title);
    updateOg('og:description', description);
    updateOg('og:url', canonicalUrl);
    updateOg('og:site_name', 'FUDIYO™ Frozen Food');
    updateOg('og:locale', locale === 'ar' ? 'ar_AE' : 'en_AE');

    // 7. Update Hreflang alternates
    const hreflangs = getAlternateHreflangs(pathname, locale);
    Object.entries(hreflangs).forEach(([lang, href]) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    });

    // 8. Inject or replace Schema.org JSON-LD scripts
    const existingScripts = document.querySelectorAll('script[data-fudiyo-jsonld="true"]');
    existingScripts.forEach((s) => s.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-fudiyo-jsonld', 'true');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    // Scroll to top on route change smoothly
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, pathname, locale, jsonLd, noIndex]);

  return null;
};
