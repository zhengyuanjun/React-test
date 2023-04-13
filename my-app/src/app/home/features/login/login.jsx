import * as React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
    Alert,
    Checkbox,
    createTheme,
    CssBaseline,
    FormControlLabel,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import { Button } from '@mui/material';
import Avatar from "@mui/material/Avatar";
import {Link} from "react-router-dom";
import {loginState,alertState, userLogin} from "./loginSlice";
import {useDispatch,useSelector} from "react-redux";
import Snackbar from '@mui/material/Snackbar';
import {useState} from "react";
import AlertSnackbar from "../alertSnackbar";
export default function LoginComponent(){
    const theme = createTheme();//这个方法内可以自定义主题样式
    const dispatch = useDispatch();

    const [alertOpen, setAlertOpen] = useSelector(loginState.isLoginIn);
    const [alertSeverity, setAlertSeverity] = useSelector(alertState.alertSeverity);
    const [alertMessage, setAlertMessage] = useSelector(alertState.alertMessage);
    const [alertDuration, setAlertDuration] = useSelector(alertState.alertDuration);

    const showAlert = (severity, message,duration) => {
        setAlertOpen(true)
        setAlertSeverity(severity)
        setAlertMessage(message)
        setAlertDuration(duration)
    };

    const closeAlert = (event, reason) => {
        setAlertOpen(false);
    };


    const  handleSubmit = (event) => {
         //阻止表单提交动作
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        let form_data = {email:data.get('email'),password:data.get('password')}
         dispatch(userLogin(form_data));
    };

        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    {/*清除浏览器样式，不同浏览器样式不同*/}
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Login In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Snackbar open={alertOpen} autoHideDuration={alertDuration} onClose={closeAlert} >
                                <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                                    {alertMessage}
                                </Alert>
                            </Snackbar>
                            <AlertSnackbar/>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
