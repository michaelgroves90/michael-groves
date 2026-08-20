import { motion } from 'framer-motion'
import Head from 'next/head'

const variants = {
  hidden: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 12 }
}

const Layout = ({ children, title }) => {
  const t = title ? `${title} — Michael Groves` : 'Michael Groves — Software engineer'
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <Head>
        <title>{t}</title>
        <meta name="twitter:title" content={t} />
        <meta property="og:title" content={t} />
      </Head>
      <div className="page">{children}</div>
    </motion.article>
  )
}

export default Layout
