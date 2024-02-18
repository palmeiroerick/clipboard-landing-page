import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Clipboard Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={baiJamjuree.className}>
      <body>{children}</body>
    </html>
  );
}
