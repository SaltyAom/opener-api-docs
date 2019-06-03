mport Document, { Html, Head, Main, NextScript } from 'next/document'
import Fav from '../static/img/fav.png'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html lang="en">
          <Head>
            <meta httpEquiv="content-type" content="text/html, charset=utf8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

            <meta name="title" content="Opener API"/>
            <meta name="description" content="Opener API documentation, usage and example"/>
            <meta name="author" content="aomkirby123"/>
            <link rel="icon" href={Fav} />
            <link rel="canonical" href="https://doc.opener.mystiar.com"/>

            <meta property="og:title" content="Opener API"/>
            <meta property="og:description" content="Opener API documentation, usage and example"/>
            <meta property='article:author' content="aomkirby123"/>
            <meta property='og:site_name' content="Mystiar"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content="https://api.opener.mystiar.com/static/img/image.png"/>
            <meta property="og:image:width" content="1920"/>
            <meta property="og:image:height" content="1080"/>

            <meta name="theme-color" content="#25283b" />

            <link rel="preconnect" href="https://opener.now.sh"/>
            <link rel="dns-prefetch" href="https://opener.mystiar.com"/>
            <link rel="dns-prefetch" href="https://github.com/aomkirby123/nhnetai-opener"/>
            <link rel="dns-prefetch" href="https://github.com/aomkirby123/opener-api"/>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument