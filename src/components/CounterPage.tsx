import React, { useContext, useEffect, lazy, Suspense } from "react";
import { StoreContext } from "../Store";
import { EpisodeProps } from "../types/interface";
import { fetchDataAction, toggleFavAction} from "../Action";


const Counter = () => {
  const {state, dispatch} = useContext(StoreContext)

  return (
    <div>
      Count: {state.counter.count}
       <br />
       <br/>
       <button onClick={() => dispatch({ type: 'increment', payload: ""})}>Increment</button>
       <button onClick={() => dispatch({ type: 'decrement', payload: ""})}>Decrement</button>
       <button onClick={() => dispatch({ type: 'reset', payload: ""})}>Reset</button>
    </div>
  );
};

export default Counter;