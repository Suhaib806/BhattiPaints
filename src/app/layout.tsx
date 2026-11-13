import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhatti Paints (Pvt.) Ltd. | Architectural Paint & Colour, Since 1972",
  description:
    "Explore architectural paint solutions, interior and exterior finishes, and curated colour inspiration from Bhatti Paints (Pvt.) Ltd., established in Bahawalpur, Pakistan, in 1972.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#FAF8F5] text-[#161514] font-sans antialiased selection:bg-[#C8283C] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
