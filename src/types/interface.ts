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


export interface Show {
    episodes: Episode[];
    favourites: Episode[];
}

export interface Counter {
    count: number;
}

export type Another = Record<string, any>;


export interface State {
    show: Show;
    counter: Counter;
    another: Another
}

export interface Action {
    type: string
    payload: any
}


export type FavAction = (
  state: State,
  dispatch: Dispatch,
  episode: Episode
) => void


export interface EpisodeProps {
  episodes: Episode[]
  store: Store;
  favourites?: Episode[]
  toggleFavAction?: FavAction
}


export type Dispatch = React.Dispatch<Action>

export interface Store {
    state: State;
    dispatch?: Dispatch;
}