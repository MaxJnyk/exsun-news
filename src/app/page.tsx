import Link from 'next/link';

import { CtaBlock } from '@/components/CtaBlock';
import { NewsCard } from '@/components/NewsCard';
import {
  getFeaturedNews,
  getTodayNews,
  getYesterdayNews,
  getOlderNews,
  news,
} from '@/data/news';

const baseUrl = 'https://news.exsun.net';

export default function HomePage() {
  const featured = getFeaturedNews();
  const todayNews = getTodayNews();
  const yesterdayNews = getYesterdayNews();
  const olderNews = getOlderNews();

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: news.slice(0, 10).map((article, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${baseUrl}/news/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <div className="mx-auto max-w-[1248px] px-5 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {/* Intro */}
      <section className="pt-12 pb-8 sm:pt-[49px]">
        <p
          className="mb-3.5 text-xs font-extrabold uppercase text-[#9b523f] sm:mb-4"
          style={{ letterSpacing: '1.7px' }}
        >
          ExSun Crypto News
        </p>
        <h1
          className="mb-4 max-w-[820px] text-3xl font-extrabold leading-[1.2] text-ink sm:text-[40px]"
          style={{ letterSpacing: '-1.4px' }}
        >
          Главное из мира криптовалют за 24 часа
        </h1>
        <p className="text-sm text-muted sm:text-base">
          28.09.2026 · {1 + todayNews.length} материалов сегодня
        </p>
      </section>

      {/* Hero: featured + 2 side cards */}
      <section aria-label="Главные новости сегодня" className="mb-10 sm:mb-12">
        <div className="grid grid-cols-1 gap-3.5 sm:gap-5 lg:grid-cols-3">
          {/* Featured - занимает 2 колонки */}
          {featured && (
            <div className="lg:col-span-2">
              <NewsCard article={featured} variant="feature" />
            </div>
          )}
          {/* 2 карточки справа */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1">
            {todayNews.slice(0, 2).map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
        {/* Остальные карточки */}
        {todayNews.length > 2 && (
          <div className="mt-3.5 grid grid-cols-1 gap-3.5 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {todayNews.slice(2).map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </section>

      {/* Yesterday */}
      {yesterdayNews.length > 0 && (
        <section className="mb-10 sm:mb-12">
          <div className="mb-3 flex items-baseline justify-between sm:mb-4">
            <h2
              className="text-2xl font-bold leading-[1.3] text-ink sm:text-[28px]"
              style={{ letterSpacing: '-0.8px' }}
            >
              Ранее
            </h2>
            <span className="text-sm text-muted">14 сентября</span>
          </div>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {yesterdayNews.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Older */}
      {olderNews.length > 0 && (
        <section className="mb-10 sm:mb-12">
          <div className="mb-3 flex items-baseline justify-between sm:mb-4">
            <h2
              className="text-2xl font-bold leading-[1.3] text-ink sm:text-[28px]"
              style={{ letterSpacing: '-0.8px' }}
            >
              Август
            </h2>
            <span className="text-sm text-muted">20 августа</span>
          </div>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {olderNews.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBlock />

      {/* Archive link */}
      <div className="py-7 text-center sm:py-8">
        <Link
          href="/news"
          className="text-xl font-bold text-ink transition-colors hover:text-orange sm:text-2xl"
        >
          Все новости <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
