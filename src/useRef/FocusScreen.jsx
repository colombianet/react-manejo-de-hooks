import { useRef } from "react";

export const FocusScreen = () => {
    const refInput = useRef();

    const onClick = () => {
        refInput.current.select();
    };

    return (
        <>
            <div className="container mt-2">
                <h1>Uso de useRef</h1>
                <input type="text" className="form-control mt-2" ref={refInput} />
                <button className="btn btn-primary mt-2" onClick={ onClick }>Obtener foco</button>
            </div>
        </>
    )
}
