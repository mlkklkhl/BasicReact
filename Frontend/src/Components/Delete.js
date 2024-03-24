import React from "react";
import axios from "axios";

import { useState } from 'react';

function Delete() {

    //////// Delete - Start ////////
    const [openDeleteDialog, setDeleteDialog] = useState(false);

    const handleClickDeleteOpen = () => {
        setDeleteDialog(true);
    };

    const handleClickDeleteClose = () => {
        setDeleteDialog(false);
    };

    const DeletePatient = (probs) => {
        var PatientInfo = probs[0];

        axios.delete('http://localhost:3001/patients/delete/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                'patientID': PatientInfo.ID
            })
        }).then(response => {
            if (response.status !== 200) throw new Error(response.status);
            else { console.log('Delete successfully'); }
        });
    };
    //////// Delete - End ////////

    return (
        { openDeleteDialog, handleClickDeleteOpen, handleClickDeleteClose, DeletePatient }
    );
}

export default Delete;



// {/* ///////// Dialog Delete Start ///////// */}
// <Dialog
// open={openDeleteDialog}
// onClose={handleClickDeleteClose}
// PaperProps={{
//     component: 'form',
//     onSubmit: (event) => {
//         event.preventDefault();
//         selectedPatient.ID = selectedPatient.ID
//         console.log("formJson: ", selectedPatient);
//         DeletePatient([selectedPatient]);
//         handleClickDeleteClose();
//         setKeyword('   ');
//         setSelectedPatient({});
//         setAlertVisibility([true, "DELETE"]);
//     },
// }}
// aria-labelledby="alert-dialog-title"
// aria-describedby="alert-dialog-description"
// >
// <DialogTitle id="alert-dialog-title">
//     <Stack spacing={2} direction="row" alignItems="center" >
//         <DeleteIcon color="error" />
//         <h4>Delete Data</h4>
//     </Stack>
// </DialogTitle>
// <DialogContent>
//     <DialogContentText id="alert-dialog-description">
//         <Typography noWrap>Do you confirm to delete <strong>{selectedPatient.HN} {selectedPatient.Name}</strong> ?</Typography>
//     </DialogContentText>
// </DialogContent>
// <DialogActions sx={{ mr: 2, mb: 1 }}>
//     <Button onClick={handleClickDeleteClose}>Cancel</Button>
//     <Button variant="outlined" color="error" type="submit" autoFocus>Delete</Button>
// </DialogActions>
// </Dialog>
// {/* ///////// Dialog Delete End ///////// */}