import { getErrors } from "./alertAction";
import setAuthToken from "./setAuthTokenAction";
import axios from "axios";

// load user---------------------------------
export const loadUser = () => {
    return async (dispatch) => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get("/login");
            if (res.data.msg) {
                dispatch(getErrors(res.data.msg));
            }
            else {
                dispatch({
                    type: "LOAD_USER",
                    payload: res.data
                });
            }
        } catch (err) {
            dispatch({
                type: "REGISTER_FAIL",
            });
        }
    }
}



// register user-----------------------------
export const registerUser = (formdata) => {
    return (dispatch) => {
        try {
            fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formdata)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.msg) {
                        dispatch(getErrors(data.msg));
                    }
                    else if (data.errors) {
                        data.errors.map((item) => {
                            return dispatch(getErrors(item.msg));
                        })
                    }
                    else {
                        dispatch({
                            type: "REGISTER_USER",
                            payload: data
                        });
                    }
                });
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                console.log(errors);
            }
            dispatch({
                type: "REGISTER_FAIL",
            });
        }
    }
}

// login user-----------------------------
export const loginUser = (userData) => {
    return (dispatch) => {
        try {
            fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.msg) {
                        dispatch(getErrors(data.msg));
                    }
                    else if (data.errors) {
                        data.errors.map((item) => {
                            return dispatch(getErrors(item.msg));
                        })
                    }
                    else {
                        dispatch({
                            type: "LOGIN_SUCCESSFUL",
                            payload: data
                        });
                    }
                })
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                console.log(errors);
            }
            dispatch({
                type: "LOGIN_FAIL",
            });
        }
    }
}

// logout user=================================================

export const logoutUser = (logoutData) => {
    return (dispatch) => {
        try {
            dispatch({
                type: logoutData
            });
        } catch (err) {
            console.log(err);
        }
    }
}

// admin login====================================================

export const adminLogin = (adminData) => {
    return (dispatch) => {
        try {
            fetch("/adminLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(adminData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.msg) {
                        dispatch(getErrors(data.msg));
                    }
                    else {
                        dispatch({
                            type: "ADMIN_LOGIN",
                            payload: data
                        })
                    }
                });
        } catch (err) {
            console.log(err);
        }
    }
}

// admin load========================================

export const adminLoad = () => {
    return async (dispatch) => {
        if (localStorage.adminToken) {
            setAuthToken(localStorage.adminToken);
        }
        try {
            const res = await axios.get("/adminLogin");
            if (res.data.msg) {
                dispatch(getErrors(res.data.msg));
            }
            else {
                dispatch({
                    type: "LOAD_ADMIN",
                    payload: res.data
                });
            }
        } catch (err) {
            dispatch({
                type: "ADMIN_FAIL",
            });
        }
    }
}


// upload Product Form Data====================

export const uploadProduct = (formdata) => {
    let data = new FormData();
    data.append("profile", formdata.uploadedImage);
    data.append("price", formdata.price);
    data.append("category", formdata.category);
    data.append("description", formdata.description);
    return (dispatch) => {
        try {
            fetch("/Products", {
                method: "POST",
                headers: {
                    "x-auth-token": localStorage.getItem("adminToken")
                },
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    dispatch(getErrors(data.msg));
                });
        } catch (err) {
            console.log(err);
        }
    }
}

// update product ======================

export const productUpdated = (Productdata) => {
    return (dispatch) => {
        try {
            fetch("/Products", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(Productdata)
            })
                .then(res => res.json())
                .then(data => {
                    dispatch(getErrors(data.msg));
                });
        } catch (err) {
            console.log(err);
        }
    }
}

// delete product ======================

export const productDelete = (Productdata) => {
    return (dispatch) => {
        try {
            fetch("/Products/del", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(Productdata)
            })
                .then(res => res.json())
                .then(data => {
                    dispatch(getErrors(data.msg));
                });
        } catch (err) {
            console.log(err);
        }
    }
}

// logout admin=================================================

export const logoutAdmin = (logoutData) => {
    return (dispatch) => {
        try {
            dispatch({
                type: logoutData,
            });
        } catch (err) {
            console.log(err);
        }
    }
}

//  Send Item to reducer=================================================

export const itemSendToReducer = (data) => {
    return (dispatch) => {
        try {
            dispatch({
                type: "ALL_ITEMS",
                payload: data
            });
        } catch (err) {
            console.log(err);
        }
    }
}

// filter Items=================================================

export const filterItemsFunc = (getItemObj) => {
    return (dispatch) => {
        try {
            fetch("/Products/filter", {
                method: "POst",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(getItemObj)
            })
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: "FILTER_ITEM",
                        payload: data
                    });
                });
        } catch (err) {
            console.log(err);
        }
    }
}

// send order data=================================================

export const orderData = (getObject) => {
    return (dispatch) => {
        try {
            fetch("/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify(getObject)
            })
                .then(res => res.json())
                .then(data => {
                    dispatch(getErrors(data.msg));
                })
        } catch (err) {
            console.log(err);
        }
    }
}

// remove order=================================================

export const removeOrder = (obj) => {
    return (dispatch) => {
        try {
            fetch("/orders", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify(obj)
            })
                .then(res => res.json())
                .then(data => {
                    dispatch(getErrors(data.msg));
                })
        } catch (err) {
            console.log(err);
        }
    }
}

// send conform orders======================================
export const orderConfirmed = (getOrder) => {
    return (dispatch) => {
        try {
            fetch("/conformOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify(getOrder)
            })
                .then(res => res.json())
                .then(data => {
                    dispatch(getErrors(data.msg));
                })
        } catch (err) {
            console.log(err);
        }
    }
}

// Upcoming Orders=============================

export const orderUserToAdmin = (orders) => {
    return (dispatch) => {
        try {
            dispatch({
                type: "UPCOMING_ORDERS",
                payload: orders
            })
        } catch (err) {
            console.log(err);
        }
    }
}

// Upcoming Orders=============================

export const sendBookingDataToAdmin = (getBookingData) => {
    return (dispatch) => {
        try {
            fetch("/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify(getBookingData)
            })
                .then(res => res.json())
                .then(data => {
                    dispatch(getErrors(data.msg));
                })

        } catch (err) {
            console.log(err);
        }
    }
}


// all booking data

export const allBookingData = (getData) => {
    return (dispatch) => {
        try {
            dispatch({
                type: "BOOKING_DATA_TYPE",
                payload: getData
            })
        } catch (err) {
            console.log(err);
        }
    }
}