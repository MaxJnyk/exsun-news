import Link from 'next/link';

interface CtaBlockProps {
  variant?: 'default' | 'article';
}

export function CtaBlock({ variant = 'default' }: CtaBlockProps) {
  return (
    <aside
      className="my-8 flex flex-col gap-4 rounded-[20px] p-5 sm:my-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:rounded-[24px] sm:p-8"
      style={{ background: 'linear-gradient(122deg, #ff9a51 0%, #fd7043 100%)' }}
    >
      <div>
        <h2 className="text-lg font-extrabold leading-[1.3] text-white sm:text-2xl lg:text-3xl" style={{ letterSpacing: '-0.8px' }}>
          {variant === 'article'
            ? 'Ищете, где обменять криптовалюту?'
            : 'Нужно обменять криптовалюту?'}
        </h2>
        <p className="mt-1.5 text-sm text-white/90 sm:mt-2 sm:text-base">
          Сравните курсы, резервы и условия обменников на ExSun.
        </p>
      </div>
      <Link
        href="https://exsun.net"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full shrink-0 rounded-[12px] bg-white px-5 py-3.5 text-center text-sm font-bold text-orange transition-transform hover:scale-105 sm:w-auto sm:px-8 sm:py-5"
      >
        Сравнить курсы ↗
      </Link>
    </aside>
  );
}
