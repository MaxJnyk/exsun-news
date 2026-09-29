import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[800px] px-5 py-20 text-center lg:px-8">
      <p
        className="mb-4 text-xs font-extrabold uppercase text-[#9b523f]"
        style={{ letterSpacing: '1.7px' }}
      >
        ExSun Crypto News
      </p>
      <h1
        className="mb-4 text-6xl font-extrabold leading-[1.1] text-ink sm:text-7xl"
        style={{ letterSpacing: '-2px' }}
      >
        404
      </h1>
      <p className="mb-8 text-lg text-muted">
        Страница не найдена. Возможно, материал был перемещён или
        удалён.
      </p>
      <Link
        href="/"
        className="inline-block rounded-[14px] bg-orange px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
      >
        На главную
      </Link>
    </div>
  );
}
