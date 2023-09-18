import './globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { QueryClientProvider, RecoilProvider } from '@/provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider>
      <RecoilProvider>
        <html lang="en">
          <head>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="zkPoR" />
            <meta
              property="og:description"
              content="고속 영지식 증명을 통해 당신의 자산이 확실하게 지켜지고 있음을 확인하세요!"
            />
            <meta property="og:image" content="/company-logo.png" />
          </head>
          <body>{children}</body>
        </html>
      </RecoilProvider>
    </QueryClientProvider>
  );
}
