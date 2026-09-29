'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Главное' },
  { href: '/news', label: 'Все новости' },
  { href: '/about', label: 'О проекте' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-[36px] z-40 border-b border-line bg-white sm:top-[40px]">
      <div className="mx-auto flex h-[60px] max-w-[1248px] items-center justify-between gap-4 px-4 sm:h-[76px] sm:gap-6 sm:px-5 lg:h-[96px] lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center" aria-label="ExSun Crypto News">
          <span className="flex items-center gap-1.5 text-[22px] font-bold text-orange-bright sm:gap-2 sm:text-[28px] lg:text-[32px]" style={{ letterSpacing: '-1.3px' }}>
            <Image src="/logo.svg" alt="ExSun" width={28} height={28} className="shrink-0 sm:h-9 sm:w-9" />
            ExSun
          </span>
          <span className="ml-2 border-l border-line pl-2.5 text-[9px] font-bold leading-[1.4] text-ink sm:ml-3 sm:pl-4 sm:text-[10px] lg:ml-4 lg:text-xs" style={{ letterSpacing: '0.4px' }}>
            Crypto
            <br />
            News
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center md:flex">
          {navItems.map((item, index) => (
            <div key={item.href} className="relative flex items-center">
              <Link
                href={item.href}
                className={`text-[15px] font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-orange'
                    : 'text-[rgba(60,59,101,0.5)] hover:text-orange'
                }`}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <span className="mx-[30px] inline-block h-[5px] w-[5px] rounded-full bg-[#F89A6B]" />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl bg-paper md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="absolute left-0 top-[96px] z-50 w-full border-b border-line bg-white px-4 py-4 shadow-[0_10px_12px_rgba(32,37,60,0.07)] sm:top-[116px] sm:px-5 sm:py-5 md:hidden">
          <div className="flex flex-col gap-3 text-[15px] font-medium sm:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2.5 transition-colors ${
                  isActive(item.href)
                    ? 'bg-orange/5 text-orange'
                    : 'text-[rgba(60,59,101,0.5)] hover:bg-paper hover:text-orange'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
