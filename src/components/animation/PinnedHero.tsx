import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Link } from '../common/Link';
import {
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Layers,
  Snowflake,
  LayoutGrid,
  Leaf,
  Truck,
  Box,
  MapPin,
} from 'lucide-react';

const HERO_IMAGE_EN =
  'https://res.cloudinary.com/dugtxybef/image/upload/v1794397842/FUDIYO_Kerala_Chicken_Roast_Hero_Scene_1_mceujq.png';
const HERO_IMAGE_AR =
  'https://res.cloudinary.com/dugtxybef/image/upload/v1794398534/Kerala_Chicken_Curry_Feast_with_Parotta_1_zo83lc.png';

export const PinnedHero: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const heroImage = isEn ? HERO_IMAGE_EN : HERO_IMAGE_AR;

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#03180D] text-white flex flex-col justify-between pt-20 sm:pt-24 lg:pt-24 pb-6 sm:pb-8 overflow-hidden">
      {/* =========================================================================
          1. FULL-WIDTH HERO BACKGROUND IMAGE (DYNAMIC EN/AR)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          key={heroImage}
          src={heroImage}
          alt={isEn ? 'FUDIYO Authentic Kerala Cuisine' : 'فوديو - المطبخ الكيرالي الأصيل'}
          className={`absolute inset-0 w-full h-full object-cover ${isEn
              ? 'object-[right_center] lg:object-[85%_center] xl:object-[80%_center]'
              : 'object-[left_center] lg:object-[15%_center] xl:object-[20%_center]'
            }`}
        />
      </div>

      {/* =========================================================================
          2. MAIN HERO CONTENT
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">

          {/* Left Column (Approx 45-50% width): Constrained text content */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-xl space-y-4 sm:space-y-5 text-start">

            {/* Brand Identity Header & Badges */}
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-3">
                {/* Eranad Logo Leaf + Brand Name */}
                {/* <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#B7F52A]/20 border border-[#B7F52A]/40 flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4 text-[#B7F52A] fill-[#B7F52A]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wide leading-tight drop-shadow-sm">
                      Eranad Exports Pvt Ltd
                    </h3>
                    <p className="text-[11px] text-neutral-300 font-medium leading-none mt-0.5 drop-shadow-sm">
                      {isEn ? 'Official UAE Cold-Chain Supply' : 'التوريد المبرد المعتمد للإمارات'}
                    </p>
                  </div>
                </div> */}

                {/* Thin Vertical Divider */}
                {/* <div className="hidden sm:block h-6 w-px bg-white/25" /> */}

                {/* UAE Market Specialist Badge */}
                {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 border border-white/20 backdrop-blur-md text-xs font-semibold text-white shadow-sm">
                  <span className="text-sm">🇦🇪</span>
                  <span>{isEn ? 'UAE Market Specialist' : 'متخصص السوق الإماراتي'}</span>
                </div> */}
              </div>

              {/* From Kerala to UAE Pill */}
              {/* <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0a2314]/90 border border-[#B7F52A]/40 backdrop-blur-md text-xs font-bold text-[#B7F52A]">
                  <Truck className="w-3.5 h-3.5 text-[#B7F52A]" />
                  <span>{isEn ? 'From Kerala to UAE' : 'من كيرالا إلى الإمارات'}</span>
                </div>
              </div> */}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.1rem] font-black text-white tracking-tight leading-[1.12] text-balance drop-shadow-md">
              {isEn ? (
                <>
                  Authentic <span className="text-[#B7F52A]">Kerala</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#B7F52A] via-[#D8FA55] to-[#FFEB60] bg-clip-text text-transparent">
                    Flavours
                  </span>
                  , Delivered
                  <br />
                  Fresh Across UAE
                </>
              ) : (
                <>
                  أصالة <span className="text-[#B7F52A]">المطبخ الكيرالي</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#B7F52A] via-[#D8FA55] to-[#FFEB60] bg-clip-text text-transparent">
                    ونكهاته الأصيلة
                  </span>
                  ، طازجة ومجمدة
                  <br />
                  لكافة أرجاء الإمارات
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-[0.925rem] text-neutral-200/95 max-w-lg leading-relaxed text-pretty drop-shadow-sm">
              {isEn
                ? 'Flaky Malabar parotta, traditional curries, ready-to-cook spice mixes, and 100% natural fruit pulps — sourced from Kerala and delivered fresh across Dubai, Abu Dhabi, and Sharjah.'
                : 'خبز باراتا مالابار المورق، خلطات كاري ووجبات كيرالا الجاهزة، ولب الفواكه الطبيعي 100% — من خيرات كيرالا مباشرة إلى دبي، أبوظبي والشارقة.'}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
              {/* 100% Halal */}
              <div className="flex items-center gap-2 drop-shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#B7F52A] shrink-0 stroke-[1.75]" />
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-white block">100% Halal</span>
                  <span className="text-neutral-300 text-[10px]">Certified (GSO)</span>
                </div>
              </div>

              {/* Zero Preservatives */}
              <div className="flex items-center gap-2 drop-shadow-sm">
                <FlaskConical className="w-5 h-5 text-[#B7F52A] shrink-0 stroke-[1.75]" />
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-white block">Zero</span>
                  <span className="text-neutral-300 text-[10px]">Preservatives</span>
                </div>
              </div>

              {/* FSSAI & APEDA */}
              <div className="flex items-center gap-2 drop-shadow-sm">
                <Layers className="w-5 h-5 text-[#B7F52A] shrink-0 stroke-[1.75]" />
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-white block">FSSAI & APEDA</span>
                  <span className="text-neutral-300 text-[10px]">Export House</span>
                </div>
              </div>

              {/* Cold-Chain -18°C */}
              <div className="flex items-center gap-2 drop-shadow-sm">
                <Snowflake className="w-5 h-5 text-[#B7F52A] shrink-0 stroke-[1.75]" />
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-white block">Cold-Chain</span>
                  <span className="text-neutral-300 text-[10px]">-18°C Guaranteed</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/wholesale-distributor-enquiry"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#B7F52A] hover:bg-[#a3e21e] text-[#03180D] font-black text-xs sm:text-sm shadow-lg shadow-[#B7F52A]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{isEn ? 'Get Wholesale Quote' : 'طلب تسعيرة جملة للمتاجر'}</span>
                <ArrowRight className={`w-4 h-4 ${!isEn ? 'rotate-180' : ''}`} />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-black/40 hover:bg-[#B7F52A]/15 text-white font-semibold text-xs sm:text-sm border border-white/25 hover:border-[#B7F52A] backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <LayoutGrid className="w-4 h-4 text-[#B7F52A]" />
                <span>{isEn ? 'Explore All 45+ Products' : 'تصفح قائمة الـ 45 منتجاً'}</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Completely open so the background image food composition is 100% visible */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6 min-h-[380px] pointer-events-none" />

        </div>

        {/* =========================================================================
            3. STATISTICS BAR: Premium Horizontal Dark Glassmorphism Container
            ========================================================================= */}
        <div className="mt-6 sm:mt-8 w-full max-w-5xl mx-auto">
          <div className="rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 p-3.5 sm:p-4 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center divide-y md:divide-y-0 divide-white/10">

              {/* Stat 1: 45+ Curated Products */}
              <div className="flex items-center gap-3 pt-2 md:pt-0">
                <Box className="w-8 h-8 sm:w-9 sm:h-9 text-[#B7F52A] shrink-0 stroke-[1.75]" />
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums leading-none">
                    45+
                  </div>
                  <div className="text-xs text-neutral-300 mt-1 font-medium">
                    {isEn ? 'Curated Products' : 'صنفاً غذائياً منتقى'}
                  </div>
                </div>
              </div>

              {/* Stat 2: 7 UAE Delivery Hubs */}
              <div className="flex items-center gap-3 pt-3 md:pt-0 md:ps-6 md:border-s md:border-white/10">
                <MapPin className="w-8 h-8 sm:w-9 sm:h-9 text-[#B7F52A] shrink-0 stroke-[1.75]" />
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums leading-none">
                    7
                  </div>
                  <div className="text-xs text-neutral-300 mt-1 font-medium">
                    {isEn ? 'UAE Delivery Hubs' : 'مراكز توزيع بالإمارات'}
                  </div>
                </div>
              </div>

              {/* Stat 3: 100% Natural Ingredients */}
              <div className="flex items-center gap-3 pt-3 md:pt-0 md:ps-6 md:border-s md:border-white/10">
                <Leaf className="w-8 h-8 sm:w-9 sm:h-9 text-[#B7F52A] shrink-0 stroke-[1.75]" />
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums leading-none">
                    100%
                  </div>
                  <div className="text-xs text-neutral-300 mt-1 font-medium">
                    {isEn ? 'Natural Ingredients' : 'مكونات طبيعية 100%'}
                  </div>
                </div>
              </div>

              {/* Stat 4: -18°C Cold-Chain Logistics */}
              <div className="flex items-center gap-3 pt-3 md:pt-0 md:ps-6 md:border-s md:border-white/10">
                <Snowflake className="w-8 h-8 sm:w-9 sm:h-9 text-[#B7F52A] shrink-0 stroke-[1.75]" />
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums leading-none">
                    -18°C
                  </div>
                  <div className="text-xs text-neutral-300 mt-1 font-medium">
                    {isEn ? 'Cold-Chain Logistics' : 'لوجستيات مبردة -18°'}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
