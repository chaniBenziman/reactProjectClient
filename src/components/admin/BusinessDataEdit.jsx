import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect,useState } from 'react';
import BusinessDataStore from '../../stores/BusinessDataStore';
import { observer } from 'mobx-react-lite';
const businessDataEdit=observer(({setisEdit })=> {
    const [BusinessData, setBusinessData] = useState({
        name: '',
        address: '',
        phone: '',
        owner: '',
        logo: '',
        description: ''
    });

      useEffect(() => {
        setBusinessData(BusinessDataStore.business);   // יבצע פעולה רק ברנדור הראשון
      }, []);
    const sendData =() => { 
        BusinessDataStore.business=BusinessData;
        BusinessDataStore.sendDataToServer(BusinessData);
        setisEdit(false);
        console.log(BusinessData)
    }
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setBusinessData({...BusinessData, [id]: value });
       
      };
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <TextField fullWidth label="name" id="name" value={BusinessData.name} onChange={handleInputChange} focused/>
            <br />
            <br />
            <TextField fullWidth label="adress" id="address" value={BusinessData.address} onChange={handleInputChange} focused/>
            <br />
            <br />
            <TextField fullWidth label="phone" id="phone" value={BusinessData.phone} onChange={handleInputChange} focused/>
            <br />
            <br />
            <TextField fullWidth label="owner" id="owner" value={BusinessData.owner} onChange={handleInputChange} focused/>
            <br />
            <br />
            <TextField fullWidth label="logo" id="logo" value={BusinessData.logo} onChange={handleInputChange} focused/>
            <br />
            <br />
            <TextField fullWidth label="description" id="description" value={BusinessData.description} onChange={handleInputChange} focused/>
            <br />
            <br />
            <Button size="small" color="primary" onClick={() => sendData()} >
                save
            </Button>
        </Box>
    );

})
export default businessDataEdit;