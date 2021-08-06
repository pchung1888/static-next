import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="custom" content="yolo"></meta>
        </Head>
        <body>
          This come from document
          <Main />
          This come from document
        </body>
        <NextScript></NextScript>
      </Html>
    );
  }
}
