import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const LoaderComp = () => {
  return (
    <Box sx={{
      display:'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '100%',
      marginTop: '7rem',
    }}>
      <CircularProgress sx={{ height: '44px !important', width: '44px !important', color:'white' }} />
    </Box>
  )
}

export default LoaderComp