import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { getWeather } from '../../public/js/helper';

export default function Search({ updateInfo, errInfo }) {

    const [city, setCity] = useState("");

    let handleInpChange = (e) => {
        setCity(e.target.value);
    }

    let handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            let newInfo = await getWeather(city);
            updateInfo(newInfo);
            errInfo(false);
            setCity("");
        } catch (error) {
            console.log(error);
            errInfo(true);
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={city} onChange={handleInpChange} required />
            <br />
            <br />
            <Button variant="contained" endIcon={<SendIcon />} type='submit'>
                Search
            </Button>
        </form>
    )
}