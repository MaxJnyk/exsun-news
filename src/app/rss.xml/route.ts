import { news } from '@/data/news';

const SITE_URL = 'https://news.exsun.net';

export async function GET() {
  const newsList = news;

  const items = newsList
    .map((article) => {
      const url = `${SITE_URL}/news/${article.slug}`;
      const pubDate = new Date(article.date.split('.').reverse().join('-')).toUTCString();
      const plainText = article.content
        .map((p) => p.replace(/[#*`]/g, ''))
        .join(' ')
        .slice(0, 500);

      return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${article.summary}]]></description>
      <content:encoded><![CDATA[<p>${plainText}...</p>]]></content:encoded>
      <author>partner@exsun.net (Редакция ExSun Crypto News)</author>
      <category>${article.tags.join(', ')}</category>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ExSun Crypto News</title>
    <link>${SITE_URL}</link>
    <description>Главное из мира криптовалют: новости, аналитика, события рынка.</description>
    <language>ru</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
