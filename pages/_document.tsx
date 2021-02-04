import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

const GOOGLE_FONTS_LATO =
  'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&text=.%2F%40CESabcdefghilmnorstuw'

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
          {/* https://csswizardry.com/2020/05/the-fastest-google-fonts/ */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href={`${GOOGLE_FONTS_LATO}&display=swap`}
          />
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
