import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import DocHead from 'common/components/presentational/doc-head';
import { extractStyles } from 'helpers/render';

// @ts-ignore
class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return extractStyles(ctx);
  }

  render() {
    return (
      <Html>
        <Head>
          <DocHead />
          {this.props.styles}
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
