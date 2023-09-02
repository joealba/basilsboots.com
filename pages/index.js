import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Basil's Boots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Basil's Boots!" />
        <p className="description">
          <a href="https://www.facebook.com/basilsboots">See my work on Facebook</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
