import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XQL7DBF32L"
      ></Script>
      <Script id="google-analytics">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XQL7DBF32L');`}
      </Script>
      <body className="m-0 flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
