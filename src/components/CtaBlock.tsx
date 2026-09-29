import Link from 'next/link';

interface CtaBlockProps {
  variant?: 'default' | 'article';
}

export function CtaBlock({ variant = 'default' }: CtaBlockProps) {
  return (
    <aside
      className="my-8 flex items-center justify-between gap-6 rounded-[24px] p-6 sm:my-10 sm:p-8"
      style={{ background: 'linear-gradient(122deg, #ff9a51 0%, #fd7043 100%)' }}
    >
      <div>
        <h2 className="text-xl font-extrabold leading-[1.3] text-white sm:text-2xl lg:text-3xl" style={{ letterSpacing: '-0.8px' }}>
          {variant === 'article'
            ? 'Ищете, где обменять криптовалюту?'
            : 'Нужно обменять криптовалюту?'}
        </h2>
        <p className="mt-2 text-base text-white/90">
          Сравните курсы, резервы и условия обменников на ExSun.
        </p>
      </div>
      <Link
        href="https://exsun.net"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-[12px] bg-white px-6 py-4 text-sm font-bold text-orange transition-transform hover:scale-105 sm:px-8 sm:py-5"
      >
        Сравнить обменники ↗
      </Link>
    </aside>
  );
}
