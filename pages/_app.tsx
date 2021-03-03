import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core";
import { GlobalTheme } from "../styles/GlobalTheme";

// register fontawesome icons here
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faGlobe,
  faCode,
  faAdjust,
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faFontAwesome,
  faWpforms,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab, faGlobe, faFontAwesome, faCode, faWpforms, faAdjust);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
