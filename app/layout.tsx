import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hussain's Ark of Salvation",
  description: "Welcome to Next.js",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XQL7DBF32L"></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
