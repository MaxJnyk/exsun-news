import Image from 'next/image';
import Link from 'next/link';

import type { NewsArticle } from '@/data/news';
import { getReadingTime } from '@/data/news';

import { TagIcon } from './TagIcon';
import { TagPill } from './TagPill';

type Variant = 'feature' | 'standard' | 'compact';

interface NewsCardProps {
  article: NewsArticle;
  variant?: Variant;
}

export function NewsCard({ article, variant = 'standard' }: NewsCardProps) {
  const href = `/news/${article.slug}`;
  const readingTime = getReadingTime(article);

  if (variant === 'feature') {
    return (
      <article className="group overflow-hidden rounded-[24px] bg-white shadow-soft transition-shadow hover:shadow-card">
        <Link href={href} className="block">
          <div className="relative aspect-[2/1] overflow-hidden">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="p-6 sm:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5">
                <TagIcon tag={tag} />
                <TagPill tag={tag} />
              </span>
            ))}
          </div>
          <h2 className="mb-3 text-2xl font-extrabold leading-[1.2] text-ink sm:text-3xl lg:text-[40px]" style={{ letterSpacing: '-0.8px' }}>
            <Link href={href} className="transition-colors hover:text-orange">
              {article.title}
            </Link>
          </h2>
          <p className="mb-4 max-w-[440px] text-base leading-[1.65] text-muted">{article.summary}</p>
          <div className="flex items-center gap-3 text-sm text-muted">
            <span>{article.date}</span>
            <span>·</span>
            <span>{readingTime} мин чтения</span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="flex gap-4 rounded-[20px] bg-white p-5 shadow-soft transition-shadow hover:shadow-card sm:gap-5 sm:p-6">
        <Link href={href} className="shrink-0">
          <div className="relative h-[100px] w-[160px] overflow-hidden rounded-[14px]">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              sizes="160px"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5">
                <TagIcon tag={tag} />
                <TagPill tag={tag} />
              </span>
            ))}
          </div>
          <h3 className="mb-2 text-lg font-bold leading-[1.35] text-ink sm:text-xl" style={{ letterSpacing: '-0.6px' }}>
            <Link href={href} className="transition-colors hover:text-orange">
              {article.title}
            </Link>
          </h3>
          <p className="mb-2 text-sm leading-[1.6] text-muted line-clamp-2 sm:text-[15px]">{article.summary}</p>
          <div className="flex items-center gap-2 text-xs text-muted sm:text-sm">
            <span>{article.date}</span>
            <span>·</span>
            <span>{readingTime} мин</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-[20px] bg-white shadow-soft transition-shadow hover:shadow-card">
      <Link href={href} className="block">
        <div className="relative aspect-[2/1] overflow-hidden">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1.5">
              <TagIcon tag={tag} size={14} />
              <TagPill tag={tag} />
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-xl font-bold leading-[1.38] text-ink sm:text-2xl" style={{ letterSpacing: '-0.55px' }}>
          <Link href={href} className="transition-colors hover:text-orange">
            {article.title}
          </Link>
        </h3>
        <p className="mb-3 text-base leading-relaxed text-muted line-clamp-2">{article.summary}</p>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>{article.date}</span>
          <span>·</span>
          <span>{readingTime} мин чтения</span>
        </div>
      </div>
    </article>
  );
}
