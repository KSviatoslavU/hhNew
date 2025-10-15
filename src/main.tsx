import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { App } from "./components/index";
import { theme } from "./theme";
import "@mantine/core/styles.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/hh">
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <App />
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
