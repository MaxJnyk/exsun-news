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
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1248px] items-center justify-between gap-6 px-5 sm:h-[96px] lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center" aria-label="ExSun Crypto News">
          <span className="flex items-center gap-2 text-[28px] font-bold text-orange-bright sm:text-[32px]" style={{ letterSpacing: '-1.3px' }}>
            <Image src="/logo.svg" alt="ExSun" width={36} height={36} className="shrink-0" />
            ExSun
          </span>
          <span className="ml-3 border-l border-line pl-4 text-[10px] font-bold leading-[1.4] text-ink sm:ml-4 sm:text-xs" style={{ letterSpacing: '0.4px' }}>
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
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl bg-paper md:hidden"
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
        <nav className="absolute left-0 top-[76px] z-50 w-full bg-white px-5 py-5 shadow-[0_10px_12px_rgba(32,37,60,0.07)] md:hidden">
          <div className="flex flex-col gap-4 text-[15px] font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`transition-colors ${
                  isActive(item.href) ? 'text-orange' : 'text-[rgba(60,59,101,0.5)] hover:text-orange'
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
