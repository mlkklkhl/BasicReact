import React from "react";
import axios from "axios";

import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";

import { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';

import { Box, InputBase, Snackbar, Tooltip, AppBar, Alert, Grid, Button } from '@mui/material/';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper } from '@mui/material/';
import { Stack, TextField, InputLabel, Select, MenuItem, Typography } from '@mui/material/';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material/';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));

function Read() {

    //////// READ: initialize PARAM, FUNCTION - START ////////
    const [patients, setPatients] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (/^\s/.test(keyword)) {
            console.log('error alert');
            setKeyword(keyword.trim());
        } else {
            if (keyword === '') {
                axios.get('http://localhost:3001/patients/')
                    .then(response => {
                        setPatients(response.data);
                    })
            } else {
                axios.post('http://localhost:3001/patients/' + keyword, {
                }).then(response => {
                    setPatients(response.data);
                })
            }
        }
    }, [keyword]);
    //////// READ: initialize PARAM, FUNCTION - END ////////


    //////// Pagination - Start ////////
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    //////// Read (Search) - End ////////


    //////// Information Alert: initialize PARAM, FUNCTION - START ////////
    const [alertVisibility, setAlertVisibility] = useState([false, ""]);

    const handleAlertClose = () => {
        setAlertVisibility([false, ""]);
    };

    var alertType = <div></div>;
    if (alertVisibility[1] === "INSERT") {
        alertType = <Alert severity="success" variant="standard" className="alert">Insert new patient successfully!</Alert>
    } else if (alertVisibility[1] === "DELETE") {
        alertType = <Alert severity="success" color="error" variant="standard" className="alert">Delete patient successfully!</Alert>
    } else if (alertVisibility[1] === "UPDATE") {
        alertType = <Alert severity="success" color="info" variant="standard" className="alert">Update patient information successfully!</Alert>
    }
    //////// Information Alert: initialize PARAM, FUNCTION - END ////////


    /////////// Create: IMPORT PARAM, FUNCTION - START ///////////
    // const { openInsertForm, handleClickInsertFormOpen, handleClickInsertFormClose, InsertPatient } = Create();

    // const [rights, setRights] = useState([]);
    // const [lastestID, setLastestID] = useState('');

    // useEffect(() => {
    //     if (patients.length > 0) {
    //         setLastestID("HN" + (parseInt(patients.at(-1).HN.replaceAll("HN", "")) + 1));
    //         console.log(lastestID)
    //     }
    // }, [patients]);

    // useEffect(() => {
    //     axios.get('http://localhost:3001/rights/', {
    //     }).then(response => { setRights(response.data) });
    // }, []);
    /////////// Create: IMPORT PARAM, FUNCTION - END ///////////


    /////////// UPDATE: IMPORT PARAM, FUNCTION - START ///////////
    // const { openUpdateForm, handleClickUpdateFormOpen, handleClickUpdateFormClose, UpdatePatient } = Update();
    // const [selectedPatient, setSelectedPatient] = useState({});
    // const updateClick = (event, patient) => {
    //     setSelectedPatient(patient);
    //     handleClickUpdateFormOpen();
    // }
    /////////// UPDATE: IMPORT PARAM, FUNCTION - END ///////////


    /////////// DELETE: IMPORT PARAM, FUNCTION - START ///////////
    // const { openDeleteDialog, handleClickDeleteOpen, handleClickDeleteClose, DeletePatient } = Delete();
    // const deleteClick = (event, patient) => {
    //     setSelectedPatient(patient);
    //     handleClickDeleteOpen();
    // }
    ////////// DELETE: IMPORT PARAM, FUNCTION - END ///////////    

    return (
        <Box sx={{ py: 2, px: 2 }}>

            {/** ///////// Search and Insert Components START ///////// */}
            <Paper sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="warning" sx={{ py: 2 }}>
                    <Grid container spacing={2} >
                        {/** ///////// SEARCH Component START ///////// */}
                        <Grid item xs={10}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search patient's name …"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </Search>
                            <Box sx={{ flexGrow: 1 }} />
                        </Grid>
                        {/** ///////// SEARCH Component END ///////// */}
                        {/** ///////// INSERT Component START ///////// */}
                        <Grid item xs={2}>
                            <Tooltip title="Insert new patient">
                                <Button color="warning" variant="contained" 
                                    // onClick={handleClickInsertFormOpen} 
                                    startIcon={<AddCircleIcon />} >
                                    Insert
                                </Button>
                            </Tooltip>
                        </Grid>
                        {/** ///////// INSERT Component END ///////// */}
                    </Grid>
                </AppBar>
            </Paper>
            {/** ///////// Search and Insert Components END ///////// */}

            {/** ///////// Display Data START ///////// */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>HN</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="center">Rights 1</TableCell>
                            <TableCell align="center">Rights 2</TableCell>
                            <TableCell align="center">Rights 3</TableCell>
                            <TableCell align="left">Chronic Disease</TableCell>
                            <TableCell align="left">Address</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(patients.length > 0 
                                              // && rights.length > 0
                        ) &&
                            patients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(patient => (
                                <TableRow key={patient.ID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{patients.indexOf(patient) + 1}</TableCell>
                                    <TableCell component="th" scope="row">{patient.HN}</TableCell>
                                    <TableCell align="left">{patient.Name}</TableCell>
                                    <TableCell align="center">{patient['Patient_Rights_1']}</TableCell>
                                    <TableCell align="center">{patient['Patient_Rights_2']}</TableCell>
                                    <TableCell align="center">{patient['Patient_Rights_3']}</TableCell>
                                    <TableCell align="left">{patient.Chronic_Disease}</TableCell>
                                    <TableCell align="left">{patient.Address}</TableCell>
                                    <TableCell align="left">{patient.Phone}</TableCell>
                                    <TableCell align="center">
                                        <Tooltip title="Edit">
                                            <IconButton aria-label="edit" size="large" color="primary" 
                                                // onClick={event => updateClick(event, patient)} 
                                                >
                                                <EditIcon fontSize="inherit" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton aria-label="delete" size="large" color="error" 
                                                // onClick={event => deleteClick(event, patient)} 
                                                >
                                                <DeleteIcon fontSize="inherit" />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {/** ///////// Display Data - END ///////// */}

            {/** ///////// Table Pagination - START ///////// */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 50, 100]}
                component="div"
                count={patients.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {/** ///////// Table Pagination - END ///////// */}

            {/** ///////// Alert Snack bar - START ///////// */}
            <Snackbar open={alertVisibility[0]} autoHideDuration={2000} onClose={handleAlertClose}>
                {alertType}
            </Snackbar>
            {/** ///////// Alert Snack bar - END ///////// */}


            {/** ///////// Create Dialog Form - START ///////// */}                 
            {/** ///////// Create Dialog Form - END ///////// */}


            {/* ///////// Update Dialog Form - START ///////// */}
            {/* ///////// Update Dialog Form - END ///////// */}


            {/* ///////// Delete Dialog Form - START ///////// */}
            {/* ///////// Delete Dialog Form - END ///////// */}

        </Box>
    )
}

export default Read;