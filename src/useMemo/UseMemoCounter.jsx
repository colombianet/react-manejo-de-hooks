import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( interationsNumber = 100 ) => {
    for (let index = 0; index < interationsNumber; index++) {
        console.log('index');
    }

    return `Número de iteraciones: ${ interationsNumber }`;
};

export const UseMemoCounter = () => {
    const { incrementar, counter } = useCounter( 1, 1 );
    const [show, setShow] = useState( true );
    const iterations = useMemo(() => heavyStuff( 1000 ), [ counter ]);

    return (
    <>
        <div className="container mt-2">
            <h1>UseMemoCounter { counter }</h1>
            <h2>{ iterations }</h2>
            <button className="btn btn-primary mt-2 mx-2" onClick={ incrementar }>Incrementar</button>
            <button className="btn btn-outline-primary mt-2" onClick={ () => setShow( !show )}>Ocultar/Mostrar { JSON.stringify( show ) }</button>
        </div>

    </>
  )
}
