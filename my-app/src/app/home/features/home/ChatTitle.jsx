import { Card, List, ListItem, ListItemText, Typography } from '@mui/material';

export default function ChatTitle() {
    return (
        <div>
            <List>
                <ListItem>
                    <Card>
                        <Typography>Hi there!</Typography>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card>
                        <Typography>How are you?</Typography>
                    </Card>
                </ListItem>
                <ListItem>
                    <Card>
                        <Typography>Doing good, thanks for asking!</Typography>
                    </Card>
                </ListItem>
            </List>
        </div>
    );
}

