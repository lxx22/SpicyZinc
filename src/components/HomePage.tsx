import React, { useEffect, lazy, Suspense } from "react";
import { StoreContext } from "../Store";
import { EpisodeProps } from "../types/interface";
import { fetchDataAction, toggleFavAction } from "../Action";

/* eslint-disable  @typescript-eslint/no-explicit-any */
const EpisodeList = lazy<any>(() => import("./EpisodeList"));

const HomePage = (): JSX.Element => {
    const { state, dispatch } = React.useContext(StoreContext);

    useEffect(() => {
        if (state.show.episodes.length === 0) {
            fetchDataAction(dispatch);
        }
    }, []);

    const props: EpisodeProps = {
        episodes: state.show.episodes,
        store: { state, dispatch },
        toggleFavAction,
        favourites: state.show.favourites,
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <h2>Home page</h2>
            <section className="episode-layout">
                <EpisodeList {...props} />
            </section>
        </Suspense>
    );
};

export default HomePage;
