import React from 'react'
import './NotFound.css'
import { Box, Typography } from '@mui/material'

export default function NotFound() {
  return (
    <>
      <Box sx={{ mt: 14 }} className='font '>
        <div className='font d-flex justify-content-center'>
          <img src="/Images/404.png" className='' height='400px' alt="" />
        </div>
        <div className='font d-flex justify-content-center'>
          <Typography >404 Page Not Found ...</Typography>
        </div>
      </Box>
    </>
  )
}
