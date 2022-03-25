// https://nextjs.org/docs/advanced-features/custom-document
// This file is only rendered on the server, so event handlers like onClick cannot be used

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="true" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto&display=swap' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
