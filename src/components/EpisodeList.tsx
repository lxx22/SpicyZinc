import React from "react";

import { Episode, EpisodeProps } from "../types/interface";

const EpisodesList = (props: EpisodeProps): JSX.Element[] => {
    const { episodes, store, toggleFavAction } = props;
    const { state, dispatch } = store;

    const clickHandler = () => {
        toggleFavAction(state, dispatch, episodes[0]);
    };

    return episodes.map((episode: Episode) => (
        <section key={episode.id} className="episode-box">
            <img src={episode.image ? episode.image.medium : ""} alt={`Money Heist ${episode.name}`} />
            <div>{episode.name}</div>
            <section>
                <div>
                    Season: {episode.season} Number: {episode.number}
                </div>
                <button onClick={clickHandler}>Fav</button>
            </section>
        </section>
    ));
};

export default EpisodesList;
