import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';

import Navbar from '@/components/Navbar';

const redHat = Red_Hat_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StudySync',
  description: 'A social media app to share educational resources with your friends.',
}

type AppLayoutProps = {
  children: React.ReactNode
}
export default function AppLayout(props: AppLayoutProps) {
  return (
    <html lang="en">
      <body className={redHat.className}>
        <Navbar />
        {props.children}
      </body>
    </html>
  );
}
