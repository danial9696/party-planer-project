import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Icon Fonts */}
          <link rel='stylesheet' href='https://unicons.iconscout.com/release/v4.0.8/css/line.css' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
