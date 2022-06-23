import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CssBaseline, StylesProvider } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import * as config from 'src/app/config';
import theme from 'src/app/theme';
import '../styles.css';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: config.serviceUrl,
});

interface Props {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp = ({ Component, pageProps }: Props) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  );
};

export default MyApp;
