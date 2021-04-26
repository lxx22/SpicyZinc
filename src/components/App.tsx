import React from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./HomePage";
import FavPage from "./FavPage";


const NotFound = () => (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">
        Go Home
      </Link>
    </div>
);

export const App = () => {
    return (
        <>
            
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/fav" component={FavPage}></Route>
                    <Route component={NotFound} />
                </Switch>
            
        </>
    );
};

