/**
    All the interfaces!
*/
export interface Image {
    medium: string;
    original: string;
}

export interface Episode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: Image
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string
}

export interface State {
  episodes: Episode[]
  favourites: Episode[]
}

export interface Action {
  type: string
  payload: Episode[]
}

export type Dispatch = React.Dispatch<Action>

export type FavAction = (
  state: State,
  dispatch: Dispatch,
  episode: Episode
) => void

export interface Store {
    state: State;
    dispatch: Dispatch;
}

export interface EpisodeProps {
  episodes: Episode[]
  store: Store;
  favourites?: Episode[]
  toggleFavAction?: FavAction
}