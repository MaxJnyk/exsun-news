import type { Metadata } from 'next';
import Link from 'next/link';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { NewsCard } from '@/components/NewsCard';
import { TagPill } from '@/components/TagPill';
import { allTags, news } from '@/data/news';

export const metadata: Metadata = {
  title: 'Все новости',
  description:
    'Архив публикаций ExSun Crypto News — все материалы по криптовалютам в хронологическом порядке.',
  alternates: { canonical: 'https://news.exsun.net/news' },
};

const PER_PAGE = 9;
const baseUrl = 'https://news.exsun.net';

export default async function NewsArchivePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? '1', 10) || 1);
  const totalPages = Math.ceil(news.length / PER_PAGE);
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const pageNews = news.slice(start, start + PER_PAGE);

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: pageNews.map((article, i) => ({
      '@type': 'ListItem',
      position: start + i + 1,
      url: `${baseUrl}/news/${article.slug}`,
      name: article.title,
    })),
  };

  const collectionPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Все новости',
    url: `${baseUrl}/news`,
    inLanguage: 'ru-RU',
    isPartOf: {
      '@type': 'WebSite',
      name: 'ExSun Crypto News',
      url: baseUrl,
    },
  };

  return (
    <div className="mx-auto max-w-[1248px] px-4 py-8 sm:px-5 sm:py-12 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Все новости' },
        ]}
      />

      <section className="mb-6 mt-4 sm:mb-8 sm:mt-6">
        <p className="mb-2 text-[10px] font-extrabold uppercase text-[#9b523f] sm:mb-3.5 sm:text-xs" style={{ letterSpacing: '1.7px' }}>
          ExSun Crypto News
        </p>
        <h1 className="mb-3 text-2xl font-extrabold leading-[1.2] text-ink sm:mb-4 sm:text-3xl lg:text-[40px]" style={{ letterSpacing: '-1.4px' }}>
          Все новости
        </h1>
        <p className="text-xs text-muted sm:text-sm lg:text-base">
          Архив публикаций · {news.length} материалов
        </p>
      </section>

      {/* Tag filters */}
      <nav
        id="topics"
        className="mb-6 flex gap-2 overflow-x-auto pb-2 sm:mb-8 sm:flex-wrap sm:overflow-visible sm:pb-0"
        aria-label="Фильтры по темам"
      >
        <span className="inline-block shrink-0 whitespace-nowrap rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
          Все
        </span>
        {allTags.map((tag) => (
          <span key={tag} className="shrink-0">
            <TagPill tag={tag} />
          </span>
        ))}
      </nav>

      {/* News grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {pageNews.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:mt-10 sm:gap-2" aria-label="Пагинация">
          {currentPage > 1 && (
            <Link
              href={`/news${currentPage === 2 ? '' : `?page=${currentPage - 1}`}`}
              className="rounded-[10px] border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-orange hover:text-orange sm:rounded-[12px] sm:px-4 sm:py-2 sm:text-sm"
            >
              ← Назад
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`/news${p === 1 ? '' : `?page=${p}`}`}
              className={`rounded-[10px] px-3 py-1.5 text-xs font-semibold transition-colors sm:rounded-[12px] sm:px-4 sm:py-2 sm:text-sm ${
                p === currentPage
                  ? 'bg-orange text-white'
                  : 'border border-line bg-white text-ink hover:border-orange hover:text-orange'
              }`}
            >
              {p}
            </Link>
          ))}
          {currentPage < totalPages && (
            <Link
              href={`/news?page=${currentPage + 1}`}
              className="rounded-[10px] border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-orange hover:text-orange sm:rounded-[12px] sm:px-4 sm:py-2 sm:text-sm"
            >
              Вперёд →
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
