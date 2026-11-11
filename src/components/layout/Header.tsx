import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Link } from '../common/Link';
import { Logo } from '../common/Logo';
import { MegaMenu } from './MegaMenu';
import { MobileDrawer } from './MobileDrawer';
import {
  ChevronDown,
  Menu,
  Search,
  Globe,
  FileText,
  ShieldCheck,
  Building2,
  Phone,
} from 'lucide-react';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { pathname, locale, switchLocale } = useRouter();
  const isEn = locale === 'en';

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if scrolled past hero zone
      setIsScrolled(currentScrollY > 50);

      // Scroll direction behavior:
      // When at the very top of the page, always show navbar
      if (currentScrollY <= 25) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down towards the bottom: hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up towards the top: show navbar
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close open dropdowns when navbar hides
  useEffect(() => {
    if (!isVisible) {
      setMegaMenuOpen(false);
      setExportDropdownOpen(false);
    }
  }, [isVisible]);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaMenuOpen(false);
        setExportDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isHome = pathname === '/' || pathname === '/ar';
  // Keep navbar visible if user has a menu or mobile drawer open
  const shouldShow = isVisible || megaMenuOpen || exportDropdownOpen || mobileDrawerOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out transform ${shouldShow ? 'translate-y-0' : '-translate-y-full pointer-events-none'
          } ${!isScrolled && isHome
            ? 'bg-transparent border-b border-transparent shadow-none py-4 lg:py-5'
            : isScrolled
              ? 'bg-[#07130b]/92 backdrop-blur-md shadow-2xl py-2.5 sm:py-3 border-b border-white/10'
              : 'bg-[#14301F] py-3.5 shadow-md border-b border-[#5E9440]/25'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 md:gap-8">
            {/* Zone 1: Brand Wordmark */}
            <div className="shrink-0 flex items-center">
              <Logo variant="light" showTagline={!isScrolled} />
            </div>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-white/90">
              {/* Home */}
              <Link
                href="/"
                className={`hover:text-[#8DC63F] transition-colors whitespace-nowrap shrink-0 ${pathname === '/' || pathname === '/ar' ? 'text-[#8DC63F] underline underline-offset-4' : ''
                  }`}
              >
                {isEn ? 'Home' : 'الرئيسية'}
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`hover:text-[#8DC63F] transition-colors whitespace-nowrap shrink-0 ${pathname.includes('/about') ? 'text-[#8DC63F] underline underline-offset-4' : ''
                  }`}
              >
                {isEn ? 'About Us' : 'عن فوديو'}
              </Link>

              {/* Products with Mega-Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
              >
                <Link
                  href="/products"
                  className={`inline-flex items-center gap-1 hover:text-[#8DC63F] transition-colors whitespace-nowrap shrink-0 py-2 ${pathname.includes('/products') ? 'text-[#8DC63F] underline underline-offset-4' : ''
                    }`}
                  aria-expanded={megaMenuOpen}
                >
                  <span>{isEn ? 'Products' : 'المنتجات'}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Link>
              </div>

              {/* Wholesale & Export Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setExportDropdownOpen(true)}
                onMouseLeave={() => setExportDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 hover:text-[#8DC63F] transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer"
                  aria-expanded={exportDropdownOpen}
                >
                  <span>{isEn ? 'Wholesale & Export' : 'التجارة والتصدير'}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </button>

                {exportDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white text-[#0E1A12] shadow-2xl rounded-xl border border-neutral-100 py-2 z-50 animate-in fade-in slide-in-from-top-1">
                    <Link
                      href="/wholesale-distributor-enquiry"
                      onClick={() => setExportDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#F7F9F2] transition-colors text-xs font-semibold text-[#14301F]"
                    >
                      <FileText className="w-4 h-4 text-[#F26B21]" />
                      <span>{isEn ? 'Distributor Enquiry & Quote' : 'طلب التوزيع والتسعير'}</span>
                    </Link>
                    <Link
                      href="/private-label-export"
                      onClick={() => setExportDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#F7F9F2] transition-colors text-xs font-semibold text-[#14301F]"
                    >
                      <Building2 className="w-4 h-4 text-[#5E9440]" />
                      <span>{isEn ? 'Private Label / OEM Services' : 'التصنيع بعلامة خاصة'}</span>
                    </Link>
                    <Link
                      href="/quality-certifications"
                      onClick={() => setExportDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#F7F9F2] transition-colors text-xs font-semibold text-[#14301F]"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#8DC63F]" />
                      <span>{isEn ? 'Food Safety & Certifications' : 'شهادات سلامة الغذاء'}</span>
                    </Link>
                    <Link
                      href="/frozen-food-supplier-uae"
                      onClick={() => setExportDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#F7F9F2] transition-colors text-xs font-semibold text-[#14301F] border-t border-neutral-100 mt-1"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#5E9440]" />
                      <span>{isEn ? 'UAE Supply Coverage' : 'تغطية مدن الإمارات'}</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Blog */}
              <Link
                href="/blog"
                className={`hover:text-[#8DC63F] transition-colors whitespace-nowrap shrink-0 ${pathname.includes('/blog') ? 'text-[#8DC63F] underline underline-offset-4' : ''
                  }`}
              >
                {isEn ? 'Blog' : 'المدونة'}
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`hover:text-[#8DC63F] transition-colors whitespace-nowrap shrink-0 ${pathname.includes('/contact') ? 'text-[#8DC63F] underline underline-offset-4' : ''
                  }`}
              >
                {isEn ? 'Contact' : 'اتصل بنا'}
              </Link>
            </nav>

            {/* Zone 3: Actions (Search, Language Switcher, Primary CTA) */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Cmd+K Search Trigger */}
              {onOpenSearch && (
                <button
                  onClick={onOpenSearch}
                  aria-label={isEn ? 'Search products' : 'بحث في المنتجات'}
                  className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-200 text-xs transition-colors cursor-pointer border border-white/15 backdrop-blur-xs"
                >
                  <Search className="w-3.5 h-3.5 text-[#8DC63F]" />
                  <span className="hidden xl:inline">{isEn ? 'Search' : 'بحث'}</span>
                  <kbd className="text-[10px] font-mono bg-black/30 px-1.5 py-0.5 rounded text-neutral-300">
                    ⌘K
                  </kbd>
                </button>
              )}

              {/* Language Switcher */}
              <div className="hidden sm:flex items-center bg-white/10 rounded-lg p-0.5 border border-white/15 backdrop-blur-xs">
                <button
                  onClick={() => switchLocale('en')}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${isEn
                      ? 'bg-[#8DC63F] text-[#14301F] shadow-xs'
                      : 'text-neutral-300 hover:text-white'
                    }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => switchLocale('ar')}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${!isEn
                      ? 'bg-[#8DC63F] text-[#14301F] shadow-xs'
                      : 'text-neutral-300 hover:text-white'
                    }`}
                  aria-label="التبديل إلى العربية"
                >
                  العربية
                </button>
              </div>

              {/* Primary Action: Get Wholesale Quote */}
              <Link
                href="/wholesale-distributor-enquiry"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#F26B21] text-white text-xs font-bold hover:bg-[#e05b12] shadow-md transition-colors whitespace-nowrap shrink-0"
              >
                {isEn ? 'Get Wholesale Quote' : 'طلب تسعيرة جملة'}
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileDrawerOpen(true)}
                aria-label={isEn ? 'Open Navigation' : 'فتح القائمة'}
                className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer border border-white/15 backdrop-blur-xs"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
        />
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </>
  );
};
