import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  fallback: ['-apple-system', 'Open Sans', 'system-ui', 'sans-serif'],
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const baseUrl = "https://news.exsun.net";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ExSun Crypto News — Главное из мира криптовалют за 24 часа",
    template: "%s — ExSun Crypto News",
  },
  description:
    "Главное из мира криптовалют за 24 часа. Ключевые новости Bitcoin, Ethereum, стейблкоинов, регулирования и DeFi — коротко и по делу.",
  authors: [{ name: "ExSun Crypto News", url: baseUrl }],
  creator: "ExSun Crypto News",
  publisher: "ExSun Crypto News",
  applicationName: "ExSun Crypto News",
  category: "News",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${baseUrl}/rss.xml`,
    },
    languages: {
      "ru-RU": "/",
    },
  },
  openGraph: {
    title: "ExSun Crypto News — Главное из мира криптовалют за 24 часа",
    description:
      "Ключевые новости Bitcoin, Ethereum, стейблкоинов, регулирования и DeFi — коротко и по делу.",
    type: "website",
    locale: "ru_RU",
    siteName: "ExSun Crypto News",
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "ExSun Crypto News — Главное из мира криптовалют за 24 часа",
    description:
      "Ключевые новости Bitcoin, Ethereum, стейблкоинов, регулирования и DeFi — коротко и по делу.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
  other: {
    "yandex-verification": "",
    "google-site-verification": "",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff9a51",
  width: "device-width",
  initialScale: 1,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ExSun Crypto News",
  url: baseUrl,
  description: "Главное из мира криптовалют за 24 часа",
  inLanguage: "ru-RU",
  publisher: {
    "@type": "Organization",
    name: "ExSun Crypto News",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.svg`,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: baseUrl,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "article p:first-of-type"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "ExSun Crypto News",
  url: baseUrl,
  logo: `${baseUrl}/logo.svg`,
  publishingPrinciples: `${baseUrl}/editorial`,
  actionableFeedbackPolicy: `${baseUrl}/contacts`,
  diversityPolicy: `${baseUrl}/editorial`,
  email: "editor@exsun.net",
  sameAs: ["https://t.me/exsun_news"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(speakableJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
