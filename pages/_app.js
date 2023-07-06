import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/main.css'
import { Analytics } from '@vercel/analytics/react'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <Component {...pageProps} />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V4SQL39NNY"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-V4SQL39NNY');
        `}
      </Script>
      <Analytics />
    </>
  )
}
