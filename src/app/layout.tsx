import type { Metadata } from 'next';
import './globals.css';
import './font.css';

import ThemeProviderWrapper from '@/components/common/ThemeProviderWrapper';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

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
        <Header />
        <ThemeProviderWrapper>
          <main className='pt-20'>{children}</main>
        </ThemeProviderWrapper>
        <Footer/>
      </body>
    </html>
  );
}
