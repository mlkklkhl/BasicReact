import React from "react";
import { Paper, AppBar, Typography } from '@mui/material/';
const Footer = () => (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, flexGrow: 1 }} elevation={3}>
        <AppBar position="static" color="warning">
            <Typography variant="p" noWrap component="div" sx={{ py: 2, bottom: 0 }}>
                © 2024 Copyright | BSC Hospital
            </Typography>
        </AppBar>
    </Paper>
);
export default Footer;
