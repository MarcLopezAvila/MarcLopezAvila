import React from 'react';
import { Normalize } from 'styled-normalize'
import GlobalStyle from 'application/styles/global-styles';

type MyAppPropTypes = {
  Component: React.FC,
  pageProps: object,
};

function MyApp({ Component, pageProps }: MyAppPropTypes) {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
