import React from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const SnackBar = ({ changesnack, message, color }) => {

    const vertical = 'top';
    const horizontal = 'right';

    const handleClose = () => {
        changesnack(false);
    };

    return (
        <Box>
            <Snackbar sx={{ marginTop: '4rem', marginRight: '2rem' }} anchorOrigin={{ vertical, horizontal }} open={true} key={vertical + horizontal} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default SnackBar