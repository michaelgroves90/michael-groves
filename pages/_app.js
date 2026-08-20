import Layout from '../components/layouts/main'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Analytics />
    </Layout>
  )
}

export default Website
