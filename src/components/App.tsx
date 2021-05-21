import * as React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import FavPage from "./FavPage";
import CounnterPage from "./CounterPage";

import SideNav, { Section } from "./SideNav";

const NotFound = (): React.ReactElement => (
    <div>
        <h1>404 - Not Found!</h1>
    </div>
);

export const App = (): React.ReactElement => {
    const sections: Section[] = [
        {
            id: "home",
            name: "Home",
            href: "/",
        },
        {
            id: "fav",
            name: "Favorites",
            href: "fav",
        },
        {
            id: "counter",
            name: "Counter",
            href: "counter",
        },
        {
            id: "service",
            name: "Services",
            href: "service",
        },
    ];

    return (
        <>
            <SideNav sections={sections}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/fav" component={FavPage} />
                    <Route path="/counter" component={CounnterPage} />
                    <Route component={NotFound} />
                </Switch>
            </SideNav>
        </>
    );
};
