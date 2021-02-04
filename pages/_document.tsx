import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

const FONT_FACE_LATO =
  "@font-face{font-family:Lato;font-style:normal;font-weight:400;font-display:swap;src:local('Lato'),url(/lato-400.woff2) format('woff2')}@font-face{font-family:Lato;font-style:normal;font-weight:700;font-display:swap;src:local('Lato'),url(/lato-700.woff2) format('woff2')}"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Carmelo Scandaliato's home page" />
          <link
            rel="preload"
            as="font"
            href="lato-400.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="lato-700.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style dangerouslySetInnerHTML={{ __html: FONT_FACE_LATO }} />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            href="favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-16x16.png"
            sizes="16x16"
          />
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
