import { Fragment, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, Select, MenuItem } from '@mui/material';
import ServiceStore from '../../stores/ServiceStore';
import { observer } from 'mobx-react-lite';
import MeetingStore from '../../stores/MeetingStore';
import Snackbar from '@mui/material/Snackbar';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
const addMeeting = observer(() => {

    const [open, setOpen] = useState(false);
    const [openError, setOpenError] =useState(false);
    const [openSuccsess, setOpenSuccsess] =useState(false);

    const [meeting, setMeeting] = useState({
        serviceName: " ",
        dateTime: new Date(),
        clientName: " ",
        clientPhone: " ",
        clientEmail: " "
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
      await MeetingStore.addMeeting(meeting);
        if (MeetingStore.isAdd) {
            setOpen(false)
            setOpenSuccsess(true)
            setOpenError(false);
            e.target.reset();
            console.log("isAdd",MeetingStore.isAdd)
        }
        else{
            setOpenError(true);
            setOpenSuccsess(false);
            console.log("isAdd",MeetingStore.isAdd)
        }
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setMeeting({
            ...meeting,
            [id]: value,
        });
    };

    return (
    <>
        <Snackbar open={openError} autoHideDuration={6000} onClose={()=>setOpenError(false)}>
            <Alert onClose={()=>setOpenError(false)} severity="error" sx={{ width: '100%' }}>
             change the date!
            </Alert>
          </Snackbar>
          <Snackbar open={openSuccsess} autoHideDuration={6000} onClose={()=>setOpenSuccsess(false)}>
            <Alert onClose={()=>setOpenSuccsess(false)} severity="success" sx={{ width: '100%' }}>
           Added!
            </Alert>
          </Snackbar>
            <Fragment>
                <Button variant='outlined' ariant="contained" onClick={() => { setOpen(true) }} >
                    Add a meeting
                </Button>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <form onSubmit={handleSubmit}>
                        <DialogTitle> Add an appointment</DialogTitle>
                        <DialogContent>
                            <InputLabel id="demo-simple-select-label">Select Service</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                label="serviceName"
                                id="serviceName"
                                fullWidth
                                value={meeting.serviceName}
                                onChange={(e) => setMeeting({
                                    ...meeting,
                                    serviceName: e.target.value,
                                })}
                            >
                                {ServiceStore.servicesList.map((service, index) =>
                                    <MenuItem key={index} value={service?.name} >
                                        {service?.name}
                                    </MenuItem>
                                )}
                            </Select>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="clientName"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}

                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="clientPhone"
                                label="Phone"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="clientEmail"
                                label="mail"
                                type="email"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                            />
                            <br />
                            <br />

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateTimePicker']}>
                                    <DateTimePicker
                                        label="בחר תאריך"
                                        disablePast={true}
                                        onChange={(data) => {
                                            setMeeting((prevService) => ({
                                                ...prevService,
                                                dateTime: data,
                                            }));
                                        }}                                   
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </DialogContent>
                        <DialogActions>
                            <Button type='submit'>make an appointment</Button>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </Fragment>
        </>
    );
})
export default addMeeting;