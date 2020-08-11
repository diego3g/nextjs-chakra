import { NextPage } from "next";
import { AppProps } from "next/app";

import ThemeContainer from "~/contexts/theme/ThemeContainer";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeContainer>
    <Component {...pageProps} />
  </ThemeContainer>
);

export default App;