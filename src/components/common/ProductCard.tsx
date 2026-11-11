import React from 'react';
import { Product } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { Link } from './Link';
import { ArrowRight, Snowflake } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { locale } = useRouter();
  const isEn = locale === 'en';

  return (
    <article className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Product Packshot Image Canvas (65%-70% of upper visual) */}
        <Link
          href={`/products/${product.categorySlug}/${product.slug}`}
          className="block relative aspect-4/3 bg-[#F7F9F2] overflow-hidden p-3"
          aria-label={isEn ? product.name.en : product.name.ar}
        >
          <img
            src={product.image}
            alt={`${isEn ? product.name.en : product.name.ar} - FUDIYO Frozen Food`}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              // Fallback to catalogue page or cover
              e.currentTarget.src = '/brand/catalogue-cover.jpg';
            }}
          />

          {/* Discreet single text tag */}
          {product.isBestSeller && (
            <span className="absolute top-3 left-3 bg-[#14301F] text-[#8DC63F] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs tracking-wide">
              {isEn ? 'Best Seller' : 'الأكثر طلباً'}
            </span>
          )}

          {/* Keep Frozen Badge */}
          <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#5B6B60] text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
            <Snowflake className="w-2.5 h-2.5 text-[#5E9440]" />
            -18°C
          </span>
        </Link>

        {/* Content Section */}
        <div className="p-4 space-y-2">
          {/* Clean Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-[#5B6B60]">
            <span className="font-semibold text-[#5E9440]">
              {isEn ? product.categoryName.en : product.categoryName.ar}
            </span>
            <span aria-hidden="true">·</span>
            <span>{isEn ? product.packSize.en : product.packSize.ar}</span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-[#14301F] group-hover:text-[#5E9440] transition-colors leading-snug line-clamp-1">
            <Link href={`/products/${product.categorySlug}/${product.slug}`}>
              {isEn ? product.name.en : product.name.ar}
            </Link>
          </h3>

          {/* Subtitle / Traditional name */}
          <p className="text-xs text-[#5B6B60] line-clamp-1">
            {product.name.ml ? `${product.name.ml} — ` : ''}
            {isEn ? product.subtitle.en : product.subtitle.ar}
          </p>

          {/* Dietary & Spec attributes */}
          <div className="text-[11px] text-[#5B6B60] flex flex-wrap items-center gap-x-2 gap-y-1 pt-1">
            <span>{product.dietary.isHalal ? (isEn ? 'Halal' : 'حلال') : ''}</span>
            {product.dietary.isVegetarian && (
              <>
                <span aria-hidden="true">·</span>
                <span>{isEn ? 'Vegetarian' : 'نباتي'}</span>
              </>
            )}
            {product.dietary.noPreservatives && (
              <>
                <span aria-hidden="true">·</span>
                <span>{isEn ? 'No Preservatives' : 'بدون مواد حافظة'}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-4 pb-4 pt-2 border-t border-neutral-100 flex items-center justify-between gap-2">
        <Link
          href={`/products/${product.categorySlug}/${product.slug}`}
          className="text-xs font-bold text-[#14301F] hover:text-[#5E9440] transition-colors flex items-center gap-1"
        >
          <span>{isEn ? 'View Specifications' : 'المواصفات والطهي'}</span>
          <ArrowRight className={`w-3.5 h-3.5 ${!isEn ? 'rotate-180' : ''}`} />
        </Link>

        <Link
          href={`/wholesale-distributor-enquiry?product=${encodeURIComponent(product.name.en)}`}
          className="px-3 py-1.5 rounded-lg bg-[#F26B21]/10 text-[#F26B21] hover:bg-[#F26B21] hover:text-white font-bold text-xs transition-colors shrink-0"
        >
          {isEn ? 'Quote' : 'تسعير'}
        </Link>
      </div>
    </article>
  );
};
