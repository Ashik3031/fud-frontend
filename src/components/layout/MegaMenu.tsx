import React from 'react';
import { CATEGORIES, PRODUCTS } from '../../data/products';
import { useRouter } from '../../context/RouterContext';
import { Link } from '../common/Link';
import {
  Layers,
  SunMedium,
  Cookie,
  Carrot,
  UtensilsCrossed,
  Flame,
  Apple,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-4 h-4" />,
  SunMedium: <SunMedium className="w-4 h-4" />,
  Cookie: <Cookie className="w-4 h-4" />,
  Carrot: <Carrot className="w-4 h-4" />,
  UtensilsCrossed: <UtensilsCrossed className="w-4 h-4" />,
  Flame: <Flame className="w-4 h-4" />,
  Apple: <Apple className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const { locale } = useRouter();
  const isEn = locale === 'en';

  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label={isEn ? 'Products Mega Menu' : 'قائمة المنتجات الموسعة'}
      className="absolute top-full left-0 w-full bg-white text-[#0E1A12] shadow-2xl border-b border-neutral-200 z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top header within mega-menu */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
              {isEn ? 'FUDIYO International Product Catalogue' : 'كتالوج منتجات فوديو الدولية'}
            </span>
            <h3 className="text-xl font-bold text-[#14301F] mt-1">
              {isEn ? 'Explore All 8 Frozen Food Categories' : 'استكشف الفئات الثماني للأغذية المجمدة'}
            </h3>
          </div>
          <Link
            href="/products"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F26B21] hover:text-[#e05b12] transition-colors"
          >
            <span>{isEn ? 'View All 45+ Products' : 'عرض كافة المنتجات (45+)'}</span>
            <ArrowRight className={`w-4 h-4 ${!isEn ? 'rotate-180' : ''}`} />
          </Link>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const topProducts = PRODUCTS.filter((p) => p.categorySlug === cat.slug).slice(0, 3);
            return (
              <div
                key={cat.id}
                className="group p-3.5 rounded-xl hover:bg-[#F7F9F2] transition-colors border border-transparent hover:border-neutral-200/80"
              >
                <Link
                  href={`/products/${cat.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-2.5 mb-2 font-bold text-[#14301F] group-hover:text-[#5E9440] transition-colors"
                >
                  <span className="p-1.5 rounded-lg bg-[#14301F]/5 text-[#5E9440] group-hover:bg-[#5E9440] group-hover:text-white transition-colors">
                    {ICON_MAP[cat.icon] || <Sparkles className="w-4 h-4" />}
                  </span>
                  <span className="text-base">{isEn ? cat.name.en : cat.name.ar}</span>
                </Link>

                <p className="text-xs text-[#5B6B60] line-clamp-2 mb-2.5 leading-relaxed">
                  {isEn ? cat.tagline.en : cat.tagline.ar}
                </p>

                {/* Top 3 items list */}
                <ul className="space-y-1.5 border-t border-neutral-100 pt-2">
                  {topProducts.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/products/${p.categorySlug}/${p.slug}`}
                        onClick={onClose}
                        className="text-xs text-[#0E1A12]/80 hover:text-[#F26B21] transition-colors flex items-center justify-between group/item"
                      >
                        <span className="truncate">{isEn ? p.name.en : p.name.ar}</span>
                        <span className="text-[10px] text-[#5B6B60] opacity-0 group-hover/item:opacity-100 transition-opacity">
                          {p.packSize.en.split(' ')[0]} {p.packSize.en.split(' ')[1]}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom marquee banner inside mega-menu */}
        <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4 bg-[#14301F]/5 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8DC63F]" />
            <span className="text-xs font-semibold text-[#14301F]">
              {isEn
                ? 'Direct -18°C reefer container delivery across all 7 UAE Emirates'
                : 'توصيل مبرد بشاحنات -18 مئوية لكافة إمارات الدولة السبع'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#5B6B60]">
            <span>{isEn ? 'FSSAI Lic. 11215332000549' : 'ترخيص سلامة الغذاء 11215332000549'}</span>
            <span>·</span>
            <span>{isEn ? 'APEDA Registered' : 'مسجل لدى APEDA'}</span>
            <span>·</span>
            <span>{isEn ? '100% Halal Certified' : 'معتمد حلال 100%'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
