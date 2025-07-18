import GlobalStyle from "@styles/GlobalStyle";
import theme from "@styles/theme";
import { ThemeProvider } from "styled-components";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
