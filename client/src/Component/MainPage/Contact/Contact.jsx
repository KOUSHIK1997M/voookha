import React from 'react'
import { Typography } from "@mui/material";
import Headers from './Headers/Header'
import CotactBody from './Body/Body'

function Contact() {
  return (
    <React.StrictMode>
      <Typography >
      <Headers/>
      <CotactBody/>
      </Typography>
    </React.StrictMode>
  )
}
export default Contact;

