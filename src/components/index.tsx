import * as React from "react";
import * as ReactDom from "react-dom";

import { StoreProvider } from '../Store';

import { BrowserRouter, HashRouter } from "react-router-dom";

import { App } from "./App";
import HomePage from './HomePage';

import '../style/index.css';

ReactDom.render(
        <StoreProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreProvider>,
    document.querySelector("#app")
);