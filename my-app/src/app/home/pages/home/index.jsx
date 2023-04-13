import React from "react"
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ChatTitle from "../../features/home/ChatTitle";
import {Button, createTheme, ThemeProvider} from "@mui/material";
import styles from './index.moduel.css';
import Box from "@mui/material/Box";
const darkTheme = createTheme({ palette: { mode: 'dark' } });
function Home(){
    return (
        <ThemeProvider theme={darkTheme}>
            <Grid container spacing={2}>

                <Grid item xs={2}>
                    <Paper>
                        <Box className={styles.menuBox}>
                            <Button className={styles.newChatButton} variant="outlined">新建聊天</Button>
                        </Box>
                        <Box>
                            <ChatTitle/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>

    );
}

export default Home
