import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { CATEGORIES } from '../../data/products';
import { COMPANY_DETAILS } from '../../data/company';
import { Link } from '../common/Link';
import { Logo, EranadLogo } from '../common/Logo';
import {
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  Globe,
  FileCheck,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const { locale, switchLocale } = useRouter();
  const isEn = locale === 'en';

  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [b2bOpen, setB2bOpen] = useState(false);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-[#14301F] text-white overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Top Header inside Drawer */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Logo variant="light" />
        <button
          onClick={onClose}
          aria-label={isEn ? 'Close Navigation Menu' : 'إغلاق القائمة'}
          className="p-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <div className="flex-1 px-6 py-6 space-y-4">
        {/* Home */}
        <Link
          href="/"
          onClick={onClose}
          className="block py-3 text-lg font-bold border-b border-white/10 hover:text-[#8DC63F] transition-colors"
        >
          {isEn ? 'Home' : 'الرئيسية'}
        </Link>

        {/* About */}
        <Link
          href="/about"
          onClick={onClose}
          className="block py-3 text-lg font-bold border-b border-white/10 hover:text-[#8DC63F] transition-colors"
        >
          {isEn ? 'About FUDIYO' : 'عن فوديو'}
        </Link>

        {/* Products Accordion */}
        <div className="border-b border-white/10 pb-2">
          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="w-full py-3 flex items-center justify-between text-lg font-bold hover:text-[#8DC63F] transition-colors"
            aria-expanded={categoriesOpen}
          >
            <span>{isEn ? 'Products Catalogue' : 'كتالوج المنتجات'}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${
                categoriesOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {categoriesOpen && (
            <div className="pl-4 pr-2 py-2 space-y-2.5 bg-black/20 rounded-xl mb-3">
              <Link
                href="/products"
                onClick={onClose}
                className="block py-1.5 text-sm font-semibold text-[#8DC63F] hover:underline"
              >
                {isEn ? '→ View All Products (Hub)' : '← عرض كافة المنتجات'}
              </Link>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products/${cat.slug}`}
                  onClick={onClose}
                  className="block py-1.5 text-sm text-neutral-200 hover:text-white"
                >
                  {isEn ? cat.name.en : cat.name.ar}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Wholesale & Export Accordion */}
        <div className="border-b border-white/10 pb-2">
          <button
            onClick={() => setB2bOpen(!b2bOpen)}
            className="w-full py-3 flex items-center justify-between text-lg font-bold hover:text-[#8DC63F] transition-colors"
            aria-expanded={b2bOpen}
          >
            <span>{isEn ? 'Wholesale & Export' : 'التجارة بالجملة والتصدير'}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${
                b2bOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {b2bOpen && (
            <div className="pl-4 pr-2 py-2 space-y-2.5 bg-black/20 rounded-xl mb-3">
              <Link
                href="/wholesale-distributor-enquiry"
                onClick={onClose}
                className="block py-1.5 text-sm text-neutral-200 hover:text-white"
              >
                {isEn ? 'Distributor Enquiry & Quote' : 'طلب التوزيع والتسعير'}
              </Link>
              <Link
                href="/private-label-export"
                onClick={onClose}
                className="block py-1.5 text-sm text-neutral-200 hover:text-white"
              >
                {isEn ? 'Private Label / OEM Services' : 'التصنيع بعلامة خاصة'}
              </Link>
              <Link
                href="/quality-certifications"
                onClick={onClose}
                className="block py-1.5 text-sm text-neutral-200 hover:text-white"
              >
                {isEn ? 'Food Safety & Certifications' : 'شهادات سلامة الغذاء'}
              </Link>
              <Link
                href="/frozen-food-supplier-uae"
                onClick={onClose}
                className="block py-1.5 text-sm text-neutral-200 hover:text-white"
              >
                {isEn ? 'UAE Nationwide Supply Hub' : 'شبكة توريد الإمارات'}
              </Link>
            </div>
          )}
        </div>

        {/* Blog */}
        <Link
          href="/blog"
          onClick={onClose}
          className="block py-3 text-lg font-bold border-b border-white/10 hover:text-[#8DC63F] transition-colors"
        >
          {isEn ? 'Food & Industry Blog' : 'المدونة الغذائية'}
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          onClick={onClose}
          className="block py-3 text-lg font-bold border-b border-white/10 hover:text-[#8DC63F] transition-colors"
        >
          {isEn ? 'Contact & Locations' : 'اتصل بنا وفروعنا'}
        </Link>

        {/* Primary CTA Quote Button */}
        <div className="pt-4">
          <Link
            href="/wholesale-distributor-enquiry"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#F26B21] text-white font-bold hover:bg-[#e05b12] shadow-lg text-base"
          >
            <span>{isEn ? 'Get Wholesale Quote' : 'طلب تسعيرة جملة'}</span>
            <ArrowRight className={`w-5 h-5 ${!isEn ? 'rotate-180' : ''}`} />
          </Link>
        </div>

        {/* Quick Contact & WhatsApp Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={`tel:${COMPANY_DETAILS.headOffice.primaryPhone}`}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-white/10 text-xs font-semibold hover:bg-white/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#8DC63F]" />
            <span>{isEn ? 'Call Sales' : 'اتصل بنا'}</span>
          </a>
          <a
            href={`https://wa.me/${COMPANY_DETAILS.uae.whatsapp}?text=${encodeURIComponent(
              'Hello FUDIYO Foods, I am inquiring regarding wholesale supply in UAE.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#25D366]/20 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-colors border border-[#25D366]/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Language Switcher */}
        <div className="pt-4 flex items-center justify-between border-t border-white/10">
          <div className="flex items-center gap-2 text-sm text-neutral-300">
            <Globe className="w-4 h-4 text-[#8DC63F]" />
            <span>{isEn ? 'Language / اللغة:' : 'اللغة / Language:'}</span>
          </div>
          <div className="flex items-center bg-white/10 rounded-lg p-1">
            <button
              onClick={() => {
                switchLocale('en');
                onClose();
              }}
              className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                isEn ? 'bg-[#8DC63F] text-[#14301F]' : 'text-neutral-300'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => {
                switchLocale('ar');
                onClose();
              }}
              className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                !isEn ? 'bg-[#8DC63F] text-[#14301F]' : 'text-neutral-300'
              }`}
            >
              العربية
            </button>
          </div>
        </div>

        {/* Exporter Note */}
        <div className="pt-6 pb-8 border-t border-white/10">
          <EranadLogo />
          <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed">
            CIN: {COMPANY_DETAILS.cin} · FSSAI Lic. No: {COMPANY_DETAILS.fssaiNumber} · APEDA Registered
          </p>
        </div>
      </div>
    </div>
  );
};
