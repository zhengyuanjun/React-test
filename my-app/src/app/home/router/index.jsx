import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet} from "react-router-dom";
import {Provider} from "react-redux";
import {homeStore} from "../store/homeStore";
import Home from "../../home/pages/home";
import Login from "../../home/pages/login";
import NotFoundPage from "../pages/notFoundPage";

class HomeRouter extends React.Component {

    render() {
        return(
            <Provider store={homeStore}>
                <Routes>
                     <Route path="/" element={<Home/>}></Route>
                     <Route path="/login" element={<Login/>}></Route>
                     <Route path="/register" element={<Home/>}></Route>
                    <Route path="/*" element={<NotFoundPage/>}></Route>
                </Routes>
            </Provider>
        )
    }
}

export default HomeRouter