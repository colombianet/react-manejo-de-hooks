export const DataBreakingBad = ({ author, quote }) => {
    return (
        <div className="card mt-2">
            <div className="card-body">
                <h5 className="card-title">{author}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{quote}</h6>
            </div>
        </div>
    )
}
