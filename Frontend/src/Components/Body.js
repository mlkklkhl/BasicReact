import React from "react";
import { Box, Tooltip, AppBar, Grid, Button } from '@mui/material/';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material/';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function Body() {
    return (
        <Box sx={{ py: 2, px: 2 }}>
            <Paper sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="warning" sx={{ py: 2 }}>
                    <Grid container spacing={2} >
                        <Grid item xs={10}>
                            {/** ///////// Search Components Add-on ///////// */}
                        </Grid>
                        <Grid item xs={2}>
                            <Tooltip title="Insert new patient">
                                <Button color="warning" variant="contained" startIcon={<AddCircleIcon />}>
                                    Insert
                                </Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </AppBar>
            </Paper>
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
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">1</TableCell>
                            <TableCell component="th" scope="row">HN</TableCell>
                            <TableCell align="left">Patient's Name</TableCell>
                            <TableCell align="center">Patient_Rights 1</TableCell>
                            <TableCell align="center">Patient_Rights 2</TableCell>
                            <TableCell align="center">Patient_Rights 3</TableCell>
                            <TableCell align="left">Chronic Disease</TableCell>
                            <TableCell align="left">Address</TableCell>
                            <TableCell align="left">Phone No.</TableCell>
                            <TableCell align="center">
                                <Tooltip title="Edit">
                                    <IconButton aria-label="edit" size="large" color="primary" >
                                        <EditIcon fontSize="inherit" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton aria-label="delete" size="large" color="error" >
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
export default Body;
