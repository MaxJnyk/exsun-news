import Link from 'next/link';

export function TopBanner() {
  const show = process.env.NEXT_PUBLIC_SHOW_TOP_BANNER === 'true';
  if (!show) return null;

  return (
    <Link
      href="https://exsun.net"
      target="_blank"
      rel="noopener noreferrer"
      className="sticky top-0 z-50 flex w-full items-center justify-center gap-2 px-4 py-2 text-center transition-opacity hover:opacity-90 sm:gap-4 sm:py-2.5"
      style={{ background: 'linear-gradient(90deg, #ff9a51 0%, #fd7043 100%)' }}
    >
      <p className="text-[11px] font-medium leading-tight text-white sm:text-sm">
        Сравните курсы, резервы и условия обменников на ExSun
      </p>
      <span className="hidden shrink-0 rounded-[8px] bg-white/15 px-4 py-1.5 text-xs font-bold text-white sm:inline-block sm:text-sm">
        Сравнить курсы ↗
      </span>
      <span className="shrink-0 text-[11px] font-bold text-white/90 sm:hidden">→</span>
    </Link>
  );
}
