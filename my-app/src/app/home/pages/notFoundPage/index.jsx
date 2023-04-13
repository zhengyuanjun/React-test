import React from 'react';
import { Box, Typography } from '@mui/material';

export default function NotFoundPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h3" sx={{ mb: 2 }}>
                404 - Page Not Found
            </Typography>
            <Typography variant="subtitle1">
                Oops! The page you are looking for does not exist.
            </Typography>
        </Box>
    );
}