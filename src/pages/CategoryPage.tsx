import React from 'react';
import { useRouter } from '../context/RouterContext';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { Link } from '../components/common/Link';
import { generateBreadcrumbSchema } from '../lib/seo';
import { ArrowRight, Layers, ShieldCheck, CheckCircle, Snowflake } from 'lucide-react';

interface CategoryPageProps {
  categorySlug: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ categorySlug }) => {
  const { locale } = useRouter();
  const isEn = locale === 'en';

  const category = CATEGORIES.find((c) => c.slug === categorySlug);
  const products = PRODUCTS.filter((p) => p.categorySlug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold">Category Not Found</h1>
        <Link href="/products" className="text-[#5E9440] underline mt-4 inline-block">
          Return to Products Hub
        </Link>
      </div>
    );
  }

  const categoryName = isEn ? category.name.en : category.name.ar;
  const pageTitle = isEn
    ? `${category.name.en} | FUDIYO Frozen Foods UAE Supplier`
    : `${category.name.ar} | مورد أغذية فوديو المجمدة الإمارات`;

  const pageDesc = isEn
    ? `${category.description.en.slice(0, 150)}... Wholesale supply for Dubai, Abu Dhabi, and UAE.`
    : `${category.description.ar.slice(0, 150)}... توريد جملة لمتاجر ومطاعم الإمارات.`;

  // Breadcrumbs
  const breadcrumbItems = [
    { label: isEn ? 'Products' : 'المنتجات', href: '/products' },
    { label: categoryName },
  ];

  // Schema
  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: categoryName, url: `/products/${category.slug}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: categoryName,
      description: pageDesc,
      hasPart: products.map((p) => ({
        '@type': 'Product',
        name: isEn ? p.name.en : p.name.ar,
        url: `/products/${p.categorySlug}/${p.slug}`,
      })),
    },
  ];

  // Map category to matching SEO landing page
  const matchingLandingPage =
    categorySlug === 'parotta'
      ? { href: '/frozen-kerala-parotta-dubai', labelEn: 'Read Dedicated Dubai Parotta Guide', labelAr: 'دليل باراتا مالابار في دبي' }
      : categorySlug === 'fruit-pulp'
      ? { href: '/fruit-pulp-supplier-uae', labelEn: 'Read Fruit Pulp Supplier UAE Guide', labelAr: 'دليل مورد لب الفواكه بالإمارات' }
      : categorySlug === 'meat-chicken'
      ? { href: '/halal-frozen-chicken-uae', labelEn: 'Read Halal Chicken UAE Guide', labelAr: 'دليل الدجاج المجمد الحلال بالإمارات' }
      : { href: '/frozen-food-supplier-uae', labelEn: 'Read UAE Frozen Food Supplier Guide', labelAr: 'دليل مورد الأغذية المجمدة بالإمارات' };

  return (
    <>
      <HeadTags
        title={pageTitle}
        description={pageDesc}
        pathname={`/products/${category.slug}`}
        locale={locale}
        jsonLd={schemas}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {/* Category Banner Hero */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xs mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#5E9440]">
                  <span>{isEn ? 'FUDIYO Product Line' : 'خط إنتاج فوديو الرسمي'}</span>
                  <span>·</span>
                  <span>{isEn ? `Catalogue Page 0${category.pageNumber}` : `صفحة الكتالوج 0${category.pageNumber}`}</span>
                  <span>·</span>
                  <span>{isEn ? `${products.length} Products Available` : `${products.length} أصناف متوفرة`}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14301F] tracking-tight">
                  {categoryName}
                </h1>

                <p className="text-sm sm:text-base text-[#5B6B60] leading-relaxed max-w-2xl">
                  {isEn ? category.description.en : category.description.ar}
                </p>

                {/* Key feature pills */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-[#14301F]">
                  <span className="flex items-center gap-1.5 bg-[#F7F9F2] px-3 py-1.5 rounded-lg border border-neutral-200">
                    <CheckCircle className="w-3.5 h-3.5 text-[#5E9440]" />
                    {isEn ? 'Export-Grade Packaging' : 'تغليف معد للتصدير'}
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#F7F9F2] px-3 py-1.5 rounded-lg border border-neutral-200">
                    <Snowflake className="w-3.5 h-3.5 text-[#5E9440]" />
                    {isEn ? '-18°C Reefer Storage' : 'حفظ مبرد عند -18 مئوية'}
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#F7F9F2] px-3 py-1.5 rounded-lg border border-neutral-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5E9440]" />
                    {isEn ? '100% Quality Inspected' : 'فحص الجودة والسلامة'}
                  </span>
                </div>
              </div>

              {/* Right Side Packshot Preview */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-56 h-56 rounded-2xl bg-[#F7F9F2] p-4 border border-neutral-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={category.heroImage}
                    alt={categoryName}
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cross Link to Landing Page */}
          <div className="mb-8 flex items-center justify-between bg-white px-5 py-3 rounded-xl border border-neutral-200 text-xs">
            <span className="text-[#5B6B60]">
              {isEn
                ? 'Looking for bulk distributor specifications or wholesale delivery terms?'
                : 'هل تبحث عن مواصفات التوريد بالجملة أو شروط التوزيع في الإمارات؟'}
            </span>
            <Link
              href={matchingLandingPage.href}
              className="font-bold text-[#F26B21] hover:underline flex items-center gap-1"
            >
              <span>{isEn ? matchingLandingPage.labelEn : matchingLandingPage.labelAr}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${!isEn ? 'rotate-180' : ''}`} />
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Bottom Category Wholesale CTA */}
          <div className="mt-16 bg-[#14301F] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8DC63F]">
                {isEn ? 'Order In Bulk' : 'طلبات الجملة والكميات الكبيرة'}
              </span>
              <h3 className="text-2xl font-black mt-1">
                {isEn
                  ? `Order ${categoryName} for Your Supermarket or Kitchen`
                  : `اطلب توريد ${categoryName} لمتاجرك أو مطبخك`}
              </h3>
              <p className="text-xs text-neutral-300 mt-1">
                {isEn
                  ? 'Flexible MOQs, mixed container pallet arrangements, and free delivery in Dubai for qualifying orders.'
                  : 'حد أدنى ميسر للطلب، إمكانية تشكيل الطبالي، وتوصيل مبرد مجاني في دبي للطلبات المؤهلة.'}
              </p>
            </div>

            <Link
              href={`/wholesale-distributor-enquiry?category=${category.slug}`}
              className="px-6 py-3.5 rounded-xl bg-[#F26B21] hover:bg-[#e05b12] text-white font-bold text-sm shadow-xl transition-all whitespace-nowrap shrink-0"
            >
              {isEn ? 'Request Wholesale Quote' : 'طلب تسعيرة جملة'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
