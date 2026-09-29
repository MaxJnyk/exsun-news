import Link from 'next/link';

export function TopBanner() {
  const show = process.env.NEXT_PUBLIC_SHOW_TOP_BANNER === 'true';
  if (!show) return null;

  return (
    <div
      className="flex w-full items-center justify-center gap-3 px-4 py-2.5 text-center sm:gap-4 sm:py-3"
      style={{ background: 'linear-gradient(90deg, #ff9a51 0%, #fd7043 100%)' }}
    >
      <p className="text-xs font-medium text-white sm:text-sm">
        Нужно обменять криптовалюту? Сравните курсы, резервы и условия на ExSun.
      </p>
      <Link
        href="https://exsun.net"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-[8px] bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:px-4 sm:py-2 sm:text-sm"
      >
        Сравнить курсы ↗
      </Link>
    </div>
  );
}
