import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Michael McCrae",
  description:
    "Michael's McCrae portofolio site. Michael is a media leader with 20+ years of experience uncovering emerging trends, coordinating teams and driving revenue growth. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-start w-full lg:max-w-screen-lg lg:mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

