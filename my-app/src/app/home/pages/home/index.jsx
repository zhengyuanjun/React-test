import React, {useState} from "react"
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
    Button, Card, CardContent,
    createTheme,
    CssBaseline,
    Divider,
    Drawer,
    List, ListItem,
    ListItemButton, ListItemIcon, ListItemText, TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import styles from './index.module.css'
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Icon from '@mui/material/Icon';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";


function Home() {
    const drawerWidth =340;
    const [selectedChat, setSelectedChat] = useState(null);

    const chats = [
        {id: 1, title: 'Chat 1', messages: ['Message 1', 'Message 2']},
        {id: 2, title: 'Chat 2', messages: ['Message 3', 'Message 4']},
        {id: 3, title: 'Chat 3', messages: ['Message 5', 'Message 6']},
    ];

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    return (

        <Grid container spacing={2}>
            <Grid  xs={2}>
                <Paper>
                    <Drawer
                        sx={{
                            flexShrink: 0,

                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',

                            },
                        }}
                        variant="permanent"
                        anchor="left"
                    >
                        <Toolbar >
                            <Box className={styles.menuBoxAddNewChat}>
                                <Button className={styles.newChatButton} variant="outlined">
                                    <AddIcon style={{marginRight: '20px'}}/>
                                    new chat
                                </Button>
                            </Box>
                        </Toolbar>
                        <List>
                            {[
                                'All All All A ',
                            ].map((text, index) => (
                                <ListItem divider={true} key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon sx={{minWidth: 40, fontSize: "0.9rem"}}>
                                            <Icon baseClassName="fa-regular" className="fa-message" fontSize="small"/>
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            <Typography variant="body1" style={{ whiteSpace: 'normal',wordBreak:'break-word'}}>
                                                {text}
                                            </Typography>
                                        }  />
                                        <Divider/>
                                    </ListItemButton>
                                    <Divider/>
                                </ListItem>

                            ))}
                        </List>
                    </Drawer>
                </Paper>
            </Grid>
            <Grid item xs={10}>
                <Box>
                    <Box className={styles.chatBoxRight}>
                        {selectedChat ? (
                            <div>
                                <h1>{selectedChat.title}</h1>
                                {selectedChat.messages.map((message) => (
                                    <Card key={message}>
                                        <CardContent>
                                            <p>{message}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <p>Please select a chat</p>
                        )}
                    </Box>
                    <Toolbar className={styles.chatToolbar}>

                        <TextField fullWidth label="fullWidth" id="fullWidth">
                            <IconButton xs={{position: "absolute", right: "5px"}}>ewewr
                                <Icon baseClassName="fa-regular" className="fa-message" fontSize="small"/>
                            </IconButton>
                        </TextField>
                    </Toolbar>
                </Box>
            </Grid>
        </Grid>
);
}

export default Home
