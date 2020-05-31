import { combineReducers } from "redux";
import signupReducer from "../Reducers/signupReducer";
import alertReducer from "../Reducers/alertReducer";
import adminReducer from "../Reducers/AdminLoginReducer";
import getItemReducer from "../Reducers/ItemReducer";
import upComingOrdersReducer from "../Reducers/upComingOrdersReducer";
import bookingReducer from "../Reducers/bookingReducer";
import paginationReducer from "../Reducers/paginationReducer";

let combine = combineReducers({
    signupReducer,
    alertReducer,
    adminReducer,
    getItemReducer,
    upComingOrdersReducer,
    bookingReducer,
    paginationReducer
});
export default combine;