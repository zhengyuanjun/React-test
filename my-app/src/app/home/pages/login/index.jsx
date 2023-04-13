import React, {useState} from "react"
// import Login from '../../features/login/login'
import LoginComponent from "../../features/login/login";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Login(){
   return(
       <div >
          <Container  maxWidth="lg" >
             <LoginComponent/>
          </Container>
       </div>
   )
}