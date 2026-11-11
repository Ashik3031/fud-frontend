import React from 'react';
import { useRouter } from '../context/RouterContext';
import { HeadTags } from '../components/seo/HeadTags';
import { Link } from '../components/common/Link';
import { Home, Search, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';

  return (
    <>
      <HeadTags
        title={isEn ? 'Page Not Found (404) | FUDIYO Frozen Foods UAE' : 'الصفحة غير موجودة (404) | فوديو للأغذية المجمدة'}
        description={isEn ? 'The page you are looking for does not exist.' : 'الصفحة المطلوبة غير موجودة.'}
        pathname="/404"
        locale={locale}
        noIndex={true}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="text-7xl font-black text-[#5E9440] font-mono">404</div>
          <h1 className="text-2xl font-bold text-[#14301F]">
            {isEn ? 'Page Not Found' : 'الصفحة غير موجودة'}
          </h1>
          <p className="text-sm text-[#5B6B60]">
            {isEn
              ? 'The link you clicked may be broken or the page may have been moved. Explore our catalogue or return home.'
              : 'الرابط الذي اتبعته قد يكون غير صحيح أو تم نقل الصفحة. يمكنك تصفح المنتجات أو العودة للرئيسية.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#14301F] text-white font-bold text-xs hover:bg-[#0e2215] shadow-md transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>{isEn ? 'Return Home' : 'الرئيسية'}</span>
            </Link>

            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F26B21] text-white font-bold text-xs hover:bg-[#e05b12] shadow-md transition-colors"
            >
              <span>{isEn ? 'View Products' : 'كتالوج المنتجات'}</span>
              <ArrowRight className={`w-4 h-4 ${!isEn ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
