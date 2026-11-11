import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { COMPANY_DETAILS } from '../data/company';
import { ProductCard } from '../components/common/ProductCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { Link } from '../components/common/Link';
import { generateProductSchema, generateBreadcrumbSchema } from '../lib/seo';
import {
  ShieldCheck,
  CheckCircle,
  Snowflake,
  Flame,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  FileText,
  Clock,
  Sparkles,
  Share2,
} from 'lucide-react';

interface ProductDetailPageProps {
  categorySlug: string;
  productSlug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  categorySlug,
  productSlug,
}) => {
  const { locale, navigate } = useRouter();
  const isEn = locale === 'en';

  const product = PRODUCTS.find((p) => p.slug === productSlug);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Link href="/products" className="text-[#5E9440] underline mt-4 inline-block">
          Return to Products Hub
        </Link>
      </div>
    );
  }

  // Find previous and next product in catalogue
  const currentIndex = PRODUCTS.findIndex((p) => p.id === product.id);
  const prevProduct = currentIndex > 0 ? PRODUCTS[currentIndex - 1] : null;
  const nextProduct = currentIndex < PRODUCTS.length - 1 ? PRODUCTS[currentIndex + 1] : null;

  // Related products from same category or complementary
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  const productName = isEn ? product.name.en : product.name.ar;
  const pageTitle = isEn
    ? `${product.name.en} | FUDIYO Frozen Food Supplier UAE`
    : `${product.name.ar} | مورد أغذية فوديو المجمدة الإمارات`;

  const pageDesc = isEn
    ? `${product.description.en.slice(0, 150)}... Pack size: ${product.packSize.en}. Wholesale supply in UAE.`
    : `${product.description.ar.slice(0, 150)}... حجم العبوة: ${product.packSize.ar}. توريد جملة في الإمارات.`;

  // Schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: isEn ? product.categoryName.en : product.categoryName.ar, url: `/products/${product.categorySlug}` },
    { name: productName, url: `/products/${product.categorySlug}/${product.slug}` },
  ]);
  const productSchema = generateProductSchema(product, locale);

  const [activeTab, setActiveTab] = useState<'cooking' | 'specs' | 'nutrition'>('cooking');
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppQuote = () => {
    const text = isEn
      ? `Hello FUDIYO, I am requesting a wholesale quotation for: ${product.name.en} (${product.packSize.en}) in UAE.`
      : `مرحباً فوديو، أطلب عرض أسعار وتوريد بالجملة لمنتج: ${product.name.ar} (${product.packSize.ar}) في الإمارات.`;

    window.open(
      `https://wa.me/${COMPANY_DETAILS.uae.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <>
      <HeadTags
        title={pageTitle}
        description={pageDesc}
        pathname={`/products/${product.categorySlug}/${product.slug}`}
        locale={locale}
        jsonLd={[breadcrumbSchema, productSchema]}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs
          items={[
            {
              label: isEn ? product.categoryName.en : product.categoryName.ar,
              href: `/products/${product.categorySlug}`,
            },
            { label: productName },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {/* Main PDP Grid (Contiguous Purchase / Spec Module) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Product Image Canvas (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-square rounded-2xl bg-[#F7F9F2] p-6 border border-neutral-200 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={`${productName} packshot`}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/brand/catalogue-cover.jpg';
                  }}
                />

                {/* Best Seller Pill */}
                {product.isBestSeller && (
                  <span className="absolute top-4 left-4 bg-[#14301F] text-[#8DC63F] text-xs font-bold px-2.5 py-1 rounded shadow-xs">
                    {isEn ? 'Best Seller in UAE' : 'الأكثر طلباً في الإمارات'}
                  </span>
                )}

                {/* Catalogue Page Indicator */}
                <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs text-[#5B6B60] text-[10px] font-bold px-2 py-0.5 rounded border border-neutral-200">
                  {isEn ? `Catalogue Page 0${product.cataloguePage}` : `صفحة الكتالوج 0${product.cataloguePage}`}
                </span>
              </div>

              {/* Share & Quick Link */}
              <div className="flex items-center justify-between text-xs text-[#5B6B60] px-1">
                <span>SKU: FUD-{product.id.toUpperCase()}</span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-[#14301F] font-semibold cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? (isEn ? 'Link Copied!' : 'تم النسخ!') : isEn ? 'Share Product' : 'مشاركة الرابط'}</span>
                </button>
              </div>
            </div>

            {/* Right: Contiguous Purchase / Specification Module (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Category & Pack size kicker */}
              <div className="flex items-center gap-2 text-xs text-[#5B6B60]">
                <Link
                  href={`/products/${product.categorySlug}`}
                  className="font-bold text-[#5E9440] hover:underline"
                >
                  {isEn ? product.categoryName.en : product.categoryName.ar}
                </Link>
                <span aria-hidden="true">·</span>
                <span>{isEn ? product.packSize.en : product.packSize.ar}</span>
                {product.pieces && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{isEn ? `${product.pieces} Pieces` : `${product.pieces} قطع`}</span>
                  </>
                )}
              </div>

              {/* Product Name H1 */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#14301F] tracking-tight">
                  {productName}
                </h1>
                {product.name.ml && (
                  <span className="text-sm font-semibold text-[#5E9440] block mt-0.5">
                    {product.name.ml}
                  </span>
                )}
                <p className="text-sm font-medium text-[#5B6B60] mt-1">
                  {isEn ? product.subtitle.en : product.subtitle.ar}
                </p>
              </div>

              {/* High-Intent Description */}
              <p className="text-sm text-[#0E1A12]/80 leading-relaxed">
                {isEn ? product.description.en : product.description.ar}
              </p>

              {/* Key Features Bullet List */}
              <div className="space-y-2 py-1">
                {(isEn ? product.features.en : product.features.ar).map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#14301F]">
                    <CheckCircle className="w-4 h-4 text-[#5E9440] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Quick Specs Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-neutral-100 text-xs">
                <div>
                  <span className="text-[#5B6B60] block text-[11px]">{isEn ? 'Storage' : 'درجة الحفظ'}</span>
                  <span className="font-bold text-[#14301F]">{product.storageTemp}</span>
                </div>
                <div>
                  <span className="text-[#5B6B60] block text-[11px]">{isEn ? 'Shelf Life' : 'فترة الصلاحية'}</span>
                  <span className="font-bold text-[#14301F]">{isEn ? product.shelfLife.en : product.shelfLife.ar}</span>
                </div>
                <div>
                  <span className="text-[#5B6B60] block text-[11px]">{isEn ? 'HS Code' : 'رمز النظام المنسق'}</span>
                  <span className="font-mono font-bold text-[#14301F]">{product.hsCode}</span>
                </div>
                <div>
                  <span className="text-[#5B6B60] block text-[11px]">{isEn ? 'Starting MOQ' : 'الحد الأدنى للطلب'}</span>
                  <span className="font-bold text-[#F26B21]">{isEn ? product.moq.en : product.moq.ar}</span>
                </div>
              </div>

              {/* Action Buttons: Request Wholesale Quote & WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={`/wholesale-distributor-enquiry?product=${encodeURIComponent(product.name.en)}`}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#F26B21] hover:bg-[#e05b12] text-white font-bold text-sm shadow-xl transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isEn ? 'Request Wholesale Quote' : 'طلب تسعيرة جملة للمنتج'}</span>
                </Link>

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:brightness-105 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isEn ? 'WhatsApp Sales' : 'واتساب للمبيعات'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tabbed In-Depth Information: Cooking Guide, Ingredients & Nutrition */}
          <div className="mt-10 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xs">
            {/* Tabs Header */}
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-4 mb-6 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('cooking')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'cooking'
                    ? 'bg-[#14301F] text-white shadow-xs'
                    : 'text-[#5B6B60] hover:bg-neutral-100'
                }`}
              >
                {isEn ? 'Preparation & Cooking Guide' : 'طريقة الطهي والتحضير'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('specs')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'specs'
                    ? 'bg-[#14301F] text-white shadow-xs'
                    : 'text-[#5B6B60] hover:bg-neutral-100'
                }`}
              >
                {isEn ? 'Ingredients & Commercial Specs' : 'المكونات والمواصفات التجارية'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('nutrition')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'nutrition'
                    ? 'bg-[#14301F] text-white shadow-xs'
                    : 'text-[#5B6B60] hover:bg-neutral-100'
                }`}
              >
                {isEn ? 'Nutritional Profile (Per 100g)' : 'القيمة الغذائية (لكل 100 غرام)'}
              </button>
            </div>

            {/* Tab 1: Cooking Instructions */}
            {activeTab === 'cooking' && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="text-base font-bold text-[#14301F] flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#F26B21]" />
                  <span>{isEn ? 'Step-by-Step Cooking Instructions' : 'خطوات التحضير السريع'}</span>
                </h3>

                <ol className="space-y-3 pl-2">
                  {(isEn ? product.cookingInstructions.en : product.cookingInstructions.ar).map(
                    (step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#0E1A12]/80">
                        <span className="w-6 h-6 rounded-full bg-[#5E9440]/10 text-[#5E9440] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="leading-relaxed">{step}</p>
                      </li>
                    )
                  )}
                </ol>
              </div>
            )}

            {/* Tab 2: Ingredients & Specs */}
            {activeTab === 'specs' && (
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#5E9440] mb-2">
                    {isEn ? 'Ingredients List' : 'قائمة المكونات الطبيعية'}
                  </h4>
                  <p className="text-sm text-[#0E1A12]/80 leading-relaxed bg-[#F7F9F2] p-4 rounded-xl border border-neutral-200">
                    {isEn ? product.ingredients.en : product.ingredients.ar}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-neutral-200 bg-white">
                    <span className="text-[#5B6B60] block">{isEn ? 'Export House & Manufacturer' : 'الشركة المصنعة والمصدرة'}</span>
                    <span className="font-bold text-[#14301F]">{COMPANY_DETAILS.legalName}</span>
                    <span className="text-[11px] text-[#5B6B60] block mt-0.5">CIN: {COMPANY_DETAILS.cin}</span>
                  </div>

                  <div className="p-4 rounded-xl border border-neutral-200 bg-white">
                    <span className="text-[#5B6B60] block">{isEn ? 'FSSAI License & Certification' : 'ترخيص سلامة الغذاء'}</span>
                    <span className="font-bold text-[#14301F]">FSSAI Lic. {COMPANY_DETAILS.fssaiNumber}</span>
                    <span className="text-[11px] text-[#5B6B60] block mt-0.5">APEDA Registered Exporter</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Nutrition Table */}
            {activeTab === 'nutrition' && (
              <div className="max-w-xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5E9440] mb-3">
                  {isEn ? 'Typical Nutritional Values per 100g' : 'القيم الغذائية التقريبية لكل 100 غرام'}
                </h4>
                <div className="divide-y divide-neutral-100 border border-neutral-200 rounded-xl overflow-hidden text-sm">
                  <div className="flex justify-between p-3 bg-neutral-50 font-bold">
                    <span>{isEn ? 'Nutrient' : 'العنصر الغذائي'}</span>
                    <span>{isEn ? 'Value' : 'القيمة'}</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span>{isEn ? 'Energy (Calories)' : 'السعرات الحرارية'}</span>
                    <span className="font-mono tabular-nums font-semibold">{product.nutritionPer100g.energyKcal} kcal</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span>{isEn ? 'Protein' : 'البروتين'}</span>
                    <span className="font-mono tabular-nums">{product.nutritionPer100g.proteinG} g</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span>{isEn ? 'Carbohydrates' : 'الكربوهيدرات'}</span>
                    <span className="font-mono tabular-nums">{product.nutritionPer100g.carbsG} g</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span>{isEn ? 'Total Fat' : 'الدهون الكلية'}</span>
                    <span className="font-mono tabular-nums">{product.nutritionPer100g.fatG} g</span>
                  </div>
                  {product.nutritionPer100g.fiberG !== undefined && (
                    <div className="flex justify-between p-3">
                      <span>{isEn ? 'Dietary Fiber' : 'الألياف الغذائية'}</span>
                      <span className="font-mono tabular-nums">{product.nutritionPer100g.fiberG} g</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Previous / Next Product Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-6">
            {prevProduct ? (
              <Link
                href={`/products/${prevProduct.categorySlug}/${prevProduct.slug}`}
                className="flex items-center gap-2 text-xs font-bold text-[#14301F] hover:text-[#5E9440] transition-colors"
              >
                <ArrowLeft className={`w-4 h-4 ${!isEn ? 'rotate-180' : ''}`} />
                <span className="truncate max-w-[150px] sm:max-w-xs">
                  {isEn ? prevProduct.name.en : prevProduct.name.ar}
                </span>
              </Link>
            ) : <div />}

            {nextProduct && (
              <Link
                href={`/products/${nextProduct.categorySlug}/${nextProduct.slug}`}
                className="flex items-center gap-2 text-xs font-bold text-[#14301F] hover:text-[#5E9440] transition-colors ml-auto"
              >
                <span className="truncate max-w-[150px] sm:max-w-xs">
                  {isEn ? nextProduct.name.en : nextProduct.name.ar}
                </span>
                <ArrowRight className={`w-4 h-4 ${!isEn ? 'rotate-180' : ''}`} />
              </Link>
            )}
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
                    {isEn ? 'Related Specialties' : 'منتجات ذات صلة'}
                  </span>
                  <h3 className="text-2xl font-black text-[#14301F] mt-0.5">
                    {isEn ? 'You May Also Need' : 'أصناف مكملة للطلب'}
                  </h3>
                </div>
                <Link
                  href={`/products/${product.categorySlug}`}
                  className="text-xs font-bold text-[#F26B21] hover:underline"
                >
                  {isEn ? 'View All in Category' : 'عرض كافة منتجات الفئة'}
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
