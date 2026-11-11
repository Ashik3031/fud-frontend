import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { Search, Filter, Snowflake, Check, Layers } from 'lucide-react';
import { Link } from '../components/common/Link';

export const ProductsHubPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/products'];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDiet, setSelectedDiet] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.categorySlug !== selectedCategory) {
        return false;
      }

      // Dietary filter
      if (selectedDiet === 'halal' && !p.dietary.isHalal) return false;
      if (selectedDiet === 'vegetarian' && !p.dietary.isVegetarian) return false;
      if (selectedDiet === 'vegan' && !p.dietary.isVegan) return false;
      if (selectedDiet === 'no-preservatives' && !p.dietary.noPreservatives) return false;

      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName =
          p.name.en.toLowerCase().includes(q) ||
          p.name.ar.toLowerCase().includes(q) ||
          (p.name.ml && p.name.ml.includes(q));
        const matchesDesc = p.description.en.toLowerCase().includes(q) || p.description.ar.toLowerCase().includes(q);
        const matchesCat = p.categoryName.en.toLowerCase().includes(q) || p.categoryName.ar.toLowerCase().includes(q);
        return matchesName || matchesDesc || matchesCat;
      }

      return true;
    });
  }, [selectedCategory, selectedDiet, searchQuery]);

  // ItemList JSON-LD Schema
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'FUDIYO Frozen Food Products',
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: isEn ? p.name.en : p.name.ar,
      url: `/products/${p.categorySlug}/${p.slug}`,
    })),
  };

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/products"
        locale={locale}
        jsonLd={itemListSchema}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? 'Products Catalogue' : 'كتالوج المنتجات' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {/* Header Title & Subtitle */}
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
              {isEn ? 'FUDIYO International Product Catalogue' : 'كتالوج منتجات فوديو الدولية'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#14301F] mt-1">
              {isEn ? seo.h1.en : seo.h1.ar}
            </h1>
            <p className="text-sm text-[#5B6B60] mt-2 leading-relaxed">
              {isEn
                ? 'Explore all 8 authentic categories. Quick-frozen Malabar parottas, traditional steamed breakfasts, ready-to-cook meat curries, fresh cut vegetables, and 100% natural fruit pulps.'
                : 'تصفح كافة الفئات الثماني الأصلية. باراتا مالابار المورقة، أطباق الفطور التقليدي، خلطات الكاري الجاهزة، خضروات المزارع الطازجة ولب الفواكه الاستوائي الطبيعي 100%.'}
            </p>
          </div>

          {/* Interactive Filter & Search Controls (Does not create duplicate indexable URLs) */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-neutral-200 shadow-xs space-y-4 mb-8">
            {/* Search Input & Dietary Segmented Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#5E9440] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isEn
                      ? 'Search all 45 products (e.g., Parotta, Puttu, Mango, Beef)...'
                      : 'ابحث في كافة المنتجات (مثال: باراتا، بوتو، مانجو، كاري)...'
                  }
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-[#0E1A12] placeholder:text-[#5B6B60] focus:border-[#F26B21] outline-none"
                />
              </div>

              {/* Dietary Filter Segmented Control */}
              <div className="flex items-center gap-1.5 p-1 bg-[#F7F9F2] rounded-xl overflow-x-auto">
                {[
                  { id: 'all', labelEn: 'All Diets', labelAr: 'الكل' },
                  { id: 'halal', labelEn: 'Halal Certified', labelAr: 'حلال معتمد' },
                  { id: 'vegetarian', labelEn: 'Vegetarian', labelAr: 'نباتي' },
                  { id: 'vegan', labelEn: '100% Vegan', labelAr: 'نباتي صرف' },
                  { id: 'no-preservatives', labelEn: 'No Preservatives', labelAr: 'بدون مواد حافظة' },
                ].map((diet) => (
                  <button
                    key={diet.id}
                    type="button"
                    onClick={() => setSelectedDiet(diet.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                      selectedDiet === diet.id
                        ? 'bg-[#14301F] text-white shadow-xs'
                        : 'text-[#5B6B60] hover:text-[#14301F]'
                    }`}
                  >
                    {isEn ? diet.labelEn : diet.labelAr}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 border-t border-neutral-100">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#5E9440] text-white shadow-xs'
                    : 'bg-[#F7F9F2] text-[#0E1A12] hover:bg-neutral-200'
                }`}
              >
                {isEn ? `All Categories (${PRODUCTS.length})` : `كافة الفئات (${PRODUCTS.length})`}
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat.slug
                      ? 'bg-[#5E9440] text-white shadow-xs'
                      : 'bg-[#F7F9F2] text-[#0E1A12] hover:bg-neutral-200'
                  }`}
                >
                  {isEn ? cat.name.en : cat.name.ar}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count & Current Active Filters Summary */}
          <div className="flex items-center justify-between text-xs text-[#5B6B60] mb-6">
            <span>
              {isEn
                ? `Showing ${filteredProducts.length} of ${PRODUCTS.length} products`
                : `عرض ${filteredProducts.length} من إجمالي ${PRODUCTS.length} منتج`}
            </span>
            {(selectedCategory !== 'all' || selectedDiet !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDiet('all');
                  setSearchQuery('');
                }}
                className="text-[#F26B21] font-bold hover:underline cursor-pointer"
              >
                {isEn ? 'Reset Filters' : 'إعادة ضبط التصفية'}
              </button>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200 space-y-3">
              <p className="text-base font-semibold text-[#14301F]">
                {isEn ? 'No products match your current filters.' : 'لم يتم العثور على منتجات مطابقة لخيارات البحث الحالية.'}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedDiet('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-[#5E9440] text-white text-xs font-bold hover:bg-[#4d7d34] transition-colors"
              >
                {isEn ? 'View All 45+ Products' : 'عرض كافة المنتجات'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Bottom Wholesale Quote CTA Banner */}
          <div className="mt-16 bg-[#14301F] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
                {isEn ? 'B2B Wholesale & Distributor Pricing' : 'أسعار التوريد بالجملة للمتاجر والمطاعم'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                {isEn ? 'Looking for Pallet or Container Volumes?' : 'هل تبحث عن توريد طبالي أو حاويات مبردة؟'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {isEn
                  ? 'We deliver customized mixed pallets, continuous cold chain delivery across the UAE, and worldwide container exports from India.'
                  : 'نوفر طبالي مشكلة حسب رغبتكم، توصيل مبرد يومي في الإمارات، وشحنات تصدير بحرية لحاويات كاملة من الهند.'}
              </p>
            </div>

            <Link
              href="/wholesale-distributor-enquiry"
              className="px-6 py-3.5 rounded-xl bg-[#F26B21] hover:bg-[#e05b12] text-white font-bold text-sm shadow-xl transition-all whitespace-nowrap shrink-0"
            >
              {isEn ? 'Request Wholesale Pricing' : 'طلب تسعيرة الجملة الرسمية'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
