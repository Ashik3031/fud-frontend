import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { COMPANY_DETAILS } from '../../data/company';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';

  const defaultText = isEn
    ? 'Hello FUDIYO Foods UAE, I would like to request wholesale product pricing & catalogue.'
    : 'مرحباً فوديو للأغذية المجمدة الإمارات، أود الاستفسار عن أسعار الجملة والكتالوج التجاري.';

  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.uae.whatsapp}?text=${encodeURIComponent(defaultText)}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-20 md:bottom-8 right-6 z-40 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isEn ? 'Chat with UAE Wholesale Team on WhatsApp' : 'تحدث مع فريق التوزيع عبر واتساب'}
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 md:px-4 md:py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden md:inline font-bold text-xs tracking-wide">
          {isEn ? 'WhatsApp Quote' : 'طلب تسعيرة واتساب'}
        </span>
      </a>
    </aside>
  );
};
