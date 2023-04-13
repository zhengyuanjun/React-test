import React from "react";
import {BrowserRouter as Router ,Routes,Route,Link,Navigate} from "react-router-dom";
import {Provider} from "react-redux";
import {mobileStore} from "../store/mobileStore";
import Mobile from "../pages/home";
class MobileRouter extends React.Component {
    render() {
        return(
            <Provider store={mobileStore}>
            <Router>
                <Routes>
                    <Route path="/mobile" element={<Mobile/>}></Route>
                </Routes>
            </Router>
            </Provider>
        )
    }
}

export default MobileRouter