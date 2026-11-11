import React from 'react';
import { useRouter } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/blog';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { SEO_CONFIG } from '../data/seo-config';
import { Link } from '../components/common/Link';
import { Clock, ArrowRight, User, BookOpen } from 'lucide-react';

export const BlogIndexPage: React.FC = () => {
  const { locale } = useRouter();
  const isEn = locale === 'en';
  const seo = SEO_CONFIG['/blog'];

  return (
    <>
      <HeadTags
        title={isEn ? seo.title.en : seo.title.ar}
        description={isEn ? seo.description.en : seo.description.ar}
        pathname="/blog"
        locale={locale}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs items={[{ label: isEn ? 'Food Blog' : 'المدونة الغذائية' }]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
              {isEn ? 'Culinary Insights & Industry Intelligence' : 'أسرار الطهي وأحدث اتجاهات السوق الغذائي'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#14301F] mt-1">
              {isEn ? seo.h1.en : seo.h1.ar}
            </h1>
            <p className="text-sm text-[#5B6B60] mt-2">
              {isEn
                ? 'Expert guides on cooking frozen Kerala parottas, cloud kitchen efficiency, Halal cold-chain compliance, and tropical fruit purees for UAE restaurants.'
                : 'أدلة متخصصة في طهي المخبوزات الكيرالية، تشغيل المطابخ السحابية، معايير التوريد الحلال ولب الفواكه الاستوائية لمطاعم الإمارات.'}
            </p>
          </div>

          {/* 10 Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block aspect-16/10 overflow-hidden bg-neutral-100"
                  >
                    <img
                      src={post.image}
                      alt={isEn ? post.title.en : post.title.ar}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </Link>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#5B6B60]">
                      <span className="font-bold text-[#5E9440]">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-[#14301F] group-hover:text-[#5E9440] transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {isEn ? post.title.en : post.title.ar}
                      </Link>
                    </h2>

                    <p className="text-xs text-[#5B6B60] leading-relaxed line-clamp-3">
                      {isEn ? post.excerpt.en : post.excerpt.ar}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-[#5B6B60]">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-[#F26B21] flex items-center gap-1 group-hover:underline"
                  >
                    <span>{isEn ? 'Read Article' : 'قراءة المقال'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${!isEn ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
