'use client';

import React from 'react';
import { Book } from '@/lib/data';

interface BookCoverProps {
  book: Book;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isLink?: boolean;
}

export default function BookCover({
  book,
  size = 'md',
  className = '',
}: BookCoverProps) {
  const sizeClasses = {
    sm: 'w-40 h-60 text-xs',
    md: 'w-56 h-80 text-sm',
    lg: 'w-72 h-[416px] text-base',
  };

  const isUpcoming = book.status === 'upcoming';

  return (
    <div
      role="img"
      aria-label={`Front cover of ${book.title} by Anant Chaudhary`}
      className={`relative group select-none transition-all duration-300 hover:scale-[1.02] ${sizeClasses[size]} ${className}`}
      style={{ perspective: '1000px' }}
    >
      {/* Realistic hardcover shadow */}
      <div className="absolute inset-0 bg-[#050505]/80 rounded-sm translate-y-3 blur-md group-hover:translate-y-5 group-hover:blur-xl transition-all duration-300" />

      {/* Book Hardcover Body */}
      <div className="relative w-full h-full rounded-sm overflow-hidden border border-[#777777]/30 bg-gradient-to-br from-[#161616] via-[#0d0d0d] to-[#080808] shadow-2xl flex flex-col justify-between p-5">
        {/* Book Spine crease effect */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/80 via-white/5 to-transparent pointer-events-none z-20 border-r border-white/5" />
        
        {/* Subtle diagonal texture sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-black/60 pointer-events-none" />

        {/* Top Header: Author Name */}
        <div className="relative z-10 text-center pt-2">
          <p className="font-cinzel tracking-[0.25em] text-[10px] md:text-xs text-[#C0C0C0]/90 uppercase font-medium">
            Anant Chaudhary
          </p>
          <div className="mx-auto w-8 h-[1px] bg-[#B08D57]/60 mt-1.5" />
        </div>

        {/* Center: Symbol & Title */}
        <div className="relative z-10 my-auto text-center flex flex-col items-center">
          <div className="w-14 h-14 md:w-20 md:h-20 mb-3 flex items-center justify-center relative">
            <div
              className="absolute inset-0 rounded-full opacity-20 blur-sm"
              style={{ backgroundColor: book.coverAccent }}
            />
            
            {book.coverSymbol === 'labyrinth' && (
              <svg
                viewBox="0 0 100 100"
                aria-hidden="true"
                className="w-12 h-12 md:w-16 md:h-16 stroke-[#C0C0C0] fill-none transition-transform duration-500 group-hover:rotate-45"
                strokeWidth="2.5"
              >
                <circle cx="50" cy="50" r="42" stroke="#B08D57" strokeWidth="1" strokeDasharray="3 3" />
                <rect x="22" y="22" width="56" height="56" stroke="#C0C0C0" />
                <rect x="34" y="34" width="32" height="32" stroke="#B5121B" strokeWidth="2" />
                <circle cx="50" cy="50" r="5" fill="#B08D57" />
              </svg>
            )}

            {book.coverSymbol === 'summit' && (
              <svg
                viewBox="0 0 100 100"
                aria-hidden="true"
                className="w-12 h-12 md:w-16 md:h-16 stroke-[#C0C0C0] fill-none"
                strokeWidth="2"
              >
                <circle cx="50" cy="50" r="42" stroke="#777777" strokeWidth="1" />
                <polygon points="50,18 82,78 18,78" stroke="#B08D57" strokeWidth="2.5" />
                <polygon points="50,38 70,78 30,78" stroke="#B5121B" strokeWidth="1.5" />
                <line x1="50" y1="18" x2="50" y2="78" stroke="#C0C0C0" strokeDasharray="2 2" />
              </svg>
            )}

            {book.coverSymbol === 'monolith' && (
              <svg
                viewBox="0 0 100 100"
                aria-hidden="true"
                className="w-12 h-12 md:w-16 md:h-16 stroke-[#C0C0C0] fill-none"
                strokeWidth="2"
              >
                <circle cx="50" cy="50" r="40" stroke="#DC2626" strokeWidth="1.5" />
                <rect x="42" y="20" width="16" height="60" stroke="#C0C0C0" fill="#111111" />
                <line x1="30" y1="50" x2="70" y2="50" stroke="#B08D57" strokeWidth="2" />
              </svg>
            )}

            {book.coverSymbol === 'seal' && (
              <svg
                viewBox="0 0 100 100"
                aria-hidden="true"
                className="w-12 h-12 md:w-16 md:h-16 stroke-[#C0C0C0] fill-none"
                strokeWidth="2"
              >
                <polygon points="50,15 85,50 50,85 15,50" stroke="#C0C0C0" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="22" stroke="#B5121B" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" fill="#B08D57" />
              </svg>
            )}
          </div>

          <h3 className="font-cinzel text-center font-bold tracking-wider text-[#C0C0C0] leading-tight px-1 group-hover:text-white transition-colors duration-200">
            {book.title}
          </h3>

          {!isUpcoming && book.subtitle && (
            <p className="font-poppins text-[9px] md:text-[10px] text-[#777777] line-clamp-2 mt-1.5 px-2">
              {book.subtitle}
            </p>
          )}

          {isUpcoming && (
            <div className="mt-3">
              <span className="font-cinzel text-[10px] tracking-[0.2em] text-[#DC2626] uppercase font-semibold">
                Forthcoming
              </span>
            </div>
          )}
        </div>

        {/* Bottom Publisher / Emblem Footer */}
        <div className="relative z-10 text-center pb-1">
          <div className="mx-auto w-10 h-[1px] bg-[#777777]/30 mb-2" />
          <span className="font-cinzel text-[9px] tracking-[0.2em] text-[#777777] uppercase">
            {isUpcoming ? 'Aegis Editions' : (book.publisher || 'First Edition')}
          </span>
        </div>

        {/* Realistic Book Ribbon Accent */}
        <div
          className="absolute top-0 right-6 w-3 h-10 shadow-md transform -skew-y-12 pointer-events-none"
          style={{ backgroundColor: book.coverAccent }}
        />
      </div>
    </div>
  );
}
