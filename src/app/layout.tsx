import { variable } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { imgBaseUrl } from "@/lib/constants";

import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL(imgBaseUrl),
  title: "Tran Tien | Tiesen243",
  description: "I'm a wibu developer from Vietnam.",
  openGraph: {
    title: "Tran Tien | Tiesen243",
    description: "I'm a wibu developer from Vietnam.",
    type: "profile",
    url: "https://tiesen.id.vn",
    siteName: "Tran Tien | Tiesen243",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
        alt: "tiesen243",
      },
    ],
  },
  twitter: {
    site: "@tiesen243",
    title: "Tran Tien | Tiesen243",
    description: "I'm a wibu developer from Vietnam.",
    card: "summary_large_image",
    creator: "tiesen243",
    images: "/logo.png",
  },
};

import "./globals.css";
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          variable,
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
