import type { Metadata } from 'next';

import { LegalLayout } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Политика использования cookie',
  description:
    'Политика использования файлов cookie сайтом ExSun Crypto News — какие cookie используются и как ими управлять.',
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Политика использования cookie" updated="28.09.2026">
      <p>
        Настоящая Политика использования cookie (далее — «Политика») описывает, как сайт news.exsun.net
        (далее — «Сайт») использует файлы cookie и как пользователь может управлять ими.
      </p>

      <h2 className="text-xl font-bold">1. Что такое cookie</h2>
      <p>
        Cookie — это небольшие текстовые файлы, которые сохраняются в браузере пользователя при
        посещении веб-сайтов. Cookie позволяют Сайту запоминать действия пользователя и
        предпочтения.
      </p>

      <h2 className="text-xl font-bold">2. Какие cookie использует Сайт</h2>
      <p>Сайт использует следующие категории cookie:</p>

      <h3 className="text-lg font-semibold">2.1. Необходимые (обязательные)</h3>
      <p>
        Обеспечивают базовую работу Сайта. Без них некоторые функции будут недоступны. Эти cookie не
        требуют согласия пользователя.
      </p>
      <ul className="list-disc pl-6">
        <li>запоминание факта принятия Политики cookie;</li>
        <li>сохранение настроек отображения.</li>
      </ul>

      <h3 className="text-lg font-semibold">2.2. Функциональные</h3>
      <p>
        Запоминают пользовательские настройки и предпочтения для удобства работы с Сайтом.
      </p>

      <h2 className="text-xl font-bold">3. Срок хранения cookie</h2>
      <p>
        Cookie могут быть двух типов по сроку хранения:
      </p>
      <ul className="list-disc pl-6">
        <li>
          <strong>Сессионные</strong> — удаляются после закрытия браузера.
        </li>
        <li>
          <strong>Постоянные</strong> — хранятся в браузере до истечения срока действия или до
          ручного удаления.
        </li>
      </ul>

      <h2 className="text-xl font-bold">4. Управление cookie</h2>
      <p>
        Пользователь может управлять использованием cookie через настройки своего браузера. Большинство
        браузеров позволяют:
      </p>
      <ul className="list-disc pl-6">
        <li>принимать все cookie;</li>
        <li>блокировать все cookie;</li>
        <li>принимать cookie только от посещаемых сайтов;</li>
        <li>удалять сохранённые cookie.</li>
      </ul>
      <p>
        Отключение cookie может повлиять на работу некоторых функций Сайта.
      </p>

      <h2 className="text-xl font-bold">5. Согласие на использование cookie</h2>
      <p>
        При первом посещении Сайта пользователю показывается уведомление об использовании cookie.
        Продолжая использование Сайта, пользователь даёт согласие на использование cookie в
        соответствии с настоящей Политикой. Пользователь может отозвать согласие в любой момент,
        удалив cookie в настройках браузера.
      </p>

      <h2 className="text-xl font-bold">6. Изменение Политики</h2>
      <p>
        Администрация Сайта вправе изменять настоящую Политику. Актуальная редакция размещается на
        этой странице.
      </p>

      <h2 className="text-xl font-bold">7. Контактная информация</h2>
      <p>
        По вопросам использования cookie:{' '}
        <a href="mailto:privacy@exsun.net" className="text-orange hover:underline">
          privacy@exsun.net
        </a>
      </p>
    </LegalLayout>
  );
}
