import Head from 'next/head'
import NavBar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <div className="site-shell">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Michael Groves — software engineer. Java, Scala, Kubernetes. Former songwriter."
        />
        <meta name="author" content="Michael Groves" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="twitter:title" content="Michael Groves" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Michael Groves" />
        <meta name="og:title" content="Michael Groves" />
        <meta property="og:type" content="website" />
        <title>Michael Groves — Software engineer</title>
      </Head>

      <NavBar path={router.asPath} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Main
