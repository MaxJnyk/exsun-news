import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-12 border-t border-line bg-white">
      <div className="mx-auto max-w-[1248px] px-5 py-8 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-orange-bright sm:text-2xl" style={{ letterSpacing: '-1px' }}>
            <Image src="/logo.svg" alt="ExSun" width={28} height={28} className="shrink-0" />
            ExSun <span className="text-muted font-medium">Crypto News</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold">
            <Link href="/news" className="transition-colors hover:text-orange">Все новости</Link>
            <Link href="/about" className="transition-colors hover:text-orange">О проекте</Link>
            <Link href="/contacts" className="transition-colors hover:text-orange">Контакты</Link>
            <Link href="/editorial" className="transition-colors hover:text-orange">Редакция</Link>
            <a
              href="/rss.xml"
              className="transition-colors hover:text-orange"
            >
              RSS
            </a>
          </nav>
        </div>
        <p className="mt-6 text-sm text-muted">
          Информационный ресурс о криптовалютах и блокчейне. Не оказывает финансовых услуг, не консультирует по обмену или торговле криптовалютой и не несёт ответственности за решения читателей.
        </p>
        <p className="mt-2 text-sm text-muted">© 2026 ExSun Crypto News</p>
        <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
          <Link href="/privacy" className="transition-colors hover:text-orange">Политика конфиденциальности</Link>
          <Link href="/terms" className="transition-colors hover:text-orange">Пользовательское соглашение</Link>
          <Link href="/consent" className="transition-colors hover:text-orange">Согласие на обработку ПД</Link>
          <Link href="/cookie-policy" className="transition-colors hover:text-orange">Cookie-политика</Link>
          <Link href="/editorial" className="transition-colors hover:text-orange">Редакционная политика</Link>
        </nav>
      </div>
    </footer>
  );
}
