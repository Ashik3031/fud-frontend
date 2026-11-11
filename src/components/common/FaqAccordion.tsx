import React, { useState } from 'react';
import { FAQItem } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { ChevronDown } from 'lucide-react';

interface FaqAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs, title, subtitle }) => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {title && (
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
            {isEn ? 'Got Questions?' : 'هل لديك استفسارات؟'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#14301F] mt-1">{title}</h2>
          {subtitle && <p className="text-sm text-[#5B6B60] mt-2">{subtitle}</p>}
        </div>
      )}

      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-[#5E9440] bg-white shadow-md'
                  : 'border-neutral-200 bg-white hover:border-neutral-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-bold text-[#14301F] pr-4">
                  {isEn ? faq.question.en : faq.question.ar}
                </span>
                <span
                  className={`p-1.5 rounded-full bg-neutral-100 text-[#14301F] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#8DC63F]/20 text-[#5E9440]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5B6B60] leading-relaxed border-t border-neutral-100 animate-in fade-in duration-150">
                  {isEn ? faq.answer.en : faq.answer.ar}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
