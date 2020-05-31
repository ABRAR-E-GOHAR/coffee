const initialState = {
    upComingOrders: []
}

function upComingOrdersReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "UPCOMING_ORDERS":
            return {
                ...state,
                upComingOrders: payload
            }
        default:
            return state;
    }
}

export default upComingOrdersReducer;