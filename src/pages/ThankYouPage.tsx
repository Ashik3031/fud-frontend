import React from 'react';
import { useRouter } from '../context/RouterContext';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { COMPANY_DETAILS } from '../data/company';
import { Link } from '../components/common/Link';
import { CheckCircle, MessageCircle, Home, ArrowRight } from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/thank-you'];

  const quoteRef = `FUD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/thank-you"
        locale={locale}
        noIndex={true}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-28 pb-20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 w-full text-center space-y-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#5E9440]/30 shadow-2xl space-y-5 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#8DC63F]/20 text-[#5E9440] flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-[#14301F]/5 text-xs font-mono font-bold text-[#5E9440]">
              Quotation Reference: {quoteRef}
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-[#14301F]">
              {isEn ? seo.h1.en : seo.h1.ar}
            </h1>

            <p className="text-sm text-[#5B6B60] leading-relaxed max-w-lg mx-auto">
              {isEn
                ? 'Your commercial inquiry has been logged in our Dubai trade system. Our reefer logistics manager will review your delivery emirate and volume request and reply with official wholesale pricing within 24 hours.'
                : 'تم تسجيل طلبك التجاري في نظام التوزيع بدبي. سيقوم مسؤول التوريد بمراجعة الكميات وموقع التسليم والتواصل معك بعرض الأسعار الرسمي وعينات المنتجات خلال 24 ساعة.'}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.uae.whatsapp}?text=${encodeURIComponent(
                  `Hello FUDIYO, I just submitted enquiry Ref: ${quoteRef}. Please share expedited wholesale prices.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isEn ? 'Expedite on WhatsApp' : 'تسريع الرد عبر واتساب'}</span>
              </a>

              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#14301F] text-white font-bold text-xs hover:bg-[#0e2215] shadow-md transition-all"
              >
                <span>{isEn ? 'Browse All Products' : 'تصفح كتالوج المنتجات'}</span>
                <ArrowRight className={`w-4 h-4 ${!isEn ? 'rotate-180' : ''}`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
