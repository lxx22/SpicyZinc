import React, { lazy, Suspense } from 'react';

import { StoreContext } from '../Store'
import { EpisodeProps } from '../types/interface';
import { toggleFavAction } from '../Action'

import { Link } from "react-router-dom";


const EpisodeList = lazy<any>(() => import('./EpisodeList'))

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(StoreContext)

  const props: EpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  }

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
                    </ul>
                </nav>
            </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='episode-layout'>
          <EpisodeList {...props} />
        </div>
      </Suspense>
    </>
  )
}