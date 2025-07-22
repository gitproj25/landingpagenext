import type { Metadata } from 'next';
import './globals.css';
import './font.css';

import ThemeProviderWrapper from '@/components/common/ThemeProviderWrapper';

export const metadata: Metadata = {
  title: '',
  description:
    '',
  keywords:
    '',
  authors: [{ name: 'Fedelis' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: '',
    description:
      '',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
