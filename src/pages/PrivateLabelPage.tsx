import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { WholesaleInquiryForm } from '../components/forms/WholesaleInquiryForm';
import { EranadLogo } from '../components/common/Logo';
import { COMPANY_DETAILS } from '../data/company';
import { Building2, Sparkles, FileText, CheckCircle, Package, Globe } from 'lucide-react';

export const PrivateLabelPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/private-label-export'];

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/private-label-export"
        locale={locale}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? 'Private Label & Export' : 'التصنيع بعلامة خاصة والتصدير' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-[#14301F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl mb-12">
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
                {isEn ? 'Contract Manufacturing & OEM Services' : 'خدمات التصنيع التعاقدي وتصدير العلامات الخاصة'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {isEn ? seo.h1.en : seo.h1.ar}
              </h1>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-2xl">
                {isEn
                  ? 'Partner with Eranad Exports Pvt Ltd for turnkey private label manufacturing of frozen Malabar parottas, samosa pastry sheets, tropical fruit purees, and ready-to-eat Kerala curries branded for your retail chain.'
                  : 'عقد شراكة تصنيع متكامل لعلامتك التجارية مع شركة إراناد إكسبورتس لإنتاج باراتا مالابار، رقائق السمبوسة، لب الفواكه الاستوائية، والإدامات الجاهزة.'}
              </p>
            </div>
          </div>

          {/* 3 Pillars of Private Label */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#5E9440]/10 text-[#5E9440] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14301F]">
                {isEn ? 'Custom Recipe Development' : 'تطوير وصفات حصرية'}
              </h3>
              <p className="text-xs text-[#5B6B60] leading-relaxed">
                {isEn
                  ? 'Formulate bespoke dough thickness, fat ratios, flour blends (whole wheat, maida, multigrain), or customized spice profiles to meet your exact demographic.'
                  : 'تحديد سمك العجينة ونسب المكونات وتوليفات البهارات المفضلة لعملائك بدقة.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F26B21]/10 text-[#F26B21] flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14301F]">
                {isEn ? 'Bilingual Packaging & Artwork' : 'تغليف ثنائي اللغة معتمد'}
              </h3>
              <p className="text-xs text-[#5B6B60] leading-relaxed">
                {isEn
                  ? 'Export-grade packaging compliant with ESMA, SFDA, and Dubai Municipality food labeling regulations with Arabic and English typography.'
                  : 'تصميم وطباعة أكياس وعلب مفرغة الهواء ثنائية اللغة متوافقة مع مواصفات الهيئات الخليجية.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#14301F]/10 text-[#14301F] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#14301F]">
                {isEn ? 'Direct Port-to-Port Logistics' : 'شحن بحري مباشر للموانئ'}
              </h3>
              <p className="text-xs text-[#5B6B60] leading-relaxed">
                {isEn
                  ? 'FCL 20ft and 40ft reefer container shipments from Cochin and Tuticorin seaports to Jebel Ali, Dammam, Jeddah, Doha, and Sohar.'
                  : 'شحن حاويات مبردة 20 و40 قدماً من موانئ كيرالا مباشرة إلى موانئ جبل علي، الدمام، جدة، الدوحة وصحار.'}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-3xl mx-auto">
            <WholesaleInquiryForm defaultProduct="Private Label OEM Contract" />
          </div>
        </div>
      </div>
    </>
  );
};
