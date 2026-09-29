'use client';

import { useState } from 'react';

import { NewsCard } from '@/components/NewsCard';
import { searchNews } from '@/data/news';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReturnType<typeof searchNews>>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setResults(searchNews(query));
    setSearched(true);
  };

  return (
    <div className="mx-auto max-w-[1248px] px-5 py-12 lg:px-8">
      <section className="mb-8">
        <p className="mb-3.5 text-xs font-extrabold uppercase text-[#9b523f]" style={{ letterSpacing: '1.7px' }}>
          ExSun Crypto News
        </p>
        <h1 className="mb-6 text-3xl font-extrabold leading-[1.2] text-ink sm:text-[40px]" style={{ letterSpacing: '-1.4px' }}>
          Поиск
        </h1>
        <form onSubmit={handleSearch} className="flex gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Введите запрос..."
            className="flex-1 rounded-[14px] border border-line bg-white px-5 py-3 text-base text-ink outline-none transition-colors focus:border-orange"
            aria-label="Поиск"
          />
          <button
            type="submit"
            className="rounded-[14px] bg-orange px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Найти
          </button>
        </form>
      </section>

      {searched && (
        <div>
          <p className="mb-5 text-sm text-muted">
            {results.length > 0
              ? `Найдено: ${results.length}`
              : 'Ничего не найдено'}
          </p>
          {results.length > 0 && (
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {results.map((article) => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
