const initialState = {
    bookingData:[]
}
function bookingReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "BOOKING_DATA_TYPE":
            return {
                ...state,
                bookingData: payload
            }
        default:
            return state
    }
}
export default bookingReducer;