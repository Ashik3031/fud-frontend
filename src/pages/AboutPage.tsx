import React from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_DETAILS } from '../data/company';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { Link } from '../components/common/Link';
import { Logo, EranadLogo } from '../components/common/Logo';
import {
  ShieldCheck,
  CheckCircle,
  Truck,
  Building2,
  Award,
  Globe,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/about'];

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/about"
        locale={locale}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? 'About Us' : 'عن فوديو' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {/* Hero Banner */}
          <div className="bg-[#14301F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8DC63F]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
                {isEn ? 'Our Story & Heritage' : 'قصتنا وتراثنا العريق'}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {isEn ? seo.h1.en : seo.h1.ar}
              </h1>

              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                {isEn
                  ? 'FUDIYO™ brings together a diverse range of convenient, quality food products inspired by the authentic culinary traditions of Kerala and India. From frozen vegetables, parottas, and traditional favorites to ready-to-cook snacks, fruits, pulps, and ready-to-eat dishes.'
                  : 'تجمع فوديو™ تشكيلة متميزة من الأغذية المجمدة المريحة وعالية الجودة المستوحاة من أصالة المطبخ الكيرالي والهندي، لتجعل الطهي اليومي أسهل دون أي مساومة على المذاق.'}
              </p>
            </div>
          </div>

          {/* Official Copy from Page 1 of Catalogue */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#0E1A12]/80 leading-relaxed bg-white p-8 rounded-3xl border border-neutral-200">
              <h2 className="text-2xl font-bold text-[#14301F]">
                {isEn ? 'Bringing Authentic Taste Closer to Home' : 'تقريب المذاق الأصيل إلى كل منزل'}
              </h2>

              <p>
                {isEn
                  ? 'Our product range includes frozen Kerala parotta, tapioca, traditional Kerala snacks, vegetable mixes, coconut products, jackfruit products, frozen fruits and pulps, plant-based foods, meat products, and ready-to-eat curries. Many of our plant-based selections also provide convenient vegan options for customers seeking traditional flavours.'
                  : 'تضم تشكيلتنا باراتا كيرالا المجمدة، الكاسافا (كابا)، مقبلات الشاي، خلطات الخضار، منتجات جوز الهند والجاك فروت، لب الفواكه النقي، والأغذية النباتية وأطباق اللحم والدجاج.'}
              </p>

              <p>
                {isEn
                  ? 'We focus on quality ingredients, hygienic processing, and convenient preparation, helping families enjoy familiar flavours with less time and effort. Whether it is a quick breakfast, an evening snack, a traditional meal, or a ready-to-serve favourite, FUDIYO offers something for every table.'
                  : 'نركز على المكونات الطبيعية الفاخرة والمعالجة الصحية الدقيقة، لمساعدة العائلات على الاستمتاع بأشهى النكهات المألوفة بأقل جهد ووقت.'}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-[#5E9440]">
                <span>{isEn ? 'Good Food. Everyday.' : 'طعام شهي. كل يوم.'}</span>
                <span>·</span>
                <span>{isEn ? 'Authentic Taste. Made Convenient.' : 'مذاق أصيل. براحة وسهولة.'}</span>
                <span>·</span>
                <span>{isEn ? "Kerala's Flavours to Every Table." : 'نكهات كيرالا الأصيلة لكل مائدة.'}</span>
              </div>
            </div>

            {/* Right: Exporter Profile Box */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-neutral-200 space-y-4">
              <EranadLogo />
              <h3 className="text-xl font-bold text-[#14301F]">
                {COMPANY_DETAILS.legalName}
              </h3>
              <p className="text-xs text-[#5B6B60] leading-relaxed">
                {isEn
                  ? 'Eranad Exports Pvt Ltd brings authentic Indian flavours to global markets through a premium range of food products, including tea, coffee, frozen Kerala porotta, curry pastes, fruit pulps, spices, pickles, and rice, backed by export-grade packaging and reliable worldwide delivery.'
                  : 'تقوم شركة إراناد إكسبورتس بتقديم أجود المنتجات الهندية التراثية إلى الأسواق العالمية مع تغليف تصديري فاخر وشبكة لوجستية موثوقة.'}
              </p>

              <div className="pt-3 border-t border-neutral-100 space-y-2 text-xs">
                <div>
                  <span className="text-[#5B6B60] block">Corporate Identification Number (CIN):</span>
                  <span className="font-mono font-bold text-[#14301F]">{COMPANY_DETAILS.cin}</span>
                </div>
                <div>
                  <span className="text-[#5B6B60] block">FSSAI License No:</span>
                  <span className="font-mono font-bold text-[#14301F]">{COMPANY_DETAILS.fssaiNumber}</span>
                </div>
                <div>
                  <span className="text-[#5B6B60] block">Head Office (India):</span>
                  <span className="text-[#14301F]">{COMPANY_DETAILS.headOffice.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Link to Contact */}
          <div className="bg-[#14301F] text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">
                {isEn ? 'Interested in Distributing FUDIYO in the UAE?' : 'هل ترغب في توزيع منتجات فوديو في الإمارات؟'}
              </h3>
              <p className="text-xs text-neutral-300 mt-1">
                {isEn
                  ? 'Contact our commercial reefer team in Dubai for distributor terms and catalog pricing.'
                  : 'تواصل مع فريق التوزيع في دبي للحصول على عروض الأسعار والشروط.'}
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#F26B21] hover:bg-[#e05b12] text-white font-bold text-xs shadow-lg transition-all whitespace-nowrap shrink-0"
            >
              {isEn ? 'Contact Our Team' : 'تواصل معنا'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
