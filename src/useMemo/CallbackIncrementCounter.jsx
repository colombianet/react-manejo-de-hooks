export const CallbackIncrementCounter = ({ increment }) => {
    console.log('object');

    return (
        <>
            <button className="btn btn-primary" onClick={increment}>Incrementar</button>
        </>
    )
}
