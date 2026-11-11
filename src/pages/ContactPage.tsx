import React from 'react';
import { useRouter } from '../context/RouterContext';
import { COMPANY_DETAILS } from '../data/company';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { WholesaleInquiryForm } from '../components/forms/WholesaleInquiryForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Globe,
  MessageCircle,
  Truck,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/contact'];

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/contact"
        locale={locale}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? 'Contact Us' : 'اتصل بنا' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-[#14301F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl mb-12">
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
                {isEn ? 'Regional & Global Offices' : 'المكاتب الإقليمية والدولية'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {isEn ? seo.h1.en : seo.h1.ar}
              </h1>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-2xl">
                {isEn
                  ? 'Connect with our Dubai cold-chain hub or India global headquarters for wholesale orders, distributor applications, and export container bookings.'
                  : 'تواصل مع مركز التوزيع المبرد في دبي أو المقر الرئيسي في الهند لطلبات الجملة، عقود التوزيع وشحنات الحاويات.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            {/* Left Column: Office Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* UAE Hub */}
              <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-[#5E9440]/10 text-[#5E9440]">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#14301F]">
                      {isEn ? 'UAE Cold Storage & Logistics Hub' : 'مركز التوزيع والتخزين المبرد بالإمارات'}
                    </h3>
                    <span className="text-xs text-[#5B6B60]">
                      {isEn ? COMPANY_DETAILS.uae.companyName : COMPANY_DETAILS.uae.companyNameAr}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#5B6B60] leading-relaxed pt-1">
                  {isEn ? COMPANY_DETAILS.uae.hubAddress : COMPANY_DETAILS.uae.hubAddressAr}
                </p>

                <div className="text-xs space-y-2 pt-2 border-t border-neutral-100">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#F26B21]" />
                    <a href={`tel:${COMPANY_DETAILS.uae.phone}`} className="font-mono font-bold text-[#14301F] hover:underline">
                      {COMPANY_DETAILS.uae.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <a
                      href={`https://wa.me/${COMPANY_DETAILS.uae.whatsapp}?text=${encodeURIComponent(
                        'Hello FUDIYO, I am contacting you regarding UAE distribution.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-bold hover:underline"
                    >
                      WhatsApp: {COMPANY_DETAILS.uae.whatsapp}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#5E9440]" />
                    <a href={`mailto:${COMPANY_DETAILS.uae.email}`} className="text-[#5B6B60] hover:underline">
                      {COMPANY_DETAILS.uae.email}
                    </a>
                  </div>
                  <div className="text-[11px] text-[#5B6B60]">
                    Trade Licence No: <span className="font-mono font-bold">{COMPANY_DETAILS.uae.tradeLicenceNo}</span>
                  </div>
                </div>
              </div>

              {/* India Global Head Office */}
              <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-[#14301F]/10 text-[#14301F]">
                    <Building2 className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#14301F]">
                      {isEn ? 'Global Exporter Head Office' : 'المقر الرئيسي للمصدر العالمي'}
                    </h3>
                    <span className="text-xs text-[#5B6B60]">
                      {COMPANY_DETAILS.legalName}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#5B6B60] leading-relaxed pt-1">
                  {isEn ? COMPANY_DETAILS.headOffice.address : COMPANY_DETAILS.headOffice.addressAr}
                </p>

                <div className="text-xs space-y-2 pt-2 border-t border-neutral-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-[#5B6B60]">{isEn ? 'Direct Phones:' : 'أرقام الهواتف:'}</span>
                    {COMPANY_DETAILS.headOffice.phones.map((p, i) => (
                      <a key={i} href={`tel:${p}`} className="font-mono font-bold text-[#14301F] hover:underline">
                        {p}
                      </a>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <Mail className="w-3.5 h-3.5 text-[#5E9440]" />
                    <a href={`mailto:${COMPANY_DETAILS.headOffice.email}`} className="text-[#5B6B60] hover:underline">
                      {COMPANY_DETAILS.headOffice.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#5E9440]" />
                    <a href={COMPANY_DETAILS.headOffice.website} target="_blank" rel="noopener noreferrer" className="text-[#5E9440] font-bold hover:underline">
                      www.eranadexports.com
                    </a>
                  </div>
                  <div className="text-[11px] text-[#5B6B60]">
                    CIN: <span className="font-mono font-bold">{COMPANY_DETAILS.cin}</span> · FSSAI: <span className="font-mono font-bold">{COMPANY_DETAILS.fssaiNumber}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Wholesale Form */}
            <div className="lg:col-span-7">
              <WholesaleInquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
