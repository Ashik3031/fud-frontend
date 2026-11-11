import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { FAQS } from '../data/faqs';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { generateFAQSchema } from '../lib/seo';
import { Link } from '../components/common/Link';
import { Search, HelpCircle, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export const FaqPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/faq'];

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = FAQS.filter((f) => {
    if (activeCategory !== 'all' && f.category !== activeCategory) {
      return false;
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      const matchQ = f.question.en.toLowerCase().includes(q) || f.question.ar.toLowerCase().includes(q);
      const matchA = f.answer.en.toLowerCase().includes(q) || f.answer.ar.toLowerCase().includes(q);
      return matchQ || matchA;
    }
    return true;
  });

  const faqSchema = generateFAQSchema(FAQS, locale);

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/faq"
        locale={locale}
        jsonLd={faqSchema}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? 'FAQ' : 'الأسئلة الشائعة' }]} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
              {isEn ? 'FUDIYO Knowledge Base' : 'مركز المعلومات والإجابات الشاملة'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#14301F] tracking-tight">
              {isEn ? seo.h1.en : seo.h1.ar}
            </h1>
            <p className="text-sm text-[#5B6B60]">
              {isEn
                ? 'Clear answers regarding preparation methods, cold-chain transport, minimum order quantities, and Halal certifications.'
                : 'إجابات وافية حول طرق الطهي والتسخين، إجراءات الشحن المبرد، كميات الطلب وشهادات الاعتماد.'}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="w-5 h-5 text-[#5E9440] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                isEn
                  ? 'Search questions (e.g., cooking, MOQ, Halal, delivery)...'
                  : 'ابحث في الأسئلة (مثال: طريقة الطهي، حد الطلب، الحلال، التوصيل)...'
              }
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-neutral-300 bg-white text-sm text-[#0E1A12] focus:border-[#F26B21] outline-none shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {[
              { id: 'all', labelEn: 'All Questions', labelAr: 'كافة الأسئلة' },
              { id: 'products', labelEn: 'Cooking & Products', labelAr: 'المنتجات والطهي' },
              { id: 'wholesale', labelEn: 'Wholesale & MOQs', labelAr: 'الجملة والكميات' },
              { id: 'logistics', labelEn: 'Cold Chain & Reefer', labelAr: 'التبريد والشحن' },
              { id: 'certifications', labelEn: 'Halal & Food Safety', labelAr: 'الحلال والتراخيص' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#14301F] text-white shadow-xs'
                    : 'bg-white text-[#5B6B60] hover:text-[#14301F] border border-neutral-200'
                }`}
              >
                {isEn ? cat.labelEn : cat.labelAr}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="mb-14">
            <FaqAccordion faqs={filteredFaqs} />
          </div>

          {/* Still have questions banner */}
          <div className="bg-[#14301F] text-white rounded-3xl p-8 text-center space-y-4">
            <HelpCircle className="w-8 h-8 text-[#8DC63F] mx-auto" />
            <h3 className="text-xl font-bold">
              {isEn ? 'Have a Specific Wholesale Question?' : 'هل لديك استفسار تجاري خاص؟'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
              {isEn
                ? 'Speak directly with our Dubai sales desk for customized foodservice solutions, distributor terms, and product samples.'
                : 'تحدث مباشرة مع فريق المبيعات في دبي للحصول على عروض أسعار خاصة وعينات تجريبية.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-[#F26B21] text-white text-xs font-bold hover:bg-[#e05b12] shadow-md transition-colors"
              >
                {isEn ? 'Contact Our Team' : 'تواصل مع فريقنا'}
              </Link>
              <a
                href={`https://wa.me/${COMPANY_DETAILS.uae.whatsapp}?text=${encodeURIComponent(
                  'Hello FUDIYO, I have a question regarding wholesale supply in UAE.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:brightness-105 shadow-md transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
