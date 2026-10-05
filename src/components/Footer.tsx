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
            <a href="https://t.me/exsun_official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-orange">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z" /></svg>
              Telegram
            </a>
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
