import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaBlock } from '@/components/CtaBlock';
import { NewsCard } from '@/components/NewsCard';
import { ShareButtons } from '@/components/ShareButtons';
import { TagIcon } from '@/components/TagIcon';
import { TagPill } from '@/components/TagPill';
import { getNewsBySlug, getReadingTime, getRelatedNews, news } from '@/data/news';

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<'/news/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getNewsBySlug(slug);
  const baseUrl = 'https://news.exsun.net';

  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      locale: 'ru_RU',
      url: `${baseUrl}/news/${article.slug}`,
      publishedTime: article.date.split('.').reverse().join('-'),
      authors: [article.author],
      tags: article.tags,
      images: [article.cover],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: [article.cover],
    },
  };
}

export default async function NewsStoryPage(props: PageProps<'/news/[slug]'>) {
  const { slug } = await props.params;
  const article = getNewsBySlug(slug);

  if (!article) notFound();

  const related = getRelatedNews(article);
  const readingTime = getReadingTime(article);
  const baseUrl = 'https://news.exsun.net';
  const articleUrl = `${baseUrl}/news/${article.slug}`;
  const datePublished = article.date.split('.').reverse().join('-');

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.summary,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ExSun Crypto News',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    image: [`${baseUrl}${article.cover}`],
    articleSection: article.tags.join(', '),
    inLanguage: 'ru-RU',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'article > p:first-of-type'],
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Все новости',
        item: `${baseUrl}/news`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[1248px] px-4 py-6 sm:px-5 sm:py-8 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <article className="mx-auto max-w-[800px]">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Все новости', href: '/news' },
            { label: article.title },
          ]}
        />

        {/* Top: tags + date + reading time */}
        <div className="mb-2 flex flex-wrap items-center gap-1.5 sm:mb-3 sm:gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1">
              <TagIcon tag={tag} />
              <TagPill tag={tag} />
            </span>
          ))}
        </div>
        <div className="mb-3 flex flex-wrap items-center gap-1.5 text-xs text-muted sm:mb-4 sm:gap-2 sm:text-sm">
          <span>{readingTime} мин чтения</span>
          <span>·</span>
          <span>{article.author}</span>
        </div>

        {/* Title + lead */}
        <h1 className="mb-3 text-2xl font-extrabold leading-[1.2] text-ink sm:mb-4 sm:text-3xl lg:text-[40px]" style={{ letterSpacing: '-1.4px' }}>
          {article.title}
        </h1>
        <p className="mb-5 text-base leading-[1.65] text-muted sm:mb-6 sm:text-lg">{article.summary}</p>

        {/* Cover image */}
        <div className="relative mb-6 aspect-[2/1] overflow-hidden rounded-[16px] sm:mb-8 sm:rounded-[20px]">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* Body */}
        <div className="space-y-4 sm:space-y-5">
          {article.content.map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={i} className="pt-3 text-xl font-bold leading-[1.3] text-ink sm:pt-4 sm:text-2xl lg:text-[26px]" style={{ letterSpacing: '-0.6px' }}>
                  {paragraph.slice(3)}
                </h2>
              );
            }
            return (
              <p key={i} className="text-[15px] leading-[1.7] text-ink sm:text-base sm:leading-[1.65]">{paragraph}</p>
            );
          })}
        </div>

        {/* Share buttons */}
        <div className="mt-8 border-t border-line pt-6">
          <ShareButtons title={article.title} slug={article.slug} />
        </div>

        {/* CTA */}
        <CtaBlock variant="article" />

        {/* Source */}
        <div className="mt-6">
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted transition-colors hover:text-orange"
          >
            Источник: {article.source} →
          </a>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-8 sm:mt-12">
          <h2 className="mb-4 text-xl font-bold leading-[1.3] text-ink sm:mb-5 sm:text-2xl lg:text-[28px]" style={{ letterSpacing: '-0.8px' }}>
            Ещё по теме
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {related.map((rel) => (
              <NewsCard key={rel.slug} article={rel} />
            ))}
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="mt-10">
        <Link
          href="/news"
          className="text-sm font-bold text-orange transition-colors hover:text-orange-bright"
        >
          ← Все новости
        </Link>
      </div>
    </div>
  );
}
