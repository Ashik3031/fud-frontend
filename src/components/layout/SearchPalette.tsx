import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../../context/RouterContext';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { BLOG_POSTS } from '../../data/blog';
import { Search, X, ArrowRight, Layers, FileText, Sparkles } from 'lucide-react';

interface SearchPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchPalette: React.FC<SearchPaletteProps> = ({ isOpen, onClose }) => {
  const { locale, navigate } = useRouter();
  const isEn = locale === 'en';
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Filter products
  const matchingProducts = cleanQuery
    ? PRODUCTS.filter((p) => {
        return (
          p.name.en.toLowerCase().includes(cleanQuery) ||
          p.name.ar.toLowerCase().includes(cleanQuery) ||
          p.description.en.toLowerCase().includes(cleanQuery) ||
          p.categoryName.en.toLowerCase().includes(cleanQuery) ||
          p.ingredients.en.toLowerCase().includes(cleanQuery) ||
          (p.name.ml && p.name.ml.includes(cleanQuery))
        );
      }).slice(0, 8)
    : PRODUCTS.slice(0, 4);

  // Filter categories
  const matchingCategories = cleanQuery
    ? CATEGORIES.filter(
        (c) =>
          c.name.en.toLowerCase().includes(cleanQuery) ||
          c.name.ar.toLowerCase().includes(cleanQuery) ||
          c.tagline.en.toLowerCase().includes(cleanQuery)
      )
    : [];

  // Filter blogs
  const matchingBlogs = cleanQuery
    ? BLOG_POSTS.filter(
        (b) =>
          b.title.en.toLowerCase().includes(cleanQuery) ||
          b.title.ar.toLowerCase().includes(cleanQuery) ||
          b.excerpt.en.toLowerCase().includes(cleanQuery)
      ).slice(0, 3)
    : [];

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden text-[#0E1A12]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-100 gap-3">
          <Search className="w-5 h-5 text-[#5E9440]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isEn
                ? "Search parotta, snacks, curries, fruit pulps, or blogs (e.g. 'Malabar', 'Alphonso')..."
                : "ابحث عن الباراتا، الوجبات، الكاري، الفواكه (مثال: 'مالابار'، 'ألفونسو')..."
            }
            className="flex-1 bg-transparent border-none text-base outline-none text-[#14301F] placeholder:text-[#5B6B60]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-neutral-400 hover:text-neutral-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline text-xs font-mono bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Categories */}
          {matchingCategories.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5E9440] block mb-2 px-2">
                {isEn ? 'Categories' : 'الفئات'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchingCategories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelect(`/products/${c.slug}`)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F7F9F2] text-left transition-colors border border-transparent hover:border-neutral-200 cursor-pointer w-full"
                  >
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-[#5E9440]" />
                      <span className="text-sm font-semibold text-[#14301F]">
                        {isEn ? c.name.en : c.name.ar}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5B6B60]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#5E9440] block mb-2 px-2">
              {cleanQuery
                ? isEn
                  ? `Products Found (${matchingProducts.length})`
                  : `المنتجات المطابقة (${matchingProducts.length})`
                : isEn
                ? 'Popular Products'
                : 'المنتجات الأكثر طلباً'}
            </span>

            {matchingProducts.length === 0 ? (
              <div className="text-center py-8 text-neutral-500 text-sm">
                {isEn ? 'No products match your search.' : 'لم يتم العثور على منتجات مطابقة.'}
              </div>
            ) : (
              <div className="space-y-1.5">
                {matchingProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(`/products/${p.categorySlug}/${p.slug}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F7F9F2] transition-colors text-left border border-transparent hover:border-neutral-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={p.image}
                        alt={isEn ? p.name.en : p.name.ar}
                        className="w-10 h-10 object-cover rounded-lg bg-neutral-100 shrink-0"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#14301F] truncate">
                            {isEn ? p.name.en : p.name.ar}
                          </span>
                          {p.name.ml && (
                            <span className="text-[10px] text-[#5B6B60] hidden md:inline">
                              {p.name.ml}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-[#5B6B60] block truncate">
                          {isEn ? p.categoryName.en : p.categoryName.ar} · {p.packSize.en}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-[#F26B21] shrink-0 ml-2">
                      {isEn ? 'View Product' : 'عرض المنتج'}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Blogs */}
          {matchingBlogs.length > 0 && (
            <div className="border-t border-neutral-100 pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5E9440] block mb-2 px-2">
                {isEn ? 'Articles & Guides' : 'المقالات والأدلة'}
              </span>
              <div className="space-y-1.5">
                {matchingBlogs.map((b) => (
                  <button
                    key={b.slug}
                    onClick={() => handleSelect(`/blog/${b.slug}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F7F9F2] transition-colors text-left border border-transparent hover:border-neutral-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileText className="w-4 h-4 text-[#F26B21] shrink-0" />
                      <span className="text-xs font-semibold text-[#14301F] truncate">
                        {isEn ? b.title.en : b.title.ar}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#5B6B60] shrink-0">{b.readTime}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="bg-[#F7F9F2] px-4 py-2.5 border-t border-neutral-200 flex items-center justify-between text-xs text-[#5B6B60]">
          <span>{isEn ? 'Navigate with click or Enter' : 'تنقل بالنقر أو زر الإدخال'}</span>
          <span className="font-mono text-[11px]">FUDIYO™ Product Search</span>
        </div>
      </div>
    </div>
  );
};
