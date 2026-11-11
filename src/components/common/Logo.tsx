import React from 'react';
import { Link } from './Link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '', showTagline = false }) => {
  const isLight = variant === 'light'; // Light text on dark bg

  return (
    <Link
      href="/"
      className={`inline-flex flex-col group items-start select-none ${className}`}
      aria-label="FUDIYO Frozen Food Home"
    >
      <div className="flex items-center gap-1.5 relative">
        {/* FUDIYO SVG Brand Typography */}
        <div className="flex items-baseline font-black tracking-wider text-2xl md:text-3xl font-heading">
          <span className={isLight ? 'text-white' : 'text-[#14301F]'}>FUD</span>
          
          {/* Letter I with leaf */}
          <span className="relative inline-block">
            {/* The Green Leaf on the I */}
            <svg
              className="w-4 h-4 absolute -top-3.5 left-0 text-[#8DC63F] transform -rotate-12 transition-transform group-hover:rotate-6 duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 3C10 3 6 8 6 15C6 17.5 7.5 19.5 9.5 20.5C9.5 18 11.5 15.5 14 15C16.5 14.5 18 12.5 18 10C18 7.5 17.5 5 17 3Z" />
            </svg>
            <span className={isLight ? 'text-white' : 'text-[#14301F]'}>I</span>
          </span>

          <span className={isLight ? 'text-white' : 'text-[#14301F]'}>YO</span>
          <span className="text-[10px] uppercase font-bold text-[#8DC63F] ml-0.5">™</span>
        </div>

        {/* Orange Smile Curve Underneath */}
        <div className="absolute -bottom-1.5 left-6 right-2 h-1.5">
          <svg viewBox="0 0 80 12" className="w-full h-full" fill="none">
            <path
              d="M4 2C24 10 56 10 76 2"
              stroke="#F26B21"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {showTagline && (
        <span
          className={`text-[9px] tracking-widest uppercase font-semibold mt-1.5 ${
            isLight ? 'text-[#8DC63F]' : 'text-[#5E9440]'
          }`}
        >
          Good Food. Everyday.
        </span>
      )}
    </Link>
  );
};

export const EranadLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="text-xs uppercase font-medium text-[#5B6B60]">A Brand Of</span>
      <div className="bg-[#C8202F] text-white font-extrabold px-2.5 py-1 rounded text-xs tracking-wider flex items-center shadow-xs">
        ERANAD EXPORTS
      </div>
    </div>
  );
};
