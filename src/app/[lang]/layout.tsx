import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { Locale, i18n } from "@/i18n.config";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slate Hayes",
  description: "Resume",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
