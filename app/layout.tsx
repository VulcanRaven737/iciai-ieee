import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ICIAI-2026 | International Conference on Interdisciplinary AI',
  description: 'Join the International Conference on Interdisciplinary AI (ICIAI-2026) at PES University, Bengaluru. Explore cutting-edge AI research across multiple engineering domains.',
  keywords: ['AI', 'Machine Learning', 'Conference', 'IEEE', 'PES University', 'Interdisciplinary AI'],
  authors: [{ name: 'ICIAI-2026 Organizing Committee' }],
  openGraph: {
    title: 'ICIAI-2026 | International Conference on Interdisciplinary AI',
    description: 'Join the International Conference on Interdisciplinary AI (ICIAI-2026) at PES University, Bengaluru.',
    url: 'https://iciai2026.org',
    siteName: 'ICIAI-2026',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICIAI-2026 | International Conference on Interdisciplinary AI',
    description: 'Join the International Conference on Interdisciplinary AI (ICIAI-2026) at PES University, Bengaluru.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}