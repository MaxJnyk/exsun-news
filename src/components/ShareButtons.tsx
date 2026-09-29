'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://news.exsun.net/news/${slug}`;

  const share = (platform: 'telegram' | 'vk') => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`, '_blank');
    } else {
      window.open(`https://vk.com/share.php?url=${encodedUrl}&title=${encodedTitle}`, '_blank');
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-muted">Поделиться:</span>
      <button
        onClick={() => share('telegram')}
        className="rounded-[10px] bg-[#f0f0f4] px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-[#e5e5ea]"
        aria-label="Поделиться в Telegram"
      >
        Telegram
      </button>
      <button
        onClick={() => share('vk')}
        className="rounded-[10px] bg-[#f0f0f4] px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-[#e5e5ea]"
        aria-label="Поделиться ВКонтакте"
      >
        VK
      </button>
      <button
        onClick={copyLink}
        className="rounded-[10px] bg-[#f0f0f4] px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-[#e5e5ea]"
        aria-label="Копировать ссылку"
      >
        {copied ? '✓ Скопировано' : 'Скопировать'}
      </button>
    </div>
  );
}
