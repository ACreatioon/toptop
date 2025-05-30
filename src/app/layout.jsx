import { Poppins, Lexend } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = Poppins({
  variable: "--font-family-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

const fontLogo = Lexend({
  variable: "--font-family-logo",
  subsets: ["latin"],
})

export const metadata = {
  title: "TopTop",
  description: "Welcome to TopTop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(fontSans.variable, fontLogo.variable)}>
      <body
        className={'antialiased bg-neutral-900'}
      >
        {children}
      </body>
    </html>
  );
}
