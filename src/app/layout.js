'use client';

import './globals.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="mn">
      <head>
        <title>Төрсөн өдрийн мэнд 💝</title>
        <meta name="description" content="Хайртай минь, танд зориулсан онцгой бэлэг" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}