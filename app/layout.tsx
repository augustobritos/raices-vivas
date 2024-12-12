import Footer from '@/components/footer/footer';
import { Navbar } from '@/components/navbar/navbar';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { cn } from '@/lib/utils';
import { Inter, Merriweather } from 'next/font/google';
import React from 'react';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          merriweather.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}