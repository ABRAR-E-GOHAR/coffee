import React, { useEffect } from 'react';
import Home from './Component/Home/home';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './Component/SignUp/signup';
import LogIn from './Component/LogIn/login';
import { Provider } from 'react-redux';
import store from "./Component/Store/StoreFile/store";
import Alert from "./Component/AlertErrors/Alert";
import AdminLogIn from "./Component/AdminLogIn/adminlogin";
import AdminPanel from "./Component/AdminBody/adminBody";
import UserDashBoard from './Component/UserDashBoard/userdashboard'
import AdminUploadProducts from "./Component/AdminUploadedProducts/adminDel";
import UserTable from './Component/UserTableBooking/usertable';
import MyCart from './Component/MyCart/myCrat';
import { loadUser } from "./Component/Store/Action/action";
import setAuthToken from "./Component/Store/Action/setAuthTokenAction";
import { adminLoad } from "./Component/Store/Action/action";
import AdminUserData from './Component/AdminUserDataForm/adminuserdata';
import AdminTable from "./Component/AdminTableBooking/AdminTable";
import News from "./Component/News/news";
import ContactUs from "./Component/ContectUs/contect";
import About from "./Component/About/about";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(adminLoad());
  }, [])
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Route><Alert /></Route>
        <Route path='/login' component={LogIn} />
        <Route exact path="/" component={Home} />
        <Route path='/signup' component={SignUp} />
        <Route path='/admindashboard' component={AdminPanel} />
        <Route path='/dashboard' component={UserDashBoard} />
        <Route path='/adminlogin' component={AdminLogIn} />
        <Route path='/adminUploadProduct' component={AdminUploadProducts} />
        <Route path='/usertable' component={UserTable} />
        <Route path='/mycart' component={MyCart} />
        <Route path='/adminuserdata' component={AdminUserData} />
        <Route path='/admintable' component={AdminTable} />
        <Route path='/news' component={News} />
        <Route path='/contectus' component={ContactUs} />
        <Route path='/about' component={About} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;