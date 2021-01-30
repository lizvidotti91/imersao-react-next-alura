import Document, { Head, Html, Main, NextScript } from 'next/document';

import data from '../data.json';

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
          <meta property="og:image" content={data.bg} />
          {/* Icone na aba do browser */}
          <link rel="shortcut icon" href={data.icon} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* Fontes Google */}
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
          {/* Icones */}
          <script src="https://kit.fontawesome.com/a79202eb1e.js" crossorigin="anonymous"></script>
          {/* Título da Página no Browser */}
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
