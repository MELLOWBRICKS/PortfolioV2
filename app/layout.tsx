import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/app/globals.css"; // Ensure correct path

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PortfoliOS",
  description: "Welcome to Linux based portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo.png"
          type="image/x-icon"
        />
      </head>
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  );
}
