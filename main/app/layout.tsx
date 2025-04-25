import type { Metadata } from "next";
import { Inter, Nokora } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nokora = Nokora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nokora",
});

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
    <html lang="en" className={`${inter.variable} ${nokora.variable}`}>
      <body className="min-h-screen flex flex-col justify-between w-full lg:max-w-screen-lg lg:mx-auto font-nokora">
        <main className="flex flex-col items-start w-full lg:max-w-screen-lg lg:mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// footer

function Footer() {
  const links = [
    { name: '@michaelmccrae', url: 'https://x.com/michaelmccrae' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/michaelallanmccrae/' },
    { name: 'github', url: 'https://github.com/michaelmccrae' }
  ];

  return (
    <footer className="mt-12 text-center footer-links">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
