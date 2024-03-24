import React from "react";
import { useEffect } from 'react';
import Auth from "./Auth";

import { Paper, AppBar, Grid, Typography, Box, Stack, TextField, Button } from '@mui/material/';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material/';
import LogoutIcon from '@mui/icons-material/Logout';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CancelIcon from '@mui/icons-material/Cancel';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

/* ///////// Authentication Start ///////// */

function Greeting() {

    const { auth, user, error, openLoginForm, handleClickLoginFormOpen, handleClickLoginFormClose, handleClickLogout, login } = Auth();
      
    if (auth) {
        return (
            <Box>Welcome {user[0]} !<IconButton color="inherit" onClick={handleClickLogout}><LogoutIcon /></IconButton></Box>
        );
    } else {
        return (
            <Box>
                <Button color="inherit" onClick={ handleClickLoginFormOpen }>Login</Button>

                {/* ///////// Dialog Login Form Start ///////// */}
                < Dialog
                    open={openLoginForm}
                    onClose={handleClickLoginFormClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(formData.entries());
                            login(formJson);
                        },
                    }}
                >
                    <DialogTitle>
                        <Stack spacing={2} direction="row" alignItems="center" >
                            <LockOpenIcon />
                            <h4>Login</h4>
                        </Stack>

                    </DialogTitle>
                    <DialogContent>
                        <TextField autoFocus required margin="dense" id="username" name="username" label="Username" type="name" fullWidth variant="outlined" />
                        <TextField autoFocus required margin="dense" id="password" name="password" label="Password" type="password" fullWidth variant="outlined" />
                        {error ? <Typography color="error" mt={2}><CancelIcon fontSize="inherit" sx={{ mr: 1 }} />{error}</Typography> : null}
                    </DialogContent>
                    <DialogActions sx={{ mr: 2, mb: 1 }}>
                        <Button onClick={handleClickLoginFormClose}>Cancel</Button>
                        <Button variant="outlined" type="submit">Submit</Button>
                    </DialogActions>
                </Dialog >

                {/* ///////// Dialog Login Form End ///////// */}
            </Box>
        );
    }
}

/* ///////// Authentication End ///////// */

function Header() {
    return (
        <Box>
            <Paper sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="warning" sx={{ py: 2 }}>
                    <Grid container spacing={2} >
                        <Grid item xs={10}>
                            <Stack sx={{ px: 3, flexDirection: "row" }}>
                                <LocalHospitalIcon sx={{ px: 3 }} />
                                <Typography variant="h6" noWrap component="div">
                                    BSC Hospital
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Greeting />
                        </Grid>
                    </Grid>
                </AppBar>
            </Paper>
        </Box>
    )
};
export default Header;
