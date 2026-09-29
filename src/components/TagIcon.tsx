import type { NewsTag } from '@/data/news';

const tagColors: Record<NewsTag, string> = {
  Bitcoin: '#f7931a',
  Stablecoins: '#25b54c',
  Биржи: '#1da0ff',
  Регулирование: '#9b523f',
  Безопасность: '#fe696e',
  Обмен: '#ff794b',
  Налоги: '#5b21b6',
  Аналитика: '#0891b2',
};

export function TagIcon({ tag, size = 8 }: { tag: NewsTag; size?: number }) {
  const color = tagColors[tag];
  return (
    <span
      className="inline-block shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
      aria-hidden
    />
  );
}
