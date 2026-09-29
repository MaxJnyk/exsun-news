import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { NewsCard } from '@/components/NewsCard';
import { TagPill } from '@/components/TagPill';
import { allTags, getNewsByTag, type NewsTag } from '@/data/news';

export function generateStaticParams() {
  return allTags.map((tag) => ({ tag }));
}

export async function generateMetadata(
  props: PageProps<'/tag/[tag]'>
): Promise<Metadata> {
  const { tag: rawTag } = await props.params;
  const tag = decodeURIComponent(rawTag);
  return {
    title: `${tag}`,
    description: `Материалы по теме ${tag} — ExSun Crypto News`,
  };
}

export default async function TagPage(props: PageProps<'/tag/[tag]'>) {
  const { tag: rawTag } = await props.params;
  const tag = decodeURIComponent(rawTag) as NewsTag;
  const articles = getNewsByTag(tag);

  if (articles.length === 0) notFound();

  return (
    <div className="mx-auto max-w-[1248px] px-5 py-12 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Главная', href: '/' },
          { label: 'Все новости', href: '/news' },
          { label: tag },
        ]}
      />

      <section className="mb-8 mt-6">
        <p className="mb-3.5 text-xs font-extrabold uppercase text-[#9b523f]" style={{ letterSpacing: '1.7px' }}>
          ExSun Crypto News
        </p>
        <h1 className="mb-4 text-3xl font-extrabold leading-[1.2] text-ink sm:text-[40px]" style={{ letterSpacing: '-1.4px' }}>
          {tag}
        </h1>
        <p className="text-sm text-muted sm:text-base">Материалы по теме {tag}</p>
      </section>

      {/* Tag filters */}
      <nav
        className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0"
        aria-label="Фильтры по темам"
      >
        {allTags.map((t) => (
          <span key={t} className="shrink-0">
            <TagPill tag={t} active={t === tag} />
          </span>
        ))}
      </nav>

      {/* News */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {articles.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
