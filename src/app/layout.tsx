import type { Metadata } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';

const fontHeadline = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-headline',
});

const fontBody = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Koeneng Hub - Youth-led. Tech-Driven. Future-Ready.',
  description:
    'Koeneng Hub: Where Youthful Energy Meets Intelligent Tech. We empower youth with cutting-edge AI and technology to solve real-world problems and shape the future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontHeadline.variable} ${fontBody.variable}`}
    >
      <body className="font-body antialiased min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
