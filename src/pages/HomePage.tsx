import React from 'react';
import { useRouter } from '../context/RouterContext';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { COMPANY_DETAILS } from '../data/company';
import { FAQS } from '../data/faqs';
import { UAE_CITIES } from '../data/uae-cities';
import { PinnedHero } from '../components/animation/PinnedHero';
import { ProductCard } from '../components/common/ProductCard';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { WholesaleInquiryForm } from '../components/forms/WholesaleInquiryForm';
import { Link } from '../components/common/Link';
import { HeadTags } from '../components/seo/HeadTags';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateFAQSchema,
} from '../lib/seo';
import { SEO_CONFIG } from '../data/seo-config';
import {
  ShieldCheck,
  CheckCircle,
  Truck,
  Layers,
  ArrowRight,
  Flame,
  Award,
  Clock,
  Sparkles,
  MapPin,
  FileCheck,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/'];

  // 6 Marquee Bestseller Products
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 6);

  // Home JSON-LD schemas
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema(),
    generateFAQSchema(FAQS.slice(0, 6), locale),
  ];

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/"
        locale={locale}
        jsonLd={schemas}
      />

      {/* 1. Hero Section */}
      <PinnedHero />

      {/* 2. Trust Bar (Halal, FSSAI, APEDA, No Preservatives) */}
      <section className="bg-white border-y border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            <div className="flex items-center justify-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#8DC63F]/15 text-[#5E9440]">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <div className="text-left">
                <span className="text-xs font-bold text-[#14301F] block">
                  {isEn ? '100% Halal Certified' : 'معتمد حلال 100%'}
                </span>
                <span className="text-[11px] text-[#5B6B60]">
                  {isEn ? 'UAE GSO Standards' : 'مطابق للمواصفات الخليجية'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#5E9440]/15 text-[#5E9440]">
                <FileCheck className="w-5 h-5" />
              </span>
              <div className="text-left">
                <span className="text-xs font-bold text-[#14301F] block">
                  {isEn ? 'FSSAI & APEDA Registered' : 'ترخيص سلامة الغذاء وAPEDA'}
                </span>
                <span className="text-[11px] text-[#5B6B60]">Lic. 11215332000549</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#F26B21]/15 text-[#F26B21]">
                <CheckCircle className="w-5 h-5" />
              </span>
              <div className="text-left">
                <span className="text-xs font-bold text-[#14301F] block">
                  {isEn ? 'Zero Preservatives' : 'خالٍ من المواد الحافظة'}
                </span>
                <span className="text-[11px] text-[#5B6B60]">
                  {isEn ? 'Cryogenic IQF Freezing' : 'تجميد خاطف سريع'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#14301F]/10 text-[#14301F]">
                <Truck className="w-5 h-5" />
              </span>
              <div className="text-left">
                <span className="text-xs font-bold text-[#14301F] block">
                  {isEn ? '-18°C Reefer Delivery' : 'توصيل مبرد -18 مئوية'}
                </span>
                <span className="text-[11px] text-[#5B6B60]">
                  {isEn ? 'All 7 Emirates Covered' : 'شامل كافة إمارات الدولة'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Explore 8 Product Categories */}
      <section className="py-20 bg-[#F7F9F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
                {isEn ? 'International Brand Catalogue' : 'الكتالوج الدولي للعلامة التجارية'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#14301F] mt-1">
                {isEn ? 'Explore Our 8 Product Lines' : 'استكشف خطوط إنتاجنا الثمانية'}
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F26B21] hover:text-[#e05b12] transition-colors"
            >
              <span>{isEn ? 'View Complete Catalogue (45+ Items)' : 'عرض كافة المنتجات (45+ صنف)'}</span>
              <ArrowRight className={`w-4 h-4 ${!isEn ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/10 bg-[#14301F]/5 overflow-hidden p-3 relative">
                    <img
                      src={cat.heroImage}
                      alt={isEn ? cat.name.en : cat.name.ar}
                      className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#14301F] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {isEn ? `${cat.itemCount} Products` : `${cat.itemCount} أصناف`}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-bold text-[#14301F] group-hover:text-[#5E9440] transition-colors">
                      {isEn ? cat.name.en : cat.name.ar}
                    </h3>
                    <p className="text-xs text-[#5B6B60] leading-relaxed line-clamp-2">
                      {isEn ? cat.tagline.en : cat.tagline.ar}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs font-bold text-[#5E9440] group-hover:text-[#F26B21] transition-colors">
                  <span>{isEn ? 'Browse Category' : 'تصفح الفئة'}</span>
                  <ArrowRight className={`w-4 h-4 ${!isEn ? 'rotate-180' : ''}`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Best Sellers Showcase */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
              {isEn ? 'Customer Favorites in the UAE' : 'الأكثر طلباً في أسواق الإمارات'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#14301F] mt-1">
              {isEn ? 'Top In-Demand Frozen Specialties' : 'أبرز المنتجات الأكثر مبيعاً للمتاجر والمطاعم'}
            </h2>
            <p className="text-sm text-[#5B6B60] mt-3">
              {isEn
                ? 'Handcrafted parottas, breakfast essentials, and pure fruit pulps that retail customers and chefs repurchase every week.'
                : 'أصناف الباراتا، وجبات الفطور ولب الفواكه النقي التي تحظى بإقبال قياسي متكرر أسبوعياً.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why FUDIYO Section (Dark Green Full Bleed) */}
      <section className="py-20 bg-[#14301F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-leaf-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
                {isEn ? 'The FUDIYO Quality Advantage' : 'ميزة الجودة الفائقة مع فوديو'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight text-balance">
                {isEn ? (
                  <>
                    Authentic Kerala Culinary Heritage, <span className="text-[#8DC63F]">Hygienic Modern Freezing</span>
                  </>
                ) : (
                  <>
                    أصالة التراث الكيرالي العريق مع <span className="text-[#8DC63F]">أحدث تقنيات التجميد الصحي</span>
                  </>
                )}
              </h2>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                {isEn
                  ? 'FUDIYO Foods was created to make everyday cooking effortless without compromising on authentic taste. From slow-coiled Malabar parottas to fresh coconut shreds and slow-roasted masala pastes, every item represents our dedication to hygiene, freshness, and trust.'
                  : 'تأسست فوديو لتجعل الطهي اليومي سهلاً وسريعاً دون التنازل عن النكهة الأصلية. من طبقات الباراتا المورقة إلى جوز الهند الطازج ومعجون التوابل المحمصة، تعكس منتجاتنا التزامنا بالنظافة والطزاجة.'}
              </p>

              {/* 4 Feature Pillars */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <span className="p-2 rounded-xl bg-white/10 text-[#8DC63F] shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isEn ? '1. Cryogenic Quick-Freeze (-35°C)' : '1. تجميد خاطف سريع (-35 مئوية)'}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      {isEn
                        ? 'Locks in moisture, aromatics, and vitamins within hours of harvest without needing chemical preservatives.'
                        : 'يحبس الرطوبة والنكهة والفيتامينات خلال ساعات من الحصاد دون أي إضافات كيميائية.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="p-2 rounded-xl bg-white/10 text-[#8DC63F] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isEn ? '2. 100% Halal Slaughter & Segregated Lines' : '2. ذبح يدوي حلال وخطوط تصنيع معزولة'}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      {isEn
                        ? 'Slaughtered according to Islamic rites; vegetarian and snack items processed in isolated rooms.'
                        : 'مذبوح وفق الشريعة الإسلامية مع عزل كامل لخطوط المنتجات النباتية.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="p-2 rounded-xl bg-white/10 text-[#8DC63F] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isEn ? '3. 3-Minute Heat & Eat Convenience' : '3. تسخين سريع في 3 دقائق فقط'}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      {isEn
                        ? 'Pre-steamed, par-fried, or concentrated bases save restaurants hours of prep time and eliminate spoilage.'
                        : 'منتجات مجهزة ومطهوة جزئياً بالبخار توفر ساعات التحضير على المطابخ والمنازل.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="p-2 rounded-xl bg-white/10 text-[#8DC63F] shrink-0 mt-0.5">
                    <Truck className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {isEn ? '4. Export-Grade Multi-Layer Barrier Packaging' : '4. تغليف تصدير متعدد الطبقات عالي العزل'}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      {isEn
                        ? 'Zero freezer burn, aroma leakages, or shelf degradation during multi-month cold storage.'
                        : 'حماية كاملة من حروق التجميد وتسرب الروائح لضمان أطول فترة صلاحية طازجة.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Eranad Green Logistics Truck Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/20 p-2">
                <img
                  src="/brand/eranad-logistics.jpg"
                  alt="Eranad Exports Pvt Ltd Green Reefer Fleet Delivering FUDIYO Frozen Foods"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="p-4 bg-black/40 backdrop-blur-md rounded-xl mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#8DC63F] block">
                      Eranad Exports Pvt Ltd Fleet
                    </span>
                    <span className="text-[11px] text-neutral-300">
                      Exporting worldwide from Kerala, India
                    </span>
                  </div>
                  <Link
                    href="/quality-certifications"
                    className="text-xs font-bold text-white hover:text-[#8DC63F] transition-colors underline"
                  >
                    {isEn ? 'View Certifications' : 'عرض الشهادات'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UAE Regional Distribution Coverage Map & Cities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
              {isEn ? 'Nationwide Logistics Network' : 'شبكة التوزيع اللوجستي الوطنية'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#14301F] mt-1">
              {isEn ? 'Supplying Across All 7 UAE Emirates' : 'نغطي كافة إمارات الدولة السبع بشاحنات مبردة'}
            </h2>
            <p className="text-sm text-[#5B6B60] mt-2">
              {isEn
                ? 'From our primary cold storage terminal in Al Quoz, Dubai to hypermarkets and cloud kitchens in Abu Dhabi, Sharjah, Ajman, RAK, and Al Ain.'
                : 'من مركز التخزين المبرد الرئيسي في القوز بدبي إلى المتاجر والمطاعم في أبوظبي، الشارقة، عجمان، رأس الخيمة والعين.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UAE_CITIES.map((city) => (
              <div
                key={city.id}
                id={city.id}
                className="p-6 rounded-2xl border border-neutral-200 bg-[#F7F9F2] hover:border-[#5E9440] transition-colors space-y-3"
              >
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-[#5E9440] text-white">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#14301F]">
                      {isEn ? city.name.en : city.name.ar}
                    </h3>
                    <span className="text-xs font-semibold text-[#5E9440]">
                      {isEn ? city.coverageTag.en : city.coverageTag.ar}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#5B6B60] leading-relaxed">
                  {isEn ? city.description.en : city.description.ar}
                </p>

                <div className="pt-2 border-t border-neutral-200 text-xs text-[#14301F]">
                  <span className="font-bold block mb-1">
                    {isEn ? 'Delivery Schedule:' : 'جدول التوصيل:'}
                  </span>
                  <span className="text-[#5B6B60]">
                    {isEn ? city.deliveryFrequency.en : city.deliveryFrequency.ar}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Comprehensive FAQ Section */}
      <section className="py-20 bg-[#F7F9F2] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion
            faqs={FAQS}
            title={isEn ? 'Frequently Asked Questions' : 'الأسئلة الشائعة والمكررة'}
            subtitle={
              isEn
                ? 'Answers to common questions from UAE retailers, chefs, and families.'
                : 'إجابات شاملة لأسئلة تجار التجزئة والمطاعم والمستهلكين في الإمارات.'
            }
          />
        </div>
      </section>

      {/* 8. Interactive Wholesale Quotation Lead Section */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <WholesaleInquiryForm />
        </div>
      </section>
    </>
  );
};
