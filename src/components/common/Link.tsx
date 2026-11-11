import React, { AnchorHTMLAttributes } from 'react';
import { useRouter } from '../../context/RouterContext';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  exactLocale?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  exactLocale = false,
  onClick,
  children,
  className,
  ...rest
}) => {
  const { locale, navigate } = useRouter();

  // Compute final real href for search engines and browsers
  let finalHref = href;
  if (!exactLocale) {
    if (locale === 'ar' && !href.startsWith('/ar') && !href.startsWith('http') && !href.startsWith('#')) {
      finalHref = href === '/' ? '/ar' : `/ar${href.startsWith('/') ? href : `/${href}`}`;
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Allow default behavior for external links, anchor targets, meta keys, or downloads
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.altKey ||
      rest.target === '_blank'
    ) {
      return;
    }

    e.preventDefault();
    navigate(finalHref);
  };

  return (
    <a
      href={finalHref}
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
};
