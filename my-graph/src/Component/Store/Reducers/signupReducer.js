const initiaState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    user: null,
}

function signUpReducer(state = initiaState, action) {
    const { payload, type } = action;
    switch (type) {
        case "REGISTER_USER":
        case "LOGIN_SUCCESSFUL":
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
            }
        case "REGISTER_FAIL":
        case "LOGIN_FAIL":
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
            }
        case "LOAD_USER":
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            }
        default:
            return state
    }
}
export default signUpReducer;