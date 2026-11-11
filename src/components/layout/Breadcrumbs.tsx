import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Link } from '../common/Link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { locale } = useRouter();
  const isEn = locale === 'en';

  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#5B6B60]"
    >
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="hover:text-[#14301F] transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5 text-[#5E9440]" />
            <span>{isEn ? 'Home' : 'الرئيسية'}</span>
          </Link>
          <ChevronRight className={`w-3.5 h-3.5 text-neutral-400 ${!isEn ? 'rotate-180' : ''}`} />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-[#14301F] transition-colors truncate max-w-[200px]"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight
                    className={`w-3.5 h-3.5 text-neutral-400 ${!isEn ? 'rotate-180' : ''}`}
                  />
                </>
              ) : (
                <span className="font-semibold text-[#14301F] truncate max-w-[250px]" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
