export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {
        case '[TODO] add todo':
            return [ ...initialState, action.payload ];
    
        case '[TODO] delete todo':
            return initialState.filter( t => t.id !== action.payload );
    
        case '[TODO] toggle todo':
            return initialState.map( t => {
                if (t.id == action.payload) {
                    return {
                        ...t,
                        done: !t.done
                    };
                }
                return t;
            } );
    
        default:
            return initialState;
    }
};