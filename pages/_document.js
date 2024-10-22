import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Ioannis Psomadelis',
    description:
      'I am passionate about creating intuitive and user-friendly interfaces and have a proven track record of delivering high-quality solutions that meet client’s needs and enhance user experiences. Additionally, I have hands-on experience working in customer-facing roles, providing differentiated software technology solutions.',
    image: ''
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
