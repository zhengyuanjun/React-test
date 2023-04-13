import React from "react";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Admin from "../pages/home";
import NotFoundPage from "../../home/pages/notFoundPage";
class AdminRouter extends React.Component {
    render() {
        return(
                <Routes>
                    <Route path="/" element={<Admin/>}></Route>
                    <Route path="/dashboard" element={<Admin/>}></Route>
                    <Route path="/*" element = {<NotFoundPage/>}></Route>
                </Routes>
        )
    }
}

export default AdminRouter