import { useState } from "react";

export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <div className="container mt-2">
                <div>CounterApp {counter1}</div>
                <button className="btn btn-primary mt-2" onClick={() => { setCounter({ ...state, counter1: counter1 + 1 }) }}>+1</button>
            </div>
        </>
    );
};
