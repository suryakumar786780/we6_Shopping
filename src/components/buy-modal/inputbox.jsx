import { TextField } from '@mui/material'
import React from 'react'

const InputBox = ({ lname, widthLen }) => {
    return (
        <div style={{width:widthLen}}>
            <p style={{marginBottom:'5px'}}>{lname}</p>
            <TextField variant="outlined" size='small' sx={{width:'100%'}} placeholder={`Enter your ${lname}`}/>
        </div>
    )
}

export default InputBox