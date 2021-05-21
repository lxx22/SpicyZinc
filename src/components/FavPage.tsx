import React, { lazy, Suspense } from "react";

import { StoreContext } from "../Store";
import { EpisodeProps } from "../types/interface";
import { toggleFavAction } from "../Action";

/* eslint-disable  @typescript-eslint/no-explicit-any */
const EpisodeList = lazy<any>(() => import("./EpisodeList"));

export default function FavPage(): JSX.Element {
    const { state, dispatch } = React.useContext(StoreContext);

    const props: EpisodeProps = {
        episodes: state.show.favourites,
        store: { state, dispatch },
        toggleFavAction,
        favourites: state.show.favourites,
    };

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <section className="episode-layout">
                    <EpisodeList {...props} />
                </section>
            </Suspense>
        </>
    );
}
