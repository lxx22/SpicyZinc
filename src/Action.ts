import React from 'react';
import {State, Dispatch, Action, Episode } from './types/interface';

export const fetchDataAction = async (dispatch: Dispatch) => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=la-casa-de-papel&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();

    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON._embedded.episodes
    });
}

export const toggleFavAction = (state: State, dispatch: Dispatch, episode: Episode): void => {
    const episodeInFav = state.show.favourites.includes(episode);
    let dispatchObj = {
        type: 'ADD_FAV',
        payload: [episode]
    }
    // add an if statement
    if (episodeInFav) {
        const favWithoutEpisode = state.show.favourites.filter(
            (fav: Episode) => fav.id !== episode.id
        )
        dispatchObj = {
            type: 'REMOVE_FAV',
            payload: favWithoutEpisode
        }
    }

    return dispatch(dispatchObj);
};