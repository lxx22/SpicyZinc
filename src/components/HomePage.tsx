import React, { useContext, useEffect, lazy, Suspense } from "react";
import { StoreContext } from "../Store";
import { EpisodeProps } from "../types/interface";
import { fetchDataAction, toggleFavAction} from "../Action";

import { Link } from "react-router-dom";

const EpisodeList = lazy<any>(() => import("./EpisodeList"));

const HomePage = (): JSX.Element => {
    const {state, dispatch} = React.useContext(StoreContext);

    useEffect(() => {
        if (state.show.episodes.length === 0) {
            fetchDataAction(dispatch);
        }
    }, []);

    const props: EpisodeProps = {
        episodes: state.show.episodes,
        store: { state, dispatch },
        toggleFavAction,
        favourites: state.show.favourites
    };

    return (
        <>
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/fav">Favorites</Link>
                        </li>
                        <li>
                            <Link to="/counter">Counter</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <section className="episode-layout">
                    <EpisodeList {...props} />
                </section>
            </Suspense>
        </>
    );
};

export default HomePage;