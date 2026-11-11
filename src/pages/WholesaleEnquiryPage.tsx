import React from 'react';
import { useRouter } from '../context/RouterContext';
import { WholesaleInquiryForm } from '../components/forms/WholesaleInquiryForm';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { COMPANY_DETAILS } from '../data/company';
import { Truck, ShieldCheck, CheckCircle, Clock, PackageCheck, Phone, Mail } from 'lucide-react';

export const WholesaleEnquiryPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/wholesale-distributor-enquiry'];

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/wholesale-distributor-enquiry"
        locale={locale}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? 'Distributor Enquiry' : 'طلب التوزيع والجملة' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 5 Cols: Commercial Terms & Value Prop */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
                  {isEn ? 'B2B Trade & Distributor Network' : 'شبكة التوزيع والتجارة بالجملة'}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-[#14301F] tracking-tight leading-tight">
                  {isEn ? seo.h1.en : seo.h1.ar}
                </h1>
                <p className="text-sm text-[#5B6B60] leading-relaxed">
                  {isEn
                    ? 'FUDIYO™ supplies leading hypermarket chains, independent supermarkets, cafeterias, cloud kitchens, and caterers across Dubai, Abu Dhabi, Sharjah, and the GCC.'
                    : 'توفر فوديو منتجاتها لكبرى سلاسل الهايبرماركت والسوبرماركت والمطابخ السحابية وشركات التموين في كافة إمارات الدولة ودول مجلس التعاون.'}
                </p>
              </div>

              {/* 4 Trade Benefits */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-neutral-200">
                  <span className="p-2 rounded-xl bg-[#5E9440]/10 text-[#5E9440] shrink-0 mt-0.5">
                    <Truck className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-[#14301F]">
                      {isEn ? 'Daily Scheduled Reefer Dispatch' : 'شحن يومي مبرد مجدول'}
                    </h3>
                    <p className="text-xs text-[#5B6B60] mt-0.5">
                      {isEn
                        ? 'Guaranteed -18°C temperature telemetry delivery direct to store freezers in Dubai, Abu Dhabi, and Sharjah.'
                        : 'توصيل مبرد بشاحنات مراقبة حرارياً بدرجة -18 مئوية مباشرة إلى مستودعات المتاجر.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-neutral-200">
                  <span className="p-2 rounded-xl bg-[#5E9440]/10 text-[#5E9440] shrink-0 mt-0.5">
                    <PackageCheck className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-[#14301F]">
                      {isEn ? 'Customized Mixed Pallet Staging' : 'إمكانية تشكيل الطبالي المشكلة'}
                    </h3>
                    <p className="text-xs text-[#5B6B60] mt-0.5">
                      {isEn
                        ? 'Combine Parotta, traditional snacks, cut vegetables, and fruit pulp on a single delivery run.'
                        : 'اجمع أصناف الباراتا والمقبلات والخضار ولب الفواكه في نفس الشحنة دون قيود.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-neutral-200">
                  <span className="p-2 rounded-xl bg-[#5E9440]/10 text-[#5E9440] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-[#14301F]">
                      {isEn ? '100% Regulatory Compliance' : 'مطابقة كاملة لسلامة الأغذية'}
                    </h3>
                    <p className="text-xs text-[#5B6B60] mt-0.5">
                      {isEn
                        ? 'Dubai Municipality FIRS pre-registered, FSSAI certified, and 100% Halal accredited.'
                        : 'مسجل لدى بلدية دبي ومرخص من FSSAI ومعتمد حلال بالكامل.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Helpdesk */}
              <div className="bg-[#14301F] text-white p-5 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-[#8DC63F]">
                  {isEn ? 'Direct Wholesale Desk' : 'خط التوزيع التجاري المباشر'}
                </span>
                <div className="flex items-center gap-2 text-xs">
                  <Phone className="w-4 h-4 text-[#F26B21]" />
                  <a href={`tel:${COMPANY_DETAILS.uae.phone}`} className="font-mono font-bold hover:underline">
                    {COMPANY_DETAILS.uae.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="w-4 h-4 text-[#8DC63F]" />
                  <a href={`mailto:${COMPANY_DETAILS.uae.email}`} className="hover:underline">
                    {COMPANY_DETAILS.uae.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: The Interactive Form */}
            <div className="lg:col-span-7">
              <WholesaleInquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
