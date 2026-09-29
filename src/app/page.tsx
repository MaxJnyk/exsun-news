import Link from 'next/link';

import { CtaBlock } from '@/components/CtaBlock';
import { NewsCard } from '@/components/NewsCard';
import {
  getFeaturedNews,
  getTodayNews,
  news,
} from '@/data/news';

const baseUrl = 'https://news.exsun.net';

export default function HomePage() {
  const featured = getFeaturedNews();
  const todayNews = getTodayNews();

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
      <section className="pt-8 pb-6 sm:pt-12 sm:pb-8 lg:pt-[49px]">
        <p
          className="mb-2.5 text-[10px] font-extrabold uppercase text-[#9b523f] sm:mb-4 sm:text-xs"
          style={{ letterSpacing: '1.7px' }}
        >
          ExSun Crypto News
        </p>
        <h1
          className="mb-3 max-w-[820px] text-2xl font-extrabold leading-[1.2] text-ink sm:mb-4 sm:text-3xl lg:text-[40px]"
          style={{ letterSpacing: '-1.4px' }}
        >
          Главное из мира криптовалют за 24 часа
        </h1>
        <p className="text-xs text-muted sm:text-sm lg:text-base">
          {1 + todayNews.length} свежих материалов
        </p>
      </section>

      {/* Hero: featured + 2 side cards */}
      <section aria-label="Главные новости" className="mb-8 sm:mb-10 lg:mb-12">
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {/* Featured - занимает 2 колонки */}
          {featured && (
            <div className="lg:col-span-2">
              <NewsCard article={featured} variant="feature" />
            </div>
          )}
          {/* 2 карточки справа */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1 lg:gap-5">
            {todayNews.slice(0, 2).map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Все материалы */}
      <section className="mb-8 sm:mb-10 lg:mb-12">
        <h2
          className="mb-3 text-xl font-bold leading-[1.3] text-ink sm:mb-4 sm:text-2xl lg:text-[28px]"
          style={{ letterSpacing: '-0.8px' }}
        >
          Все материалы
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {news
            .filter((a) => a.slug !== featured?.slug && !todayNews.slice(0, 2).some((t) => t.slug === a.slug))
            .map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
        </div>
      </section>

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
