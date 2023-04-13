import Snackbar from "@mui/material/Snackbar";
import {Alert} from "@mui/material";
import * as React from "react";

export default class AlertSnackbar extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            alertOpen:false,
            alertSeverity:'success',
            alertMessage:'',
            alertDuration:3000,
        }

    }

     showAlert = (severity, message,duration) => {
         this.setState({alertOpen:true})
         this.setState({alertSeverity:severity})
         this.setState({alertMessage:message})
         this.setState({alertDuration:duration})
    };

     closeAlert = (event, reason) => {
         this.setState({alertOpen:false})
    };

    render() {
        return (
            <Snackbar open={this.state.alertOpen} autoHideDuration={this.state.alertDuration} onClose={this.closeAlert} >
                <Alert  severity={this.state.alertSeverity} sx={{ width: '100%' }}>
                    {this.state.alertMessage}
                </Alert>
            </Snackbar>
        )
    }
}


// function myAlert(){
//     const initialState={
//         alertOpen:false,
//         alertSeverity:'success',
//         alertMessage:'',
//         alertDuration:3000,
//     }
//
//     const closeAlert = (event, reason) => {
//         this.setState({alertOpen:false})
//     };
//
//     return (
//         <Snackbar open={initialState.alertOpen} autoHideDuration={initialState.alertDuration}  >
//             <Alert onClose={} severity={initialState.alertSeverity} sx={{ width: '100%' }}>
//                 {initialState.alertMessage}
//             </Alert>
//         </Snackbar>
//     )
// }