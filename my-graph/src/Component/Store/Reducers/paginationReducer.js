const initialState = {
    postsArray:[],
    loading: false
}

function paginationReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "PAGINATION_ARRAY":
            return {
                ...state,
                postsArray: payload
            }
        default:
            return state
    }
}
export default paginationReducer;