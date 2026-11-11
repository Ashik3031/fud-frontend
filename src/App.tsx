import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { MobileBottomBar } from './components/layout/MobileBottomBar';
import { SearchPalette } from './components/layout/SearchPalette';
import { CookieConsent } from './components/common/CookieConsent';

// Page Views
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsHubPage } from './pages/ProductsHubPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SEOLandingPage } from './pages/SEOLandingPages';
import { WholesaleEnquiryPage } from './pages/WholesaleEnquiryPage';
import { PrivateLabelPage } from './pages/PrivateLabelPage';
import { QualityCertificationsPage } from './pages/QualityCertificationsPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPages';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { pathname } = useRouter();
  const [searchPaletteOpen, setSearchPaletteOpen] = useState(false);

  // Strip leading '/ar' if present for route matching
  let cleanPath = pathname;
  if (cleanPath.startsWith('/ar/')) {
    cleanPath = cleanPath.replace(/^\/ar/, '');
  } else if (cleanPath === '/ar') {
    cleanPath = '/';
  }

  // Remove trailing slashes for uniform matching (except root '/')
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // Render correct view based on path
  const renderRoute = () => {
    // 1. Home
    if (cleanPath === '/' || cleanPath === '') {
      return <HomePage />;
    }

    // 2. About
    if (cleanPath === '/about') {
      return <AboutPage />;
    }

    // 3. Products Hub
    if (cleanPath === '/products') {
      return <ProductsHubPage />;
    }

    // 4. Category Pages & Product Detail Pages
    if (cleanPath.startsWith('/products/')) {
      const parts = cleanPath.replace('/products/', '').split('/');
      if (parts.length === 1) {
        // e.g. /products/breakfast
        return <CategoryPage categorySlug={parts[0]} />;
      }
      if (parts.length >= 2) {
        // e.g. /products/breakfast/chemba-puttu
        return <ProductDetailPage categorySlug={parts[0]} productSlug={parts[1]} />;
      }
    }

    // 5. Strategic SEO Landing Pages
    if (cleanPath === '/frozen-food-supplier-uae') {
      return <SEOLandingPage pageRoute="/frozen-food-supplier-uae" />;
    }
    if (cleanPath === '/frozen-kerala-parotta-dubai') {
      return <SEOLandingPage pageRoute="/frozen-kerala-parotta-dubai" />;
    }
    if (cleanPath === '/halal-frozen-chicken-uae') {
      return <SEOLandingPage pageRoute="/halal-frozen-chicken-uae" />;
    }
    if (cleanPath === '/fruit-pulp-supplier-uae') {
      return <SEOLandingPage pageRoute="/fruit-pulp-supplier-uae" />;
    }

    // 6. Wholesale & Institutional
    if (cleanPath === '/wholesale-distributor-enquiry') {
      return <WholesaleEnquiryPage />;
    }
    if (cleanPath === '/private-label-export') {
      return <PrivateLabelPage />;
    }
    if (cleanPath === '/quality-certifications') {
      return <QualityCertificationsPage />;
    }

    // 7. Blog Hub & Detail
    if (cleanPath === '/blog') {
      return <BlogIndexPage />;
    }
    if (cleanPath.startsWith('/blog/')) {
      const slug = cleanPath.replace('/blog/', '');
      return <BlogPostPage slug={slug} />;
    }

    // 8. FAQ & Contact
    if (cleanPath === '/faq') {
      return <FaqPage />;
    }
    if (cleanPath === '/contact') {
      return <ContactPage />;
    }

    // 9. Legal & Confirmation
    if (cleanPath === '/privacy-policy') {
      return <PrivacyPolicyPage />;
    }
    if (cleanPath === '/terms') {
      return <TermsPage />;
    }
    if (cleanPath === '/thank-you') {
      return <ThankYouPage />;
    }

    // Fallback 404
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F2] text-[#0E1A12]">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#14301F] text-white px-4 py-2 rounded-lg font-bold"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation Header */}
      <Header onOpenSearch={() => setSearchPaletteOpen(true)} />

      {/* Main Dynamic View */}
      <main id="main-content" className="flex-1">
        {renderRoute()}
      </main>

      {/* Footer Link Hub */}
      <Footer />

      {/* Floating B2B Action Buttons */}
      <FloatingWhatsApp />
      <MobileBottomBar />

      {/* Command/Ctrl+K Search Palette */}
      <SearchPalette
        isOpen={searchPaletteOpen}
        onClose={() => setSearchPaletteOpen(false)}
      />

      {/* Quiet PDPL Cookie Consent */}
      <CookieConsent />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
