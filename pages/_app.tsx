import React from 'react';
import GlobalStyle from 'application/styles/global-styles';

type MyAppPropTypes = {
  Component: React.FC,
  pageProps: object,
};

function MyApp({ Component, pageProps }: MyAppPropTypes) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
