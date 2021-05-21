import * as React from "react";
import { StoreContext } from "../Store";

const Counter = (): React.ReactElement => {
    const { state, dispatch } = React.useContext(StoreContext);

    return (
        <>
            <h2>Counter page</h2>
            <div>
                Count: {state.counter.count}
                <br />
                <button onClick={() => dispatch({ type: "increment", payload: "" })}>Increment</button>
                <button onClick={() => dispatch({ type: "decrement", payload: "" })}>Decrement</button>
                <button onClick={() => dispatch({ type: "reset", payload: "" })}>Reset</button>
            </div>
        </>
    );
};

export default Counter;
