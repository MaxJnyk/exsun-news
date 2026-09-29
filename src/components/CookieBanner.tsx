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
      <div className="mx-auto flex max-w-[1248px] flex-col items-start gap-4 rounded-[20px] bg-white p-5 shadow-card sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
        <p className="text-sm leading-relaxed text-ink">
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
        <div className="flex w-full shrink-0 gap-2 sm:w-auto">
          <button
            onClick={() => setConsent('declined')}
            className="flex-1 rounded-[12px] border border-line px-5 py-2.5 text-sm font-semibold text-muted transition-colors hover:bg-paper sm:flex-none"
          >
            Отклонить
          </button>
          <button
            onClick={() => setConsent('accepted')}
            className="flex-1 rounded-[12px] bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-bright sm:flex-none"
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
