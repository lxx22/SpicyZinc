import React, { useReducer, createContext } from 'react';
import { Show, Counter, Another, State, Action, Store } from './types/interface';

const initialState: State = {
    show: {
        episodes: [],
        favourites: []
    },
    counter: {
        count: 0
    },
    another: {

    }
}

export const anotherReducer = (state: Another, action: Action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}
  
export const countReducer = (state: Counter, action: Action) => {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + 1
            }
        case "decrement":
            return {
                count: state.count - 1,
            };
        case "reset":            
        default:
            return {
                count: 0,
            }
    }
}

export const showReducer = (state: Show, action: Action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload };
        case 'ADD_FAV':
            return { ...state, favourites: [...state.favourites, ...action.payload] }
        default:
            return state;
    }
}

// export interface State {
//     show: Show;
//     counter: Counter;
//     another: Another
// }

export const reducer = (state: State, action: Action): State => {
    console.log(action.payload, "main reducer");

    return {
        show: showReducer(state.show, action),
        counter: countReducer(state.counter, action),
        another: anotherReducer(state.another, action)
    };
}

export const StoreContext = createContext<Store>({
    state: initialState,
    // dispatch: () => null
    dispatch: (action: Action) => null
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
