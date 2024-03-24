import axios from "axios";

import { useState } from 'react';

function Update() {

    const [openUpdateForm, setUpdateFormOpen] = useState(false);

    const handleClickUpdateFormOpen = () => {
        setUpdateFormOpen(true);
    };

    const handleClickUpdateFormClose = () => {
        setUpdateFormOpen(false);
    };

    const UpdatePatient = (probs) => {
        var PatientInfo = probs[0];

        axios.put("http://localhost:3001/patients/update/", {
            'patientID': PatientInfo.ID,
            'HN': PatientInfo.HN,
            'Name': PatientInfo.name,
            'Patient_Rights_1': PatientInfo.right1,
            'Patient_Rights_2': PatientInfo.right2,
            'Patient_Rights_3': PatientInfo.right3,
            'Chronic_Disease': PatientInfo.chronic,
            'Address': PatientInfo.address,
            'Phone': PatientInfo.phone
        }).then(response => {
            if (response.status !== 200) throw new Error(response.status);
            else { console.log('Update successfully'); }

        });
    };

    return (
        { openUpdateForm, handleClickUpdateFormOpen, handleClickUpdateFormClose, UpdatePatient }
    );
}

export default Update;

// {/* ///////// Dialog Update Form Start ///////// */}
// <Dialog
// open={openUpdateForm}
// onClose={handleClickUpdateFormClose}
// PaperProps={{
//     component: 'form',
//     onSubmit: (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.currentTarget);
//         const formJson = Object.fromEntries(formData.entries());
//         formJson.ID = selectedPatient.ID
//         console.log("formJson: ", formJson);
//         UpdatePatient([formJson]);
//         handleClickUpdateFormClose();
//         setKeyword('  ');
//         setSelectedPatient({});
//         setAlertVisibility([true, "UPDATE"]);
//     },
// }}
// >
// <DialogTitle>
//     <Stack spacing={2} direction="row" alignItems="center" >
//         <EditIcon />
//         <h4>Update Patient</h4>
//     </Stack>

// </DialogTitle>
// <DialogContent>
//     <TextField autoFocus required margin="dense" id="HN" name="HN" label="HN" type="name" InputProps={{ readOnly: true }} defaultValue={selectedPatient.HN} fullWidth variant="outlined" />
//     <TextField autoFocus required margin="dense" id="name" name="name" label="Name Surname" type="name" defaultValue={selectedPatient.Name} fullWidth variant="outlined" />

//     <Grid container justifyContent="space-between" flexDirection={{ xs: 'column', sm: 'row' }} sx={{ fontSize: '12px', mt: 1, mb: 1 }}>
//         <Grid>
//             <InputLabel htmlFor="right1">Rights 1</InputLabel>
//             <Select
//                 defaultValue={selectedPatient.Patient_Rights_1}
//                 autoFocus required
//                 sx={{ width: '15ch' }}
//                 label="right1"
//                 inputProps={{
//                     name: 'right1',
//                     id: 'right1',
//                 }}
//             >
//                 <MenuItem value={false}>Please select</MenuItem>
//                 {rights.map(right => (
//                     <MenuItem value={right.Patient_Rights}>{right.Patient_Rights}</MenuItem>
//                 ))}
//             </Select>
//         </Grid>
//         <Grid>
//             <InputLabel htmlFor="right2">Rights 2</InputLabel>
//             <Select
//                 defaultValue={selectedPatient.Patient_Rights_2}
//                 autoFocus
//                 sx={{ width: '15ch' }}
//                 label="right2"
//                 inputProps={{
//                     name: 'right2',
//                     id: 'right2',
//                 }}
//             >
//                 <MenuItem value={false}>Please select</MenuItem>
//                 {rights.map(right => (
//                     <MenuItem value={right.Patient_Rights}>{right.Patient_Rights}</MenuItem>
//                 ))}
//             </Select>
//         </Grid>
//         <Grid>
//             <InputLabel htmlFor="right3">Rights 3</InputLabel>
//             <Select
//                 defaultValue={selectedPatient.Patient_Rights_3}
//                 autoFocus
//                 sx={{ width: '15ch' }}
//                 label="right3"
//                 inputProps={{
//                     name: 'right3',
//                     id: 'right3',
//                 }}
//             >
//                 <MenuItem value={false}>Please select</MenuItem>
//                 {rights.map(right => (
//                     <MenuItem value={right.Patient_Rights}>{right.Patient_Rights}</MenuItem>
//                 ))}
//             </Select>
//         </Grid>
//     </Grid>

//     <TextField autoFocus margin="dense" id="chronic" name="chronic" label="Chronic Disease" type="name" defaultValue={selectedPatient.Chronic_Disease} fullWidth variant="outlined" />
//     <TextField autoFocus required margin="dense" id="address" name="address" label="Address" type="name" multiline rows={2} defaultValue={selectedPatient.Address} fullWidth variant="outlined" />
//     <TextField autoFocus required margin="dense" id="phone" name="phone" label="Phone Number" type="name" defaultValue={selectedPatient.Phone} fullWidth variant="outlined" />
// </DialogContent>
// <DialogActions sx={{ mr: 2, mb: 1 }}>
//     <Button onClick={handleClickUpdateFormClose}>Cancel</Button>
//     <Button variant="outlined" type="submit">Submit</Button>
// </DialogActions>
// </Dialog>
// {/* ///////// Dialog Update Form End ///////// */}