import React, { useReducer, createContext } from 'react';
import { State, Action, Store } from './types/interface';

const initialState: State = {
    episodes: [],
    favourites: []
}

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload };
        case 'ADD_FAV':
            return { ...state, favourites: [...state.favourites, ...action.payload] }
        default:
            return state;
    }
}

export const StoreContext = createContext<Store>({
    state: initialState,
    dispatch: () => null
});

export const StoreProvider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value: Store = {state, dispatch};

  return (
        <StoreContext.Provider value={value}>
            { children }
        </StoreContext.Provider>
  );
}
