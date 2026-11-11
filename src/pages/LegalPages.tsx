import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { COMPANY_DETAILS } from '../data/company';

export const PrivacyPolicyPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/privacy-policy'];

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/privacy-policy"
        locale={locale}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? 'Privacy Policy' : 'سياسة الخصوصية' }]} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xs space-y-6 text-[#0E1A12] leading-relaxed text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
              {isEn ? 'UAE Federal Decree-Law No. 45/2021 (PDPL)' : 'المرسوم بقانون اتحادي رقم 45 لسنة 2021'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14301F]">
              {isEn ? seo.h1.en : seo.h1.ar}
            </h1>

            <p className="text-xs text-[#5B6B60]">
              {isEn ? 'Last Updated: October 2026' : 'آخر تحديث: أكتوبر 2026'}
            </p>

            <div className="space-y-4 pt-2">
              <h2 className="text-lg font-bold text-[#14301F]">1. Introduction & Data Controller</h2>
              <p>
                This Privacy Policy outlines how <strong>{COMPANY_DETAILS.legalName}</strong> (parent company of FUDIYO™) and our authorized UAE distribution partner collect, process, and protect corporate procurement information and personal contact data in strict accordance with the United Arab Emirates Personal Data Protection Law (Federal Decree-Law No. 45/2021).
              </p>

              <h2 className="text-lg font-bold text-[#14301F]">2. Data Collected Through Wholesale Enquiries</h2>
              <p>
                When you submit a quotation request, apply for dealership status, or interact with our trade desk, we collect business information including Company Name, Contact Person Name, Trade License Number, Corporate Email Address, Telephone/WhatsApp numbers, and delivery destination details.
              </p>

              <h2 className="text-lg font-bold text-[#14301F]">3. Purpose of Processing</h2>
              <p>
                Information gathered is processed solely for preparing commercial quotations, arranging cold-chain reefer delivery, conducting credit verification for institutional accounts, and providing trade customer support. We never sell, lease, or monetize customer data.
              </p>

              <h2 className="text-lg font-bold text-[#14301F]">4. Cold Chain Traceability & Delivery Records</h2>
              <p>
                Delivery confirmations, digital invoices, and reefer temperature verification logs are archived in encrypted systems for regulatory inspection by the Dubai Municipality Food Safety Department and federal bodies.
              </p>

              <h2 className="text-lg font-bold text-[#14301F]">5. Contact Our Data Protection Officer</h2>
              <p>
                For data access requests, rectification, or deletion inquiries, contact: <a href={`mailto:${COMPANY_DETAILS.headOffice.email}`} className="text-[#5E9440] font-bold underline">{COMPANY_DETAILS.headOffice.email}</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const TermsPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/terms'];

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/terms"
        locale={locale}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? 'Terms & Conditions' : 'الشروط والأحكام' }]} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xs space-y-6 text-[#0E1A12] leading-relaxed text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
              Commercial Agreement
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#14301F]">
              {isEn ? seo.h1.en : seo.h1.ar}
            </h1>

            <div className="space-y-4 pt-2">
              <h2 className="text-lg font-bold text-[#14301F]">1. Quotation Validity & Supply Terms</h2>
              <p>
                All wholesale quotations issued by FUDIYO Foods / Eranad Exports Pvt Ltd remain valid for 14 calendar days from the date of issue. Prices quoted are denominated in United Arab Emirates Dirhams (AED) for local delivery or USD for ocean freight export consignments.
              </p>

              <h2 className="text-lg font-bold text-[#14301F]">2. Cold Storage & Quality Inspection at Handover</h2>
              <p>
                Products are handed over at guaranteed temperature of -18°C or colder. Buyers must verify product temperature and pack seal integrity immediately upon delivery. Once goods are signed for and transferred into buyer freezers, liability for proper cold storage maintenance rests with the buyer.
              </p>

              <h2 className="text-lg font-bold text-[#14301F]">3. Minimum Order Quantities (MOQ)</h2>
              <p>
                Local UAE distribution requires a minimum order of 50 mixed cartons across categories. Export container orders (FCL 20ft / 40ft reefer) are governed by specific commercial proforma invoices and shipping contracts.
              </p>

              <h2 className="text-lg font-bold text-[#14301F]">4. Governing Law</h2>
              <p>
                Local UAE sales agreements are governed by the commercial laws of the United Arab Emirates and the Emirate of Dubai. International export contracts are subject to international maritime sales conventions and Incoterms® 2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
