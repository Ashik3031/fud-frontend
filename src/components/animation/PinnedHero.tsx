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
  ChefHat,
} from 'lucide-react';

export const PinnedHero: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';

  return (
    <section className="relative min-h-[94vh] lg:min-h-screen bg-[#03180D] text-white flex flex-col justify-between pt-24 lg:pt-28 pb-8 overflow-hidden">

      {/* =========================================================================
          BACKGROUND LAYER: Deep forest gradient (#03180D), foliage & ambient glow
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep ambient radial gradients */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#0c331c]/60 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-[#B7F52A]/10 rounded-full blur-[160px] animate-ambient-glow" />
        <div className="absolute -bottom-24 right-0 w-[500px] h-[500px] bg-[#0a2715]/70 rounded-full blur-[130px]" />

        {/* Subtle blurred foliage around edges */}
        {/* Top-Right Foliage */}
        <div className="absolute -top-12 -right-12 w-64 h-64 opacity-35 filter blur-[1px] transform rotate-45 animate-leaf-sway">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <path
              d="M30,170 C50,110 110,60 180,30 C150,90 130,150 30,170 Z"
              fill="#2d5e38"
            />
            <path
              d="M10,130 C40,90 90,50 160,20 C130,70 100,120 10,130 Z"
              fill="#1b4525"
            />
          </svg>
        </div>

        {/* Top-Left Floating Leaf */}
        <div className="absolute top-28 left-8 sm:left-16 w-14 h-14 opacity-40 animate-leaf-drift">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full transform -rotate-15">
            <path
              d="M10,80 C30,40 60,20 90,10 C80,40 60,70 10,80 Z"
              fill="#B7F52A"
              opacity="0.85"
            />
          </svg>
        </div>

        {/* Mid-Right Subtle Drifting Leaf */}
        <div className="absolute top-2/3 right-10 w-16 h-16 opacity-30 animate-leaf-sway" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full transform rotate-30">
            <path
              d="M15,85 C35,45 65,25 95,15 C85,45 65,75 15,85 Z"
              fill="#5E9440"
            />
          </svg>
        </div>
      </div>

      {/* =========================================================================
          MAIN HERO CONTENT: 2-Column Spacious Grid
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* -------------------------------------------------------------------
              LEFT COLUMN: Brand Identity, Headline, Description, Trust & CTAs
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-6 space-y-6 text-start">

            {/* 1. Brand Identity Header (Top Left) */}
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-3">
                {/* Eranad Logo Leaf + Brand Name */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#B7F52A]/15 border border-[#B7F52A]/30 flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4 text-[#B7F52A] fill-[#B7F52A]/30" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wide leading-tight">
                      Eranad Exports Pvt Ltd
                    </h3>
                    <p className="text-[11px] text-neutral-400 font-medium leading-none mt-0.5">
                      {isEn ? 'Official UAE Cold-Chain Supply' : 'التوريد المبرد المعتمد للإمارات'}
                    </p>
                  </div>
                </div>

                {/* Thin Vertical Divider */}
                <div className="hidden sm:block h-6 w-px bg-white/20" />

                {/* UAE Market Specialist Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs font-medium text-white shadow-sm">
                  <span className="text-sm">🇦🇪</span>
                  <span>{isEn ? 'UAE Market Specialist' : 'متخصص السوق الإماراتي'}</span>
                </div>
              </div>

              {/* From Kerala to UAE Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a2314] border border-[#B7F52A]/30 text-xs font-semibold text-[#B7F52A]">
                <Truck className="w-3.5 h-3.5 text-[#B7F52A]" />
                <span>{isEn ? 'From Kerala to UAE' : 'من كيرالا إلى الإمارات'}</span>
              </div>
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-black text-white tracking-tight leading-[1.08] text-balance">
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

            {/* 3. Description */}
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed text-balance">
              {isEn
                ? 'Flaky Malabar parotta, traditional curries, ready-to-cook spice mixes, and 100% natural fruit pulps — sourced from Kerala and delivered fresh across Dubai, Abu Dhabi, and Sharjah.'
                : 'خبز باراتا مالابار المورق، خلطات كاري ووجبات كيرالا الجاهزة، ولب الفواكه الطبيعي 100% — من خيرات كيرالا مباشرة إلى دبي، أبوظبي والشارقة.'}
            </p>

            {/* 4. Trust Indicators (Horizontal Row with Minimal Lime-Green Outline Icons) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 pb-1">
              {/* 100% Halal */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#B7F52A]/40 bg-[#B7F52A]/5 flex items-center justify-center shrink-0 text-[#B7F52A]">
                  <ShieldCheck className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-white block">100% Halal</span>
                  <span className="text-neutral-400 text-[10px]">Certified (GSO)</span>
                </div>
              </div>

              {/* Zero Preservatives */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#B7F52A]/40 bg-[#B7F52A]/5 flex items-center justify-center shrink-0 text-[#B7F52A]">
                  <FlaskConical className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-white block">Zero</span>
                  <span className="text-neutral-400 text-[10px]">Preservatives</span>
                </div>
              </div>

              {/* FSSAI & APEDA */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#B7F52A]/40 bg-[#B7F52A]/5 flex items-center justify-center shrink-0 text-[#B7F52A]">
                  <Layers className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-white block">FSSAI & APEDA</span>
                  <span className="text-neutral-400 text-[10px]">Export House</span>
                </div>
              </div>

              {/* Cold-Chain -18°C */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#B7F52A]/40 bg-[#B7F52A]/5 flex items-center justify-center shrink-0 text-[#B7F52A]">
                  <Snowflake className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-white block">Cold-Chain</span>
                  <span className="text-neutral-400 text-[10px]">-18°C Guaranteed</span>
                </div>
              </div>
            </div>

            {/* 5. CTA Buttons (Primary Lime Green Pill + Secondary Transparent with Green Border) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/wholesale-distributor-enquiry"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#B7F52A] hover:bg-[#a3e21e] text-[#03180D] font-black text-sm shadow-xl shadow-[#B7F52A]/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>{isEn ? 'Get Wholesale Quote' : 'طلب تسعيرة جملة للمتاجر'}</span>
                <ArrowRight className={`w-4 h-4 ${!isEn ? 'rotate-180' : ''}`} />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-transparent hover:bg-[#B7F52A]/10 text-white font-semibold text-sm border border-[#B7F52A]/50 transition-all hover:border-[#B7F52A]"
              >
                <LayoutGrid className="w-4 h-4 text-[#B7F52A]" />
                <span>{isEn ? 'Explore All 45+ Products' : 'تصفح قائمة الـ 45 منتجاً'}</span>
              </Link>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN: Large Cinematic Kerala Food Composition & Floating Badges
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">

              {/* Subtle ambient golden/green glow behind food showcase */}
              <div className="absolute inset-4 bg-gradient-to-tr from-[#B7F52A]/20 via-[#FFEB60]/15 to-transparent rounded-full blur-[90px] pointer-events-none animate-ambient-glow" />

              {/* Main Cinematic Food Composition Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/10 group">
                <img
                  src="/brand/hero-food-cinematic.jpg"
                  alt="Authentic Kerala Cuisine - FUDIYO Chicken Roast Mix, Clay Curry Bowl, and Malabar Parottas"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-102"
                />

                {/* Floating Badge: Ready-to-Cook Gravy Mix */}
                <div className="absolute top-10 sm:top-14 left-1/4 sm:left-1/3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a1e12]/85 backdrop-blur-md border border-[#B7F52A]/30 text-[11px] font-semibold text-white shadow-xl">
                  <ChefHat className="w-3.5 h-3.5 text-[#B7F52A]" />
                  <span>{isEn ? 'Ready-to-Cook Gravy Mix' : 'خلطات كاري جاهزة للطهي'}</span>
                </div>

                {/* Animated Gentle Steam Wisps over the Curry Bowl */}
                <div className="absolute bottom-[35%] left-[16%] sm:left-[18%] pointer-events-none z-20 flex flex-col items-center">
                  <div className="w-8 h-12 bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full filter blur-[4px] animate-steam-1" />
                  <div className="w-6 h-10 bg-gradient-to-t from-white/25 via-white/5 to-transparent rounded-full filter blur-[5px] animate-steam-2 -mt-4 ml-3" />
                </div>
              </div>

              {/* Floating Dark Glassmorphism Badges (Stacked on the right of showcase) */}
              <div className="absolute -right-2 sm:-right-4 top-1/4 flex flex-col gap-2.5 z-20">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1e12]/85 backdrop-blur-md border border-white/15 text-xs text-white shadow-2xl hover:border-[#B7F52A]/40 transition-all">
                  <Leaf className="w-3.5 h-3.5 text-[#B7F52A]" />
                  <span className="font-semibold">{isEn ? 'Kerala Authentic' : 'أصالة كيرالا'}</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1e12]/85 backdrop-blur-md border border-white/15 text-xs text-white shadow-2xl hover:border-cyan-400/40 transition-all">
                  <Snowflake className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-semibold">{isEn ? 'UAE Cold-Chain' : 'سلسلة تبريد الإمارات'}</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1e12]/85 backdrop-blur-md border border-white/15 text-xs text-white shadow-2xl hover:border-[#B7F52A]/40 transition-all">
                  <Truck className="w-3.5 h-3.5 text-[#B7F52A]" />
                  <span className="font-semibold">{isEn ? 'Daily Fresh Supply' : 'إمداد يومي طازج'}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================================================
            BOTTOM STATISTICS BAR: Wide Floating Glassmorphism Container
            ========================================================================= */}
        <div className="mt-12 sm:mt-14 max-w-5xl mx-auto w-full">
          <div className="rounded-2xl bg-[#071d10]/80 backdrop-blur-md border border-white/10 p-5 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">

              {/* Stat 1: 45+ Curated Products */}
              <div className="flex items-center justify-center sm:justify-start gap-3.5 pt-2 md:pt-0">
                <div className="w-10 h-10 rounded-xl bg-[#B7F52A]/10 border border-[#B7F52A]/20 flex items-center justify-center shrink-0 text-[#B7F52A]">
                  <Box className="w-5 h-5 stroke-[1.75]" />
                </div>
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
              <div className="flex items-center justify-center sm:justify-start gap-3.5 pt-4 md:pt-0 md:ps-6">
                <div className="w-10 h-10 rounded-xl bg-[#B7F52A]/10 border border-[#B7F52A]/20 flex items-center justify-center shrink-0 text-[#B7F52A]">
                  <MapPin className="w-5 h-5 stroke-[1.75]" />
                </div>
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
              <div className="flex items-center justify-center sm:justify-start gap-3.5 pt-4 md:pt-0 md:ps-6">
                <div className="w-10 h-10 rounded-xl bg-[#B7F52A]/10 border border-[#B7F52A]/20 flex items-center justify-center shrink-0 text-[#B7F52A]">
                  <Leaf className="w-5 h-5 stroke-[1.75]" />
                </div>
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
              <div className="flex items-center justify-center sm:justify-start gap-3.5 pt-4 md:pt-0 md:ps-6">
                <div className="w-10 h-10 rounded-xl bg-[#B7F52A]/10 border border-[#B7F52A]/20 flex items-center justify-center shrink-0 text-[#B7F52A]">
                  <Snowflake className="w-5 h-5 stroke-[1.75]" />
                </div>
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
