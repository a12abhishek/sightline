import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sightline",
  description: "Geospatial infrastructure intelligence platform",
  robots: "noindex, nofollow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
