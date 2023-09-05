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
        <div className="row">
          <div className="twelve columns heading">
            <h1>Basil's Boots</h1>
            <h2 style={{'text-align': 'center'}}>Hand-restored and restyled boots and accessories</h2>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <div style={{'text-align': 'center'}}>
              <iframe src="https://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fbasilsboots&width=600&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=435" scrolling="yes" style={{border: 'none', overflow: 'hidden', width: '500px', height: '430px', background: 'white', float: 'left'}} ></iframe>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns description">
            <h3>See and purchase my work on:</h3>
            <ul>
              <li><a href="https://www.facebook.com/basilsboots">Facebook</a></li>
              <li><a href="https://www.instagram.com/basilsboots">Instagram</a></li>
              <li><a href="https://www.depop.com/basilsboots/">Depop</a></li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
