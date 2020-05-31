import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../RootReducer/rootReducer";

let initialState = {};
let middleware = [thunk];
let store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;