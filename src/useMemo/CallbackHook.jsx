import { useCallback, useState } from "react"
import { CallbackIncrementCounter } from "./CallbackIncrementCounter";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(1);

    const incrementFather = useCallback(
        () => {
            setCounter(() => counter + 1);
        },
        []
    );

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
            <div className="container mt-2">
                <h1>CallbackHook {counter}</h1>
                <CallbackIncrementCounter increment={incrementFather} />
            </div>
        </>
    )
}
