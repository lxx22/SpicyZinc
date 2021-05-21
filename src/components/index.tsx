import * as React from "react";
import * as ReactDom from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "../Store";

import { App } from "./App";

import "../style/index.css";
import "../style/sidenav.css";

ReactDom.render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>,
    document.querySelector("#app"),
);
