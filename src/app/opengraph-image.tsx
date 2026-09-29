import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export const alt = 'ExSun Crypto News — Главное из мира криптовалют за 24 часа';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(122deg, #ff9a51 0%, #fd7043 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              background: 'linear-gradient(135deg, #FA9C59, #FD7043)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <div style={{ fontSize: 36, fontWeight: 800, color: 'white' }}>
            ExSun Crypto News
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: 1000,
          }}
        >
          Главное из мира криптовалют за 24 часа
        </div>
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.85)',
            marginTop: 24,
          }}
        >
          Bitcoin · Ethereum · Stablecoins · DeFi · Регулирование
        </div>
      </div>
    ),
    { ...size }
  );
}
