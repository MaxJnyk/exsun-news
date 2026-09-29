'use client';

import { useSyncExternalStore } from 'react';

import Link from 'next/link';

const STORAGE_KEY = 'cookie-consent-exsun-news';

function getConsent(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEY);
}

function subscribe(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribe,
    getConsent,
    () => null,
  );

  if (consent) return null;

  const setConsent = (value: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-[1248px] rounded-[20px] bg-white p-5 shadow-card sm:p-6">
        <p className="mb-4 text-sm leading-relaxed text-ink">
          Мы используем файлы cookie для корректной работы сайта. Подробнее в{' '}
          <Link href="/cookie-policy" className="font-semibold text-orange hover:underline">
            Политике cookie
          </Link>{' '}
          и{' '}
          <Link href="/privacy" className="font-semibold text-orange hover:underline">
            Политике конфиденциальности
          </Link>
          .
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            onClick={() => setConsent('declined')}
            className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-muted transition-colors hover:bg-page-bg"
          >
            Отклонить
          </button>
          <button
            onClick={() => setConsent('accepted')}
            className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
