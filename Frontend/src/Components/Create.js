import axios from "axios";

import { useState } from 'react';

function Create() {

    const [openInsertForm, setInsertFormOpen] = useState(false);

    const handleClickInsertFormOpen = () => {
        setInsertFormOpen(true);
    };

    const handleClickInsertFormClose = () => {
        setInsertFormOpen(false);
    };

    const InsertPatient = (probs) => {
        var newPatientInfo = probs[0];

        axios.post("http://localhost:3001/create", {
            'HN': newPatientInfo.HN,
            'Name': newPatientInfo.name,
            'Patient_Rights_1': newPatientInfo.right1,
            'Patient_Rights_2': newPatientInfo.right2,
            'Patient_Rights_3': newPatientInfo.right3,
            'Chronic_Disease': newPatientInfo.chronic,
            'Address': newPatientInfo.address,
            'Phone': newPatientInfo.phone
        }).then(response => {
            if (response.status !== 200) throw new Error(response.status);
            else { console.log('Insert successfully'); }
        });

    };

    return (
        { openInsertForm, handleClickInsertFormOpen, handleClickInsertFormClose, InsertPatient }
    );
}

export default Create;

// {/** ///////// Create Dialog Form - START ///////// */}
// <Dialog
// open={openInsertForm}
// onClose={handleClickInsertFormClose}
// PaperProps={{
//     component: 'form',
//     onSubmit: (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.currentTarget);
//         const formJson = Object.fromEntries(formData.entries());
//         console.log("formJson: ", formJson);
//         InsertPatient([formJson]);
//         handleClickInsertFormClose();
//         setKeyword(' ');
//         setAlertVisibility([true, "INSERT"]);
//     },
// }}
// >
// <DialogTitle>
//     <Stack spacing={2} direction="row" alignItems="center" >
//         <AccountBoxIcon />
//         <h4>Insert Patient</h4>
//     </Stack>

// </DialogTitle>
// <DialogContent>
//     <TextField autoFocus required margin="dense" id="HN" name="HN" label="HN" type="name" InputProps={{ readOnly: true }} defaultValue={lastestID} fullWidth variant="outlined" />
//     <TextField autoFocus required margin="dense" id="name" name="name" label="Name Surname" type="name" fullWidth variant="outlined" />

//     <Grid container justifyContent="space-between" flexDirection={{ xs: 'column', sm: 'row' }} sx={{ fontSize: '12px', mt: 1, mb: 1 }}>
//         <Grid>
//             <InputLabel htmlFor="right1">Rights 1</InputLabel>
//             <Select
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

//     <TextField autoFocus margin="dense" id="chronic" name="chronic" label="Chronic Disease" type="name" fullWidth variant="outlined" />
//     <TextField autoFocus required margin="dense" id="address" name="address" label="Address" type="name" multiline rows={2} fullWidth variant="outlined" />
//     <TextField autoFocus required margin="dense" id="number" name="phone" label="Phone Number" type="name" fullWidth variant="outlined" />
// </DialogContent>
// <DialogActions sx={{ mr: 2, mb: 1 }}>
//     <Button onClick={handleClickInsertFormClose}>Cancel</Button>
//     <Button variant="outlined" type="submit">Submit</Button>
// </DialogActions>
// </Dialog >
// {/** ///////// Create Dialog Form - END ///////// */}