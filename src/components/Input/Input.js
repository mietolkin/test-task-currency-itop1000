import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Input(props) {
    
    const {value, setValue, currencies} = props;
    const [flag, setFlag] = useState('')
    
    const handleChange = (event) => {
      switch (event.target.value){ 
        case 'πΊπΈ': setValue("USD"); setFlag('πΊπΈ'); break;
        case 'πͺπΊ': setValue("EUR");  setFlag('πͺπΊ'); break;
        case 'π¨π³': setValue("CNY"); setFlag( 'π¨π³'); break;
        case 'πΊπ¦': setValue("UAH"); setFlag( 'πΊπ¦'); break;
      }
    };

    return (
        <div style={{width: '120px'}}>
      <Box sx={{ m: 1, minWidth: 120 }} size="big">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select curency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={flag}
            label="Age"
            onChange={handleChange}
          >
            {currencies.map((data) => (
                <MenuItem key={data.id} value={data.currency}>
                    {data.currency}
                </MenuItem>
            ))}
            {/* <MenuItem value={10}>πΊπΈ</MenuItem>
            <MenuItem value={20}>πͺπΊ</MenuItem>
            <MenuItem value={30}>π¨π³</MenuItem>
            <MenuItem value={40}>πΊπ¦</MenuItem> */}
          </Select>
        </FormControl>
      </Box>

        </div>
    );
}

export const MemoizedInput = React.memo(Input);
