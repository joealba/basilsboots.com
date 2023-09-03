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
        <div className="hero">
          <img src="/img/hero.jpg" />
        </div>
        <div className="description">
          <h3>See my work on:</h3>
          <ul>
            <li><a href="https://www.facebook.com/basilsboots">Facebook</a></li>
            <li><a href="https://www.instagram.com/basilsboots">Instagram</a></li>
            <li><a href="https://www.depop.com/basilsboots/">Depop</a></li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}
