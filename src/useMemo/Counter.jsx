import { useState } from "react";
import { useCounter } from "../hooks";
import { CounterMemo } from "./CounterMemo";

export const Counter = () => {
    const { incrementar, counter } = useCounter(1, 1);
    const [show, setShow] = useState(true);

    return (
        <>
            <div className="container mt-2">
                <h1>Counter <CounterMemo value={counter} /></h1>
                <button className="btn btn-primary mt-2 mx-2" onClick={incrementar}>Incrementar</button>
                <button className="btn btn-outline-primary mt-2" onClick={() => setShow(!show)}>Ocultar/Mostrar {JSON.stringify(show)}</button>
            </div>

        </>
    )
}
