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
        <Header title="Welcome to Basil's Boots" />
        <h2 style={{'text-align': 'center'}}>Hand-restored and restyled boots and accessories</h2>
        <div className="hero">
          <img src="/img/hero.jpg" />
        </div>
        <div className="description">
          <h3>See and purchase my work on:</h3>
          <ul>
            <li><a href="https://www.facebook.com/basilsboots">Facebook</a></li>
            <li><a href="https://www.instagram.com/basilsboots">Instagram</a></li>
            <li><a href="https://www.depop.com/basilsboots/">Depop</a></li>
          </ul>
        </div>
        <div>
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbasilsboots%2Fposts%2F263405643310407&show_text=true&width=500" width="500" height="452" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </main>

      <Footer />
    </div>
  )
}
