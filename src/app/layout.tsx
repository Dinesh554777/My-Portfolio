import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dinesh D | Developer Portfolio',
  description: 'Full Stack Developer and GenAI enthusiast crafting immersive experiences.',
  keywords: ['Dinesh D', 'Full Stack Developer', 'GenAI Developer', 'FastAPI', 'React'],
  openGraph: {
    title: 'Dinesh D | Developer Portfolio',
    description: 'Full Stack Developer and GenAI enthusiast crafting immersive experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
