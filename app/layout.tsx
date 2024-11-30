import React from 'react';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Inter, Merriweather } from 'next/font/google';
import { cn } from '@/lib/utils';
import { DESIGN_SYSTEM } from './lib/constants';
import "./globals.css";
import { Navbar } from '@/components/navbar/navbar';

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
          'min-h-screen bg-background antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main style={{
            fontFamily: DESIGN_SYSTEM.typography.fontFamily.primary,
            backgroundColor: 'var(--background)',
            color: 'var(--foreground)'
          }}>
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}