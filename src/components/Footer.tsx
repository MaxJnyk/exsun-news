import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-8 border-t border-line bg-white sm:mt-12">
      <div className="mx-auto max-w-[1248px] px-4 py-6 sm:px-5 sm:py-8 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
          <div className="flex items-center gap-1.5 text-lg font-bold text-orange-bright sm:gap-2 sm:text-xl lg:text-2xl" style={{ letterSpacing: '-1px' }}>
            <Image src="/logo.svg" alt="ExSun" width={24} height={24} className="shrink-0 sm:h-7 sm:w-7" />
            ExSun <span className="text-muted font-medium">Crypto News</span>
          </div>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold sm:gap-x-6">
            <Link href="/news" className="transition-colors hover:text-orange">Все новости</Link>
            <Link href="/about" className="transition-colors hover:text-orange">О проекте</Link>
            <Link href="/contacts" className="transition-colors hover:text-orange">Контакты</Link>
            <Link href="/editorial" className="transition-colors hover:text-orange">Редакция</Link>
            <a href="/rss.xml" className="transition-colors hover:text-orange">RSS</a>
          </nav>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted sm:mt-6 sm:text-sm">
          Информационный ресурс о криптовалютах и блокчейне. Не оказывает финансовых услуг, не консультирует по обмену или торговле криптовалютой и не несёт ответственности за решения читателей.
        </p>
        <p className="mt-2 text-xs text-muted sm:text-sm">© 2026 ExSun Crypto News</p>
        <nav className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-muted sm:mt-4 sm:gap-x-4 sm:text-xs">
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
