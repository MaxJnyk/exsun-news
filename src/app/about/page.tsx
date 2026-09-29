import type { Metadata } from 'next';

import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'О проекте — ExSun Crypto News',
  description:
    'ExSun Crypto News — независимое криптовалютное издание. Цели, принципы, редакционная команда.',
  alternates: { canonical: 'https://news.exsun.net/about' },
  openGraph: {
    title: 'О проекте — ExSun Crypto News',
    description:
      'ExSun Crypto News — независимое криптовалютное издание.',
    url: 'https://news.exsun.net/about',
  },
};

export default function AboutPage() {
  return (
    <LegalLayout title="О проекте" updated="28 сентября 2026">
      <p>
        <strong>ExSun Crypto News</strong> — независимое
        русскоязычное издание о криптовалютах, блокчейне и цифровых
        финансах. Мы публикуем новости, аналитику и обзоры рынка
        без привязки к конкретным сервисам обмена или торговли.
      </p>
      <h2 className="mt-8 mb-3 text-xl font-bold">Наша миссия</h2>
      <p>
        Давать читателю понятную, проверенную и своевременную
        информацию о событиях в мире криптовалют. Мы не даём
        финансовых советов и не призываем к покупке или продаже
        активов — наша задача информировать, а не
        рекомендовать.
      </p>
      <h2 className="mt-8 mb-3 text-xl font-bold">Принципы</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Факты проверяются перед публикацией.</li>
        <li>
          Источник указывается в каждом материале. Если материал
          опирается на чужую публикацию — мы ссылаемся на неё.
        </li>
        <li>
          Рекламные и партнёрские материалы (если появятся) будут
          чётко маркированы.
        </li>
        <li>
          Мы не являемся финансовым консультантом и не оказываем
          услуг по обмену или торговле криптовалютой.
        </li>
      </ul>
      <h2 className="mt-8 mb-3 text-xl font-bold">Редакция</h2>
      <p>
        Материалы готовит редакция ExSun Crypto News. Состав
        авторов и контакты для связи — на странице{' '}
        <a href="/contacts" className="text-orange underline">
          Контакты
        </a>
        .
      </p>
    </LegalLayout>
  );
}
