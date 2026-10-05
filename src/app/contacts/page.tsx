import type { Metadata } from 'next';

import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Контакты — ExSun Crypto News',
  description:
    'Связь с редакцией ExSun Crypto News: email, Telegram, предложения о сотрудничестве.',
  alternates: { canonical: 'https://news.exsun.net/contacts' },
  openGraph: {
    title: 'Контакты — ExSun Crypto News',
    description: 'Связь с редакцией ExSun Crypto News.',
    url: 'https://news.exsun.net/contacts',
  },
};

export default function ContactsPage() {
  return (
    <LegalLayout title="Контакты" updated="28 сентября 2026">
      <p>
        По вопросам редакции, исправлениям в материалах и
        предложениям о сотрудничестве пишите на{' '}
        <a
          href="mailto:partner@exsun.net"
          className="text-orange underline"
        >
          partner@exsun.net
        </a>
        .
      </p>
      <h2 className="mt-8 mb-3 text-xl font-bold">
        Редакционные вопросы
      </h2>
      <p>
        Замечания к материалам, сообщения об ошибках и опечатках
        направляйте с пометкой «правка» в теме письма. Мы
        разбираемся с каждым обращением и вносим исправления,
        если факт подтверждается.
      </p>
      <h2 className="mt-8 mb-3 text-xl font-bold">
        Реклама и сотрудничество
      </h2>
      <p>
        По вопросам размещения рекламы и спецпроектов — на тот же
        адрес <a href="mailto:partner@exsun.net" className="text-orange underline">partner@exsun.net</a>{' '}
        с пометкой «сотрудничество».
      </p>
      <h2 className="mt-8 mb-3 text-xl font-bold">Мессенджеры</h2>
      <p>
        Редакция доступна в Telegram:{' '}
        <a
          href="https://t.me/exsun_official"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange underline"
        >
          @exsun_official
        </a>
      </p>
      <p className="mt-8 text-sm text-muted">
        ExSun Crypto News не оказывает финансовых услуг и не
        консультирует по вопросам обмена или торговли
        криптовалютой.
      </p>
    </LegalLayout>
  );
}
