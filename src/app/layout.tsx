import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adityaa's Portfolio",
  description: "Adityaa's Portfolio Website built with Next.js",
  icons: {
    icon: "/favicon.ico",
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
