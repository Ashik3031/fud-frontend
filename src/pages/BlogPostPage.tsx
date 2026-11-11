import React from 'react';
import { useRouter } from '../context/RouterContext';
import { BLOG_POSTS } from '../data/blog';
import { PRODUCTS } from '../data/products';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { HeadTags } from '../components/seo/HeadTags';
import { Link } from '../components/common/Link';
import { ProductCard } from '../components/common/ProductCard';
import { generateBlogPostingSchema, generateBreadcrumbSchema } from '../lib/seo';
import { Clock, User, Calendar, ArrowLeft, ArrowRight, Share2, BookOpen } from 'lucide-react';

interface BlogPostPageProps {
  slug: string;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const { locale } = useRouter();
  const isEn = locale === 'en';

  const post = BLOG_POSTS.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <Link href="/blog" className="text-[#5E9440] underline mt-4 inline-block">
          Return to Blog Hub
        </Link>
      </div>
    );
  }

  const postTitle = isEn ? post.title.en : post.title.ar;
  const postDesc = isEn ? post.excerpt.en : post.excerpt.ar;

  // Schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: postTitle, url: `/blog/${post.slug}` },
  ]);
  const blogSchema = generateBlogPostingSchema(post, locale);

  // Related products
  const related = post.relatedProducts
    ? PRODUCTS.filter((p) => post.relatedProducts?.includes(p.slug))
    : [];

  return (
    <>
      <HeadTags
        title={isEn ? post.metaTitle.en : post.metaTitle.ar}
        description={isEn ? post.metaDescription.en : post.metaDescription.ar}
        pathname={`/blog/${post.slug}`}
        locale={locale}
        jsonLd={[breadcrumbSchema, blogSchema]}
      />

      <div className="bg-[#F7F9F2] min-h-screen pt-24 pb-20">
        <Breadcrumbs
          items={[
            { label: isEn ? 'Blog' : 'المدونة', href: '/blog' },
            { label: postTitle },
          ]}
        />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {/* Article Header */}
          <header className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-[#5E9440]">
              <span>{post.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-[#5B6B60]">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14301F] tracking-tight leading-tight">
              {postTitle}
            </h1>

            <div className="flex items-center gap-4 text-xs text-[#5B6B60] pt-2 border-b border-neutral-200 pb-4">
              <span className="flex items-center gap-1.5 font-medium">
                <User className="w-3.5 h-3.5 text-[#5E9440]" />
                {post.author}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#5E9440]" />
                {post.date}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-16/9 rounded-3xl overflow-hidden bg-neutral-100 shadow-md mb-10">
            <img
              src={post.image}
              alt={postTitle}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Prose Content */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-xs mb-12">
            <div className="prose max-w-none text-[#0E1A12] leading-relaxed space-y-4 text-sm sm:text-base">
              {(isEn ? post.content.en : post.content.ar)
                .split('\n\n')
                .map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h2
                        key={idx}
                        className="text-xl sm:text-2xl font-bold text-[#14301F] pt-4 border-t border-neutral-100 mt-6"
                      >
                        {paragraph.replace('### ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('#### ')) {
                    return (
                      <h3
                        key={idx}
                        className="text-lg font-bold text-[#5E9440] pt-2"
                      >
                        {paragraph.replace('#### ', '')}
                      </h3>
                    );
                  }
                  return (
                    <p key={idx} className="leading-relaxed text-[#0E1A12]/85">
                      {paragraph}
                    </p>
                  );
                })}
            </div>
          </div>

          {/* Related Products Section */}
          {related.length > 0 && (
            <div className="mt-12 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5E9440]">
                    {isEn ? 'Featured in this Guide' : 'المنتجات المذكورة في هذا المقال'}
                  </span>
                  <h3 className="text-2xl font-black text-[#14301F] mt-0.5">
                    {isEn ? 'Explore Mentioned Products' : 'تصفح المنتجات ذات الصلة'}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog Hub */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#5E9440] hover:underline"
            >
              <ArrowLeft className={`w-3.5 h-3.5 ${!isEn ? 'rotate-180' : ''}`} />
              <span>{isEn ? 'Back to All Articles' : 'العودة لكافة المقالات'}</span>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};
