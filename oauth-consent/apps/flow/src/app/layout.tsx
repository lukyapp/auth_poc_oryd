import React, { type ReactNode, Suspense } from 'react';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.className}
    >
      <body>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
