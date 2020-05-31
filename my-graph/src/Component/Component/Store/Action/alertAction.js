export const getErrors = (errors) => {
    return (dispatch) => {
        dispatch({
            type: "SET_ALERT",
            payload: errors
        });

        setTimeout(() => {
            dispatch({
                type: "REMOVE_ALERT",
            })
        }, 2000);
    }
}