import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ExSun Crypto News',
    short_name: 'ExSun News',
    description:
      'Главное из мира криптовалют за 24 часа. Ключевые новости Bitcoin, Ethereum, стейблкоинов, регулирования и DeFi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f8fa',
    theme_color: '#ff9a51',
    lang: 'ru',
    categories: ['news'],
    icons: [
      {
        src: '/icon.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
