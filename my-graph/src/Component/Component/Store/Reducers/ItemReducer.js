const initialState = {
    products: []
}

function getItemReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "ALL_ITEMS":
            return {
                ...state,
                products: payload
            }
        case "FILTER_ITEM":
            return {
                ...state,
                products: payload
            }
        default:
            return state
    }
}

export default getItemReducer;