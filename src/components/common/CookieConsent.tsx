import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Link } from './Link';
import { ShieldCheck, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const [accepted, setAccepted] = useState(true); // default true to avoid flash

  useEffect(() => {
    const hasConsented = localStorage.getItem('fudiyo_cookie_consent');
    if (!hasConsented) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('fudiyo_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <aside
      aria-label="Cookie Consent"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-[#14301F] text-white p-4 rounded-2xl shadow-2xl border border-[#5E9440]/40 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#8DC63F] shrink-0 mt-0.5" />
        <div className="flex-1 text-xs leading-relaxed text-neutral-200">
          <p>
            {isEn
              ? 'We use essential cookies to provide secure browsing, seamless language preferences, and quotation processing in accordance with UAE PDPL regulations.'
              : 'نستخدم ملفات تعريف الارتباط الأساسية لضمان تجربة آمنة ومعالجة طلبات التسعير وفق قانون حماية البيانات الشخصية الإماراتي.'}
          </p>
          <div className="mt-2.5 flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-lg bg-[#8DC63F] text-[#14301F] font-bold text-xs hover:bg-[#7db434] transition-colors cursor-pointer"
            >
              {isEn ? 'Accept & Continue' : 'موافق ومتابعة'}
            </button>
            <Link
              href="/privacy-policy"
              className="text-xs text-neutral-300 underline hover:text-white"
            >
              {isEn ? 'Privacy Notice' : 'سياسة الخصوصية'}
            </Link>
          </div>
        </div>
        <button
          onClick={handleAccept}
          className="text-neutral-400 hover:text-white p-1"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
