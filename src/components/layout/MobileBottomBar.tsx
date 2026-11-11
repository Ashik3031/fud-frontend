import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { COMPANY_DETAILS } from '../../data/company';
import { Link } from '../common/Link';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';

  const defaultText = isEn
    ? 'Hello FUDIYO Foods, I am inquiring about wholesale prices in Dubai/UAE.'
    : 'مرحباً فوديو للأغذية، أستفسر عن أسعار الجملة والتوريد في الإمارات.';

  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.uae.whatsapp}?text=${encodeURIComponent(defaultText)}`;

  return (
    <aside
      aria-label="Mobile Quick Action Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#14301F] border-t border-[#5E9440]/30 shadow-2xl px-3 py-2 flex items-center justify-between gap-2 h-14"
    >
      {/* 1. Call Sales */}
      <a
        href={`tel:${COMPANY_DETAILS.headOffice.primaryPhone}`}
        className="flex-1 flex flex-col items-center justify-center py-1 text-white hover:text-[#8DC63F] transition-colors"
      >
        <Phone className="w-4 h-4 text-[#8DC63F]" />
        <span className="text-[10px] font-bold mt-0.5">{isEn ? 'Call' : 'اتصال'}</span>
      </a>

      {/* 2. WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1 text-[#25D366] hover:brightness-110 transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
      </a>

      {/* 3. Quote Button */}
      <Link
        href="/wholesale-distributor-enquiry"
        className="flex-2 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#F26B21] text-white rounded-lg font-bold text-xs shadow-md whitespace-nowrap active:bg-[#e05b12]"
      >
        <FileText className="w-3.5 h-3.5" />
        <span>{isEn ? 'Get Quote' : 'طلب تسعيرة'}</span>
      </Link>
    </aside>
  );
};
