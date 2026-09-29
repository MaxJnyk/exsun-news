import { ImageResponse } from 'next/og';

import { getNewsBySlug, news } from '@/data/news';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export const alt = 'ExSun Crypto News';

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(122deg, #ff9a51 0%, #fd7043 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 64,
            fontWeight: 800,
          }}
        >
          ExSun Crypto News
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(122deg, #ffe1ba 0%, #ffd0bd 52%, #fac8b5 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: 'linear-gradient(135deg, #FA9C59, #FD7043)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 800, color: '#20253c' }}>
            ExSun Crypto News
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {article.tags.map((tag: string) => (
            <div
              key={tag}
              style={{
                background: 'rgba(255,255,255,0.6)',
                borderRadius: 999,
                padding: '8px 20px',
                fontSize: 22,
                fontWeight: 600,
                color: '#d46641',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: '#20253c',
            lineHeight: 1.2,
            maxWidth: 1000,
          }}
        >
          {article.title}
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#777987',
            lineHeight: 1.5,
            maxWidth: 900,
          }}
        >
          {article.summary}
        </div>
      </div>
    ),
    { ...size }
  );
}
