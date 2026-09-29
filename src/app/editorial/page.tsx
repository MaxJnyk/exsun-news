import type { Metadata } from 'next';

import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Редакционная политика — ExSun Crypto News',
  description:
    'Принципы редакции ExSun Crypto News: проверка фактов, маркировка, отношение к рекламе и исправлениям.',
  alternates: { canonical: 'https://news.exsun.net/editorial' },
  openGraph: {
    title: 'Редакционная политика — ExSun Crypto News',
    description: 'Принципы редакции ExSun Crypto News.',
    url: 'https://news.exsun.net/editorial',
  },
};

export default function EditorialPage() {
  return (
    <LegalLayout title="Редакционная политика" updated="28 сентября 2026">
      <h2 className="mb-3 text-xl font-bold">Проверка фактов</h2>
      <p>
        Каждый материал проходит проверку перед публикацией.
        Мы опираемся на первоисточники: официальные релизы,
        протоколы, заявления команд, регуляторов и бирж. Если
        информация заимствована из другого издания, мы ссылаемся
        на него.
      </p>
      <h2 className="mt-8 mb-3 text-xl font-bold">Исправления</h2>
      <p>
        Если в опубликованном материале обнаружена ошибка, мы
        вносим исправление и помечаем его в конце текста с
        указанием даты правки. Серьёзные фактические ошибки
        исправляем в кратчайший срок.
      </p>
      <h2 className="mt-8 mb-3 text-xl font-bold">Маркировка</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Новость</strong> — сообщение о событии на основе
          первоисточника.
        </li>
        <li>
          <strong>Аналитика</strong> — авторская оценка события
          или данных. Мнение автора может не совпадать с позицией
          редакции.
        </li>
        <li>
          <strong>Реклама / партнёрский материал</strong> —
          помечается явно в начале текста.
        </li>
      </ul>
      <h2 className="mt-8 mb-3 text-xl font-bold">
        Отношение к финансовым советам
      </h2>
      <p>
        ExSun Crypto News — информационный ресурс. Мы не даём
        индивидуальных инвестиционных рекомендаций, не
        консультируем по покупке или продаже криптовалют и не
        несём ответственности за решения читателя, принятые на
        основе наших публикаций.
      </p>
      <h2 className="mt-8 mb-3 text-xl font-bold">Источники</h2>
      <p>
        В каждом материале указывается источник данных. Если
        источник — стороннее издание, ссылка ведёт на оригинал.
        Если источник — официальный релиз или протокол, ссылка
        ведёт на первоисточник.
      </p>
    </LegalLayout>
  );
}
