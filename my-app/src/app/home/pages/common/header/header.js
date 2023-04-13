import * as React from 'react';
import Button from '@mui/material/Button';
import headerStyles from './header.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ResponsiveAppBar from "../../../features/navMenu/navMenu";
import headerStyle from './header.module.css';
export default function Header() {
    return (
        <Container  maxWidth="lg" >
                <Grid  >
                    <ResponsiveAppBar/>
                </Grid>
        </Container>
    );
}
