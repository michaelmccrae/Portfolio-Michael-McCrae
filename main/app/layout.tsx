import type { Metadata } from "next";
import { Inter, Nokora } from 'next/font/google';
import "./globals.css";
import Testimonial from './components/testimonials'
// import Script from "next/script" // for reCaptcha
import { Analytics } from '@vercel/analytics/next';

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
  verification: {
    google: 'google-site-verification=ke912xczEwS6QpHMGM0dR56Our0jqtrgz1Vcj9vJN8I',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${nokora.variable}`}>
      <body className="min-h-screen flex flex-col justify-between w-full lg:max-w-screen-xl lg:mx-auto font-nokora">
        <main className="">
          {children}
        </main>
        <Testimonial />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

// footer
function Footer() {
  const links = [
    { name: '@michaelmccrae', url: 'https://x.com/michaelmccrae' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/michaelallanmccrae/' },
    { name: 'github', url: 'https://github.com/michaelmccrae' },
    { name: 'contact', url: '/contact'}
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="footer-links">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}