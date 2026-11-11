import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Link } from '../common/Link';
import { Logo, EranadLogo } from '../common/Logo';
import { COMPANY_DETAILS } from '../../data/company';
import { CATEGORIES } from '../../data/products';
import { UAE_CITIES } from '../../data/uae-cities';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  CheckCircle,
  Truck,
  FileCheck,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { locale, switchLocale } = useRouter();
  const isEn = locale === 'en';

  return (
    <footer className="bg-[#14301F] text-white pt-16 pb-12 border-t border-[#5E9440]/30 relative overflow-hidden">
      {/* Decorative background curve */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8DC63F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5E9440]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust & Certification Banner */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-[#8DC63F]/20 text-[#8DC63F]">
              <ShieldCheck className="w-6 h-6" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-white">
                {isEn ? 'Export-Grade Food Safety & Cold Chain' : 'أعلى معايير سلامة الأغذية وسلسلة التبريد للتصدير'}
              </h4>
              <p className="text-xs text-neutral-300">
                {isEn
                  ? 'FSSAI Lic. 11215332000549 · APEDA Certified Exporter · 100% Halal Certified'
                  : 'ترخيص FSSAI رقم 11215332000549 · مصدر معتمد من APEDA · شهادات حلال معتمدة'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#8DC63F]">
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle className="w-3.5 h-3.5" />
              Keep Frozen (-18°C)
            </span>
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle className="w-3.5 h-3.5" />
              No Added Preservatives
            </span>
            <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle className="w-3.5 h-3.5" />
              100% Natural Fruit Pulp
            </span>
          </div>
        </div>

        {/* 5-Column Link Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Parent Company Details */}
          <div className="lg:col-span-1 space-y-4">
            <Logo variant="light" showTagline />
            <p className="text-xs text-neutral-300 leading-relaxed">
              {isEn
                ? "FUDIYO™ brings authentic Kerala flavours to tables worldwide. Quick-frozen parottas, snacks, vegetables, curries, and pure fruit pulps."
                : "تقدم فوديو™ نكهات كيرالا الأصلية لموائد العالم بجودة فائقة وخيارات مريحة وصحية لكل يوم."}
            </p>

            <div className="pt-2">
              <EranadLogo />
              <p className="text-[11px] text-neutral-400 mt-1 font-mono">
                CIN: {COMPANY_DETAILS.cin}
              </p>
            </div>
          </div>

          {/* Col 2: Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8DC63F] mb-4">
              {isEn ? 'Product Categories' : 'فئات المنتجات'}
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {isEn ? cat.name.en : cat.name.ar}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Wholesale, Export & Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8DC63F] mb-4">
              {isEn ? 'Wholesale & Export' : 'التجارة بالجملة والتصدير'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/wholesale-distributor-enquiry"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {isEn ? 'Distributor Enquiry & Quote' : 'طلب التوزيع والتسعير'}
                </Link>
              </li>
              <li>
                <Link
                  href="/private-label-export"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {isEn ? 'Private Label / White Label' : 'التصنيع بعلامة خاصة'}
                </Link>
              </li>
              <li>
                <Link
                  href="/quality-certifications"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {isEn ? 'Food Safety & Standards' : 'شهادات سلامة الأغذية'}
                </Link>
              </li>
              <li>
                <Link
                  href="/frozen-food-supplier-uae"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {isEn ? 'Frozen Food Supplier UAE' : 'مورد الأغذية المجمدة بالإمارات'}
                </Link>
              </li>
              <li>
                <Link
                  href="/frozen-kerala-parotta-dubai"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {isEn ? 'Frozen Parotta Dubai Hub' : 'مركز باراتا كيرالا دبي'}
                </Link>
              </li>
              <li>
                <Link
                  href="/fruit-pulp-supplier-uae"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {isEn ? 'Fruit Pulp Foodservice' : 'توريد لب الفواكه للمقاهي'}
                </Link>
              </li>
              <li>
                <Link
                  href="/halal-frozen-chicken-uae"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {isEn ? 'Halal Poultry & Samosa Sheets' : 'دواجن حلال ورقائق سمبوسة'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: UAE City Distribution Hubs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8DC63F] mb-4">
              {isEn ? 'UAE Regional Supply' : 'تغطية التوزيع بالإمارات'}
            </h4>
            <ul className="space-y-2 text-xs">
              {UAE_CITIES.map((city) => (
                <li key={city.id}>
                  <Link
                    href={`/frozen-food-supplier-uae#${city.id}`}
                    className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-[#5E9440]" />
                    <span>{isEn ? city.name.en : city.name.ar}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-neutral-300 hover:text-white transition-colors mt-2 inline-block font-semibold text-[#8DC63F]"
                >
                  {isEn ? '→ Frequently Asked Questions' : '← الأسئلة الشائعة'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: NAP Block (Name, Address, Phone) & India Head Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8DC63F] mb-4">
              {isEn ? 'Contact & Head Office' : 'المقر والاتصال الرسمي'}
            </h4>

            {/* UAE NAP */}
            <div className="text-xs text-neutral-300 space-y-1 bg-black/20 p-3 rounded-xl border border-white/5">
              <span className="font-bold text-white block">
                {isEn ? COMPANY_DETAILS.uae.companyName : COMPANY_DETAILS.uae.companyNameAr}
              </span>
              <p className="text-[11px] text-neutral-400">
                {isEn ? COMPANY_DETAILS.uae.hubAddress : COMPANY_DETAILS.uae.hubAddressAr}
              </p>
              <p className="text-[11px] text-[#8DC63F]">Trade Lic: {COMPANY_DETAILS.uae.tradeLicenceNo}</p>
              <div className="pt-1 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F26B21]" />
                <a href={`tel:${COMPANY_DETAILS.uae.phone}`} className="hover:text-white font-mono text-xs">
                  {COMPANY_DETAILS.uae.phone}
                </a>
              </div>
            </div>

            {/* India Exporter NAP */}
            <div className="text-xs text-neutral-300 space-y-1">
              <span className="font-bold text-white block">{COMPANY_DETAILS.legalName}</span>
              <p className="text-[11px] text-neutral-400">
                {isEn ? COMPANY_DETAILS.headOffice.address : COMPANY_DETAILS.headOffice.addressAr}
              </p>
              <div className="flex flex-col gap-1 text-[11px] pt-1">
                <a href={`tel:${COMPANY_DETAILS.headOffice.phones[0]}`} className="hover:text-white font-mono">
                  {COMPANY_DETAILS.headOffice.phones[0]}
                </a>
                <a href={`mailto:${COMPANY_DETAILS.headOffice.email}`} className="hover:text-white text-[#8DC63F]">
                  {COMPANY_DETAILS.headOffice.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language, Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} FUDIYO™ Frozen Food · Eranad Exports Pvt Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              {isEn ? 'Privacy Policy (PDPL)' : 'سياسة الخصوصية'}
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              {isEn ? 'Terms of Supply' : 'شروط التوريد'}
            </Link>
            <span>·</span>
            <button
              onClick={() => switchLocale(isEn ? 'ar' : 'en')}
              className="text-[#8DC63F] hover:underline font-bold"
            >
              {isEn ? 'العربية (RTL)' : 'English (LTR)'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
