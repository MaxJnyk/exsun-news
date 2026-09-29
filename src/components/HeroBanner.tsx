import Image from 'next/image';
import Link from 'next/link';

export function HeroBanner() {
  const show = process.env.NEXT_PUBLIC_SHOW_TOP_BANNER === 'true';
  if (!show) return null;

  return (
    <div className="border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto max-w-[1280px] px-3 py-2 md:px-6 md:py-3">
        <Link
          href="https://exsun.net"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block select-none overflow-hidden rounded-lg md:rounded-xl"
        >
          {/* Фоновая картинка */}
          <Image
            alt="ExSun — сравните курсы обмена криптовалют"
            className="block w-full"
            src="/promo/hero-wide.webp"
            width={3376}
            height={1440}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 95vw, 1232px"
          />

          {/* Затемнение для читаемости текста */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

          {/* Текст + кнопка */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-14">
            <h2 className="text-xl font-extrabold leading-[1.2] text-white drop-shadow-lg sm:text-3xl lg:text-[40px]" style={{ letterSpacing: '-1px' }}>
              Сравните курсы обмена
              <br />
              криптовалют
            </h2>
            <p className="mt-1.5 text-xs text-white/80 drop-shadow sm:mt-2 sm:text-sm lg:text-base">
              Курсы, резервы и условия обменников — всё на одной странице
            </p>
            <span className="mt-3 inline-flex w-fit rounded-[10px] bg-white px-4 py-2 text-xs font-bold text-orange shadow-lg transition-all group-hover:scale-105 group-hover:shadow-xl sm:mt-4 sm:px-6 sm:py-3 sm:text-sm lg:text-base">
              Сравнить курсы ↗
            </span>
          </div>

          {/* Логотип ExSun в правом верхнем углу */}
          <div className="absolute right-4 top-4 flex items-center gap-1.5 sm:right-6 sm:top-6">
            <span className="text-sm font-extrabold text-white drop-shadow-lg sm:text-lg">
              ExSun
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
