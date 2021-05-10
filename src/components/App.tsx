import React from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./HomePage";
import FavPage from "./FavPage";
import CounnterPage from "./CounterPage";

import SideNav, { Section } from "./SideNav";


const NotFound = () => (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">
        Go Home
      </Link>
    </div>
);

export const App = () => {
    const sections: Section[] = [{
       id: "fav",
       name: "Favorites",
       href: "fav"
    }, {
        id: "contact",
        name: "Contacts",
        href: "counter"
    }, {
        id: "service",
        name: "Services",
        href: "service"
    }];

    return (
        <>
            <SideNav sections={sections}>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/fav" component={FavPage}></Route>
                    <Route path="/counter" component={CounnterPage}></Route>
                    <Route component={NotFound} />
                </Switch>
            </SideNav>
        </>
    );
};

