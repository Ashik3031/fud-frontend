import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale } from '../types';

interface RouterContextType {
  pathname: string;
  locale: Locale;
  navigate: (to: string) => void;
  switchLocale: (newLocale: Locale) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const locale: Locale = pathname.startsWith('/ar') ? 'ar' : 'en';

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    let target = to.startsWith('/') ? to : `/${to}`;
    
    // Normalize target URL with locale if needed
    if (locale === 'ar' && !target.startsWith('/ar')) {
      target = target === '/' ? '/ar' : `/ar${target}`;
    }

    if (window.location.pathname !== target) {
      window.history.pushState({}, '', target);
      setPathname(target);
    }
  };

  const switchLocale = (newLocale: Locale) => {
    let newPath = pathname;
    if (newLocale === 'ar' && !pathname.startsWith('/ar')) {
      newPath = pathname === '/' ? '/ar' : `/ar${pathname}`;
    } else if (newLocale === 'en' && pathname.startsWith('/ar')) {
      newPath = pathname.replace(/^\/ar/, '') || '/';
    }

    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
      setPathname(newPath);
    }
  };

  return (
    <RouterContext.Provider value={{ pathname, locale, navigate, switchLocale }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
