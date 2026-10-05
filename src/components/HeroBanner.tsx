import Image from 'next/image';
import Link from 'next/link';

export function HeroBanner() {
  const show = process.env.NEXT_PUBLIC_SHOW_TOP_BANNER === 'true';
  if (!show) return null;

  return (
    <div className="border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto max-w-[1280px] px-3 py-2 md:px-6 md:py-3">
        <Link
          href="https://exsun.net/?utm_source=landing_page"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block select-none overflow-hidden rounded-lg md:rounded-xl"
        >
          {/* Фоновая картинка */}
          <Image
            alt="ExSun — сравните курсы обмена криптовалют"
            className="block w-full transition-transform duration-700 group-hover:scale-105"
            src="/promo/hero-wide.webp"
            width={3376}
            height={1440}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 95vw, 1232px"
          />

          {/* Затемнение для читаемости текста */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />

          {/* Shimmer — пробегающий блик */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 6s ease-in-out infinite',
            }}
          />

          {/* Парящие монеты — дрейфуют по всему баннеру (правая часть) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Bitcoin 1 — верх право */}
            <svg
              width="44" height="44" viewBox="0 0 44 44"
              className="absolute"
              style={{ top: '12%', right: '18%', animation: 'coin-drift-1 8s ease-in-out infinite' }}
            >
              <circle cx="22" cy="22" r="21" fill="#f7931a" stroke="#fff" strokeWidth="1" opacity="0.95" />
              <text x="22" y="30" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">₿</text>
            </svg>

            {/* Ethereum 1 — центр право */}
            <svg
              width="38" height="38" viewBox="0 0 38 38"
              className="absolute"
              style={{ top: '45%', right: '8%', animation: 'coin-drift-2 9s ease-in-out infinite 1s' }}
            >
              <circle cx="19" cy="19" r="18" fill="#627eea" stroke="#fff" strokeWidth="1" opacity="0.95" />
              <path d="M19 7 L19 19 L12 22 Z" fill="#fff" opacity="0.6" />
              <path d="M19 7 L19 19 L26 22 Z" fill="#fff" />
              <path d="M19 19 L19 31 L12 23.5 Z" fill="#fff" opacity="0.6" />
              <path d="M19 19 L19 31 L26 23.5 Z" fill="#fff" opacity="0.9" />
            </svg>

            {/* USDT 1 — низ право */}
            <svg
              width="40" height="40" viewBox="0 0 40 40"
              className="absolute"
              style={{ bottom: '15%', right: '25%', animation: 'coin-drift-3 10s ease-in-out infinite 2s' }}
            >
              <circle cx="20" cy="20" r="19" fill="#26a17b" stroke="#fff" strokeWidth="1" opacity="0.95" />
              <text x="20" y="26" fontSize="17" fontWeight="bold" fill="white" textAnchor="middle">₮</text>
            </svg>

            {/* Bitcoin 2 — верх центр-право */}
            <svg
              width="32" height="32" viewBox="0 0 32 32"
              className="absolute"
              style={{ top: '20%', right: '38%', animation: 'coin-drift-4 7s ease-in-out infinite 0.5s' }}
            >
              <circle cx="16" cy="16" r="15" fill="#f7931a" stroke="#fff" strokeWidth="0.8" opacity="0.85" />
              <text x="16" y="22" fontSize="17" fontWeight="bold" fill="white" textAnchor="middle">₿</text>
            </svg>

            {/* Ethereum 2 — низ центр-право */}
            <svg
              width="30" height="30" viewBox="0 0 30 30"
              className="absolute"
              style={{ bottom: '25%', right: '45%', animation: 'coin-drift-5 8.5s ease-in-out infinite 1.5s' }}
            >
              <circle cx="15" cy="15" r="14" fill="#627eea" stroke="#fff" strokeWidth="0.8" opacity="0.85" />
              <path d="M15 5 L15 15 L9.5 17.5 Z" fill="#fff" opacity="0.6" />
              <path d="M15 5 L15 15 L20.5 17.5 Z" fill="#fff" />
              <path d="M15 15 L15 25 L9.5 18 Z" fill="#fff" opacity="0.6" />
              <path d="M15 15 L15 25 L20.5 18 Z" fill="#fff" opacity="0.9" />
            </svg>

            {/* USDT 2 — верх право */}
            <svg
              width="34" height="34" viewBox="0 0 34 34"
              className="absolute"
              style={{ top: '8%', right: '5%', animation: 'coin-drift-6 9.5s ease-in-out infinite 2.5s' }}
            >
              <circle cx="17" cy="17" r="16" fill="#26a17b" stroke="#fff" strokeWidth="0.8" opacity="0.85" />
              <text x="17" y="22" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">₮</text>
            </svg>

            {/* Маленькие блестящие точки */}
            <span className="absolute h-1.5 w-1.5 rounded-full bg-white/70" style={{ top: '30%', right: '15%', animation: 'twinkle 3s ease-in-out infinite' }} />
            <span className="absolute h-1 w-1 rounded-full bg-white/50" style={{ top: '60%', right: '30%', animation: 'twinkle 4s ease-in-out infinite 1s' }} />
            <span className="absolute h-2 w-2 rounded-full bg-white/40" style={{ bottom: '20%', right: '12%', animation: 'twinkle 3.5s ease-in-out infinite 2s' }} />
            <span className="absolute h-1 w-1 rounded-full bg-white/60" style={{ top: '15%', right: '40%', animation: 'twinkle 2.5s ease-in-out infinite 0.5s' }} />
          </div>

          {/* Текст + кнопка */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-14">
            <h2
              className="text-xl font-extrabold leading-[1.2] text-white drop-shadow-lg sm:text-3xl lg:text-[40px]"
              style={{ letterSpacing: '-1px', animation: 'fade-in-up 0.8s ease-out' }}
            >
              Сравните курсы обмена
              <br />
              криптовалют
            </h2>
            <p
              className="mt-1.5 text-xs text-white/80 drop-shadow sm:mt-2 sm:text-sm lg:text-base"
              style={{ animation: 'fade-in-up 0.8s ease-out 0.15s both' }}
            >
              Курсы, резервы и условия обменников — всё на одной странице
            </p>
            <span
              className="relative mt-3 inline-flex w-fit rounded-[10px] p-[2px] sm:mt-4"
              style={{ animation: 'fade-in-up 0.8s ease-out 0.3s both' }}
            >
              {/* Анимированный градиентный бордер */}
              <span
                className="absolute inset-0 rounded-[10px]"
                style={{
                  background: 'linear-gradient(90deg, #ff6b3d, #ff9a51, #e8447a, #ff6b3d)',
                  backgroundSize: '300% 100%',
                  animation: 'gradient-shift 3s linear infinite',
                }}
              />
              <span
                className="relative inline-flex rounded-[8px] bg-white px-4 py-2 text-xs font-bold text-orange shadow-lg transition-all group-hover:scale-105 group-hover:shadow-xl sm:px-6 sm:py-3 sm:text-sm lg:text-base"
                style={{ animation: 'btn-glow 2.5s ease-in-out infinite' }}
              >
                Сравнить курсы ↗
              </span>
            </span>
          </div>

          {/* Логотип ExSun в правом верхнем углу */}
          <div className="absolute right-4 top-4 flex items-center gap-1.5 sm:right-6 sm:top-6">
            <span
              className="text-sm font-extrabold text-white drop-shadow-lg sm:text-lg"
              style={{ animation: 'fade-in 1s ease-out 0.5s both' }}
            >
              ExSun
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
