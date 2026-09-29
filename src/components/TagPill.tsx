import Link from 'next/link';

import type { NewsTag } from '@/data/news';

interface TagPillProps {
  tag: NewsTag;
  active?: boolean;
}

export function TagPill({ tag, active = false }: TagPillProps) {
  return (
    <Link
      href={`/tag/${tag}`}
      className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
        active
          ? 'bg-orange text-white'
          : 'bg-[#f0f0f4] text-ink hover:bg-orange-soft hover:text-orange'
      }`}
    >
      {tag}
    </Link>
  );
}
