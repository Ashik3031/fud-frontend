import React from 'react';
import { useRouter } from '../context/RouterContext';
import { PRODUCTS } from '../data/products';
import { FAQS } from '../data/faqs';
import { UAE_CITIES } from '../data/uae-cities';
import { ProductCard } from '../components/common/ProductCard';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { WholesaleInquiryForm } from '../components/forms/WholesaleInquiryForm';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/seo';
import {
  ShieldCheck,
  CheckCircle,
  Truck,
  MapPin,
  Clock,
  ArrowRight,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface SEOLandingPageProps {
  pageRoute:
    | '/frozen-food-supplier-uae'
    | '/frozen-kerala-parotta-dubai'
    | '/halal-frozen-chicken-uae'
    | '/fruit-pulp-supplier-uae';
}

export const SEOLandingPage: React.FC<SEOLandingPageProps> = ({ pageRoute }) => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG[pageRoute];

  // Pick relevant products for this landing page
  let targetProducts = PRODUCTS.slice(0, 6);
  let pageCategory = 'all';

  if (pageRoute === '/frozen-kerala-parotta-dubai') {
    targetProducts = PRODUCTS.filter(
      (p) => p.categorySlug === 'parotta' || p.categorySlug === 'breakfast'
    );
    pageCategory = 'parotta';
  } else if (pageRoute === '/halal-frozen-chicken-uae') {
    targetProducts = PRODUCTS.filter(
      (p) => p.categorySlug === 'meat-chicken' || p.categorySlug === 'meat-curries'
    );
    pageCategory = 'meat-chicken';
  } else if (pageRoute === '/fruit-pulp-supplier-uae') {
    targetProducts = PRODUCTS.filter((p) => p.categorySlug === 'fruit-pulp');
    pageCategory = 'fruit-pulp';
  } else {
    // /frozen-food-supplier-uae
    targetProducts = PRODUCTS.filter((p) => p.isBestSeller);
  }

  // Schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: isEn ? seo.h1.en : seo.h1.ar, url: pageRoute },
  ]);
  const faqSchema = generateFAQSchema(FAQS.slice(0, 8), locale);

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname={pageRoute}
        locale={locale}
        jsonLd={[breadcrumbSchema, faqSchema]}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? seo.h1.en : seo.h1.ar }]} />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-[#14301F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8DC63F]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#8DC63F]">
                <Truck className="w-3.5 h-3.5" />
                <span>
                  {isEn
                    ? 'Dubai & Northern Emirates Reefer Distribution'
                    : 'التوزيع المبرد في دبي والإمارات الشمالية'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {isEn ? seo.h1.en : seo.h1.ar}
              </h1>

              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-2xl">
                {isEn ? seo.description.en : seo.description.ar}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="#quote-form"
                  className="px-6 py-3 rounded-xl bg-[#F26B21] text-white font-bold text-xs hover:bg-[#e05b12] shadow-lg transition-all"
                >
                  {isEn ? 'Request Wholesale Pricing' : 'طلب تسعيرة الجملة الرسمية'}
                </a>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.uae.whatsapp}?text=${encodeURIComponent(
                    `Inquiring regarding ${isEn ? seo.h1.en : seo.h1.ar} for UAE supply.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:brightness-105 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Trade Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* Editorial Keyword Deep-Dive Content Section */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xs mb-12 space-y-6">
            <div className="max-w-4xl space-y-4 text-sm text-[#0E1A12]/80 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#14301F]">
                {isEn
                  ? 'Why UAE Food Businesses Partner with FUDIYO & Eranad Exports'
                  : 'لماذا تختار سلاسل التجزئة والمطاعم بالإمارات التعامل مع فوديو؟'}
              </h2>

              <p>
                {isEn
                  ? 'The United Arab Emirates represents a sophisticated culinary market with hundreds of thousands of Indian expatriates and Arab families who demand genuine heritage taste. Running a food service business or supermarket shelf requires consistent quality, unbroken -18°C temperature logs, and prompt daily deliveries.'
                  : 'تمثل دولة الإمارات سوقاً متطوراً لمئات الآلاف من العائلات التي تبحث عن الجودة الفائقة والمذاق التراثي الأصيل. وتتطلب إدارة سلاسل التجزئة والمطاعم جودة ثابتة وتوصيلاً مبرداً يومياً بدرجة حرارة -18 مئوية موثقة.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-[#F7F9F2] border border-neutral-200 space-y-1">
                  <span className="font-bold text-[#14301F] text-xs block">
                    {isEn ? 'Unbroken Cold Chain' : 'سلسلة تبريد غير منقطعة'}
                  </span>
                  <p className="text-xs text-[#5B6B60]">
                    {isEn
                      ? 'GPS-monitored refrigerated delivery directly to store freezers across Dubai, Abu Dhabi, Sharjah, and Al Ain.'
                      : 'شاحنات مبردة مجهزة بنظام التتبع الحراري بالأقمار الصناعية لضمان جودة المنتج.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F9F2] border border-neutral-200 space-y-1">
                  <span className="font-bold text-[#14301F] text-xs block">
                    {isEn ? 'FSSAI & Halal Certified' : 'معتمد حلال ومرخص رسمياً'}
                  </span>
                  <p className="text-xs text-[#5B6B60]">
                    {isEn
                      ? 'FSSAI Lic. 11215332000549, APEDA export house accreditation, and 100% Halal slaughter.'
                      : 'تراخيص سلامة الأغذية الرسمية واعتمادات التصدير وشهادات الذبح الحلال المعتمدة.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F9F2] border border-neutral-200 space-y-1">
                  <span className="font-bold text-[#14301F] text-xs block">
                    {isEn ? 'Flexible Wholesale MOQs' : 'حد أدنى ميسر للطلبات'}
                  </span>
                  <p className="text-xs text-[#5B6B60]">
                    {isEn
                      ? 'Starting from 50 mixed cartons for local UAE delivery up to 40ft reefer export containers.'
                      : 'يبدأ من 50 كرتوناً مشكلاً للتوزيع المحلي وصولاً إلى حاويات التصدير الكاملة 40 قدماً.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Landing Page Products */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
                  {isEn ? 'Targeted Catalogue' : 'المنتجات المميزة'}
                </span>
                <h3 className="text-2xl font-black text-[#14301F] mt-0.5">
                  {isEn ? 'Featured Products for This Category' : 'أبرز المنتجات المتاحة للتوريد'}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          {/* UAE City Distribution Grid */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xs mb-14">
            <h3 className="text-xl font-bold text-[#14301F] mb-6">
              {isEn ? 'Refrigerated Delivery Routes by Emirate' : 'خطوط التوزيع المبرد حسب الإمارة'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {UAE_CITIES.map((c) => (
                <div key={c.id} className="p-4 rounded-xl bg-[#F7F9F2] border border-neutral-200 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#5E9440]" />
                    <span className="font-bold text-sm text-[#14301F]">
                      {isEn ? c.name.en : c.name.ar}
                    </span>
                  </div>
                  <p className="text-xs text-[#5B6B60]">{isEn ? c.deliveryFrequency.en : c.deliveryFrequency.ar}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 8 FAQs for Technical SEO Rich Snippets */}
          <div className="mb-14">
            <FaqAccordion
              faqs={FAQS}
              title={
                isEn
                  ? `Frequently Asked Questions: ${seo.h1.en}`
                  : `الأسئلة الشائعة حول: ${seo.h1.ar}`
              }
            />
          </div>

          {/* Lead Quote Form */}
          <div id="quote-form" className="max-w-3xl mx-auto">
            <WholesaleInquiryForm defaultCategory={pageCategory} />
          </div>
        </div>
      </div>
    </>
  );
};
