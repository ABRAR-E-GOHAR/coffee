const initialState = {
    token: localStorage.getItem("adminToken"),
    adminAuthenticated: false,
    user: null
}

function adminReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "ADMIN_LOGIN":
            localStorage.setItem("adminToken", payload.token);
            return {
                ...state,
                ...payload,
                adminAuthenticated: true
            }
        case "LOAD_ADMIN":
            return {
                ...state,
                adminAuthenticated: true,
                user: payload
            }
        case "ADMIN_FAIL":
        case "LOGIN_FAIL":
            localStorage.removeItem("adminToken");
            return {
                ...state,
                token: null,
                adminAuthenticated: false
            }
        default:
            return state
    }

}

export default adminReducer;