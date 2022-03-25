// https://nextjs.org/docs/advanced-features/custom-app
// Next.js uses the App component to initialize pages.

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import Nav from '../components/Nav'
import { StateProvider } from '../context/AppContext'
import { useContext } from 'react'
import { motion } from "framer-motion"

function App({ Component, pageProps, router }) {

  return (
    <StateProvider>
      <Head>
        <title>Military Service Records</title>
        <meta name='description' content='Your source for all DD-214 related!' />
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
      </Head>

      <NextNprogress startPosition={0.3} stopDelayMs={100} height={3} showOnShallow={true} color='var(--color-brand)' />
      <Nav />

      <main className='md:pl-48 px-4 md:px-8 text-brand bg-white min-h-screen'>
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </main>
    </StateProvider>
  )
}

export default App
