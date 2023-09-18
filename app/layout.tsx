import './globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Inter } from 'next/font/google';
import { QueryClientProvider, RecoilProvider } from '@/provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider>
      <RecoilProvider>
        <html lang="en">
          <head>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="IdeaOceanKR" />
            <meta property="og:description" content="Intelligent Design Automation (IDEA)" />
            <meta property="og:image" content="/company-logo.png" />
          </head>
          <body className={inter.className}>{children}</body>
        </html>
      </RecoilProvider>
    </QueryClientProvider>
  );
}
