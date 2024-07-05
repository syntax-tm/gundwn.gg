import type { Metadata, Viewport } from 'next';
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./globals.css";
import Head from 'next/head';

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Trey | Social, Games, and More Links',
  description: 'Profiles for gaming, social media, development, and more.',
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="keywords" content={'gundwn, gundwn.gg, steam, xbox, syntax-tm, github, git, xmb, links, social, profile, games'} />
        <meta name="twitter:site" content="@gundwnsrc" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
