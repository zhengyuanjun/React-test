import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from "react-router-dom";
import AdminRouter from "../../app/admin/router";
import HomeRouter from "../../app/home/router";
import NotFoundPage from "../../app/home/pages/notFoundPage";
import Login from '../../app/home/pages/login/index'
class MainRouter extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to='/home'/>}></Route>
                    <Route path="/home/*" element={<HomeRouter/>}></Route>
                    <Route path="/admin/*" element={<AdminRouter/>}></Route>
                    <Route path="*" element={<NotFoundPage/>}></Route>
                </Routes>
            </Router>
        )
    }
}

export default MainRouter