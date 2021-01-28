import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          {/* Imagem de Compartilhamento */}
          <meta property="og:image" content="https://raw.githubusercontent.com/lizvidotti91/imersao-react-next-alura/main/src/img/img-background.png" />

          <link rel="shortcut icon" href="/src/img/icon.png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />

          <title>.:ModernQuiz:.</title>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
