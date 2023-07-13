import { ReactElement } from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import Head from "next/head";

interface MainLayoutProps {
  children: ReactElement | ReactElement[];
  title: string;
  description?: string;
}

export function MainLayout({
  children,
  title,
  description = "Using digital innovation to strengthen our faith and serve communities around the globe",
}: MainLayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${title} | Hussain's Ark of Salvation`}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content="Hussain's Ark of Salvation" />
        <meta
          name="og:image"
          content="https://hussainsark.com/assets/harks-logo-circle-yellow-bg.png"
        />
        <meta name="og:description" content={description} />

        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
}
