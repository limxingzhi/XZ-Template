import "fontsource-roboto";
import { useMediaQuery } from "@material-ui/core";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "utils/redux";

import { Nest, Routes } from "core";

const themeConfig = (prefersDarkMode: boolean): Theme =>
  createMuiTheme({
    palette: {
      type: prefersDarkMode ? "dark" : "light",
    },
  });

/**
 * This is the root node of the entire application. Routing, Global Styles,
 * Providers, Theming, Data Store are all configured in this Component.
 */
const Root: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ReduxProvider store={store}>
      <MaterialThemeProvider theme={themeConfig(prefersDarkMode)}>
        <CssBaseline />
        <BrowserRouter>
          <Nest appName="Awesome Application">
            <Routes />
          </Nest>
        </BrowserRouter>
      </MaterialThemeProvider>
    </ReduxProvider>
  );
};

export default Root;
