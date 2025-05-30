import './globals.css';
import { cn } from '@/lib/utils';
import { Poppins, Permanent_Marker } from 'next/font/google';

const fontSans = Poppins({
  variable: '--font-family-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const fontLogo = Permanent_Marker({
  variable: '--font-family-logo',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'IdleTop',
  description: 'Welcome to TopTop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(fontSans.variable, fontLogo.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
