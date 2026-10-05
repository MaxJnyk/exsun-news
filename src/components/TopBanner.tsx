import Link from 'next/link';

export function TopBanner() {
  const show = process.env.NEXT_PUBLIC_SHOW_TOP_BANNER === 'true';
  if (!show) return null;

  return (
    <Link
      href="https://exsun.net/?utm_source=landing_page"
      target="_blank"
      rel="noopener noreferrer"
      className="sticky top-0 z-50 flex w-full items-center justify-center gap-2 px-4 py-2 text-center transition-opacity hover:opacity-95 sm:gap-4 sm:py-2.5"
      style={{
        background: 'linear-gradient(90deg, #ff6b3d, #ff9a51, #e8447a, #ff6b3d, #ff9a51)',
        backgroundSize: '300% 100%',
        animation: 'gradient-shift 4s linear infinite',
      }}
    >
      <p className="text-[11px] font-medium leading-tight text-white drop-shadow sm:text-sm">
        Сравните курсы, резервы и условия обменников на ExSun
      </p>

      {/* Кнопка с монетами */}
      <span className="relative hidden shrink-0 sm:inline-block">
        {/* Анимированный градиентный бордер */}
        <span
          className="absolute inset-0 rounded-[8px]"
          style={{
            background: 'linear-gradient(90deg, #ff6b3d, #ff9a51, #e8447a, #ff6b3d)',
            backgroundSize: '300% 100%',
            animation: 'gradient-shift 3s linear infinite',
          }}
        />
        <span
          className="relative inline-block rounded-[6px] bg-white/20 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm sm:text-sm"
          style={{ animation: 'btn-pulse 2s ease-in-out infinite' }}
        >
          Сравнить курсы ↗
        </span>

        {/* Bitcoin */}
        <svg
          width="14" height="14" viewBox="0 0 14 14"
          className="pointer-events-none absolute"
          style={{ top: '-2px', right: '8px', animation: 'top-coin-btc 3s ease-out infinite' }}
        >
          <circle cx="7" cy="7" r="6.5" fill="#f7931a" stroke="#fff" strokeWidth="0.5" />
          <text x="7" y="10" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">₿</text>
        </svg>

        {/* Ethereum */}
        <svg
          width="12" height="12" viewBox="0 0 12 12"
          className="pointer-events-none absolute"
          style={{ top: '0px', right: '20px', animation: 'top-coin-eth 3.5s ease-out infinite 1s' }}
        >
          <circle cx="6" cy="6" r="5.5" fill="#627eea" stroke="#fff" strokeWidth="0.5" />
          <path d="M6 2 L6 6 L3.5 7 Z" fill="#fff" opacity="0.6" />
          <path d="M6 2 L6 6 L8.5 7 Z" fill="#fff" />
          <path d="M6 6 L6 9.5 L3.5 7 Z" fill="#fff" opacity="0.6" />
          <path d="M6 6 L6 9.5 L8.5 7 Z" fill="#fff" opacity="0.9" />
        </svg>

        {/* USDT */}
        <svg
          width="13" height="13" viewBox="0 0 13 13"
          className="pointer-events-none absolute"
          style={{ top: '-3px', right: '4px', animation: 'top-coin-usdt 3.2s ease-out infinite 2s' }}
        >
          <circle cx="6.5" cy="6.5" r="6" fill="#26a17b" stroke="#fff" strokeWidth="0.5" />
          <text x="6.5" y="9.5" fontSize="6.5" fontWeight="bold" fill="white" textAnchor="middle">₮</text>
        </svg>
      </span>

      <span
        className="shrink-0 text-[11px] font-bold text-white/90 sm:hidden"
        style={{ animation: 'btn-pulse 2s ease-in-out infinite' }}
      >
        →
      </span>
    </Link>
  );
}
