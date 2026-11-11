import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { COMPANY_DETAILS } from '../data/company';
import { ShieldCheck, CheckCircle, FileCheck, Award, Snowflake, Truck } from 'lucide-react';
import { Link } from '../components/common/Link';

export const QualityCertificationsPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/quality-certifications'];

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/quality-certifications"
        locale={locale}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? 'Certifications' : 'شهادات الجودة' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-[#14301F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl mb-12">
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
                {isEn ? 'Audited Standards & Compliance' : 'المعايير المعتمدة وتراخيص سلامة الغذاء'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {isEn ? seo.h1.en : seo.h1.ar}
              </h1>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-2xl">
                {isEn
                  ? 'Eranad Exports Pvt Ltd operates under certified food safety management protocols verified by national export councils and international accreditation bodies.'
                  : 'تلتزم شركة إراناد إكسبورتس ببروتوكولات إدارة سلامة الغذاء العالمية المعتمدة من المجالس الوطنية والهيئات الدولية لضمان أعلى مستويات الأمان والجودة.'}
              </p>
            </div>
          </div>

          {/* Certification Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Card 1: FSSAI */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
                  National Food Authority
                </span>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#5E9440]/10 text-[#5E9440]">
                  Lic. 11215332000549
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#14301F]">
                Food Safety & Standards Authority of India (FSSAI)
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B60] leading-relaxed">
                {isEn
                  ? 'Official manufacturing and export licensing covering hygienic dough resting, automated baking, clean-in-place (CIP) sanitation systems, and periodic third-party microbiological testing.'
                  : 'ترخيص تصنيع وتصدير رسمي يغطي كافة اشتراطات النظافة والتعقيم والفحوصات الميكروبيولوجية الدورية للمنتجات الغذائية.'}
              </p>
            </div>

            {/* Card 2: APEDA */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
                  Government Export Council
                </span>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#5E9440]/10 text-[#5E9440]">
                  Registered Exporter
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#14301F]">
                APEDA (Export Development Authority)
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B60] leading-relaxed">
                {isEn
                  ? 'Certified by the Ministry of Commerce & Industry for processed foods and fruit purees, validating packaging standards, phytosanitary requirements, and container loading compliance.'
                  : 'اعتماد رسمي من وزارة التجارة والصناعة الهندية للأغذية المصنعة ولب الفواكه مع شهادات الصحة النباتية والتعبئة المعتمدة دولياً.'}
              </p>
            </div>

            {/* Card 3: Halal Certification */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
                  Islamic Shariah Accreditation
                </span>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#5E9440]/10 text-[#5E9440]">
                  GSO 993/2015 Compliant
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#14301F]">
                100% Halal Certified Slaughter & Processing
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B60] leading-relaxed">
                {isEn
                  ? 'All poultry lines are slaughtered hand-to-blade by practicing Muslim slaughterers with Tasmiyah recitation. Strictly zero mechanical kill, stun-killing, or porcine cross-contamination.'
                  : 'كافة الدواجن مذبوحة يدوياً وفق الشريعة الإسلامية مع التسمية والتكبير، وخالية تماماً من الصعق الكهربائي المميت أو التلوث العرضي.'}
              </p>
            </div>

            {/* Card 4: Cold Chain Protocol */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
                  Thermal Engineering
                </span>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#5E9440]/10 text-[#5E9440]">
                  -18°C Telemetry
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#14301F]">
                Continuous -18°C Cold Chain & Data Logging
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B60] leading-relaxed">
                {isEn
                  ? 'Continuous satellite-linked temperature data recorders installed in our reefer fleet alert operators to any temperature deviation, ensuring uncompromised shelf life.'
                  : 'أجهزة تسجيل حراري متصلة بالأقمار الصناعية في كافة الشاحنات تضمن استقرار درجة الحرارة عند -18 مئوية حتى وصول الشحنة.'}
              </p>
            </div>
          </div>

          {/* Consultation Box */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200 text-center space-y-4 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#14301F]">
              {isEn ? 'Need Certification Documents for Dubai Municipality Approval?' : 'هل تحتاج لشهادات المطابقة لبلدية دبي؟'}
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6B60] leading-relaxed">
              {isEn
                ? 'Our regulatory team can provide batch analysis certificates, health certificates, and Halal authentication documents for your procurement file.'
                : 'يسر فريقنا تزويدكم بكافة شهادات التحليل المخبري وشهادات الحلال لملفات المشتريات والاعتماد.'}
            </p>
            <Link
              href="/wholesale-distributor-enquiry"
              className="inline-block px-6 py-3 rounded-xl bg-[#F26B21] text-white font-bold text-xs hover:bg-[#e05b12] shadow-md transition-colors"
            >
              {isEn ? 'Contact Compliance Desk' : 'التواصل مع قسم المطابقة والجودة'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
