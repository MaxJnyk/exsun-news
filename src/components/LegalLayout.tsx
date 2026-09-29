import type { ReactNode } from 'react';

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <div className="mx-auto max-w-[800px] px-5 py-12 lg:px-8">
      <p
        className="mb-3.5 text-xs font-extrabold uppercase text-[#9b523f]"
        style={{ letterSpacing: '1.7px' }}
      >
        ExSun Crypto News
      </p>
      <h1
        className="mb-4 text-3xl font-extrabold leading-[1.2] text-ink sm:text-[40px]"
        style={{ letterSpacing: '-1.4px' }}
      >
        {title}
      </h1>
      <p className="mb-8 text-sm text-muted">Редакция от {updated}</p>
      <div className="legal-content space-y-4 text-base leading-[1.75] text-ink">
        {children}
      </div>
    </div>
  );
}
