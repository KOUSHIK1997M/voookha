import React from 'react'
import { Typography } from "@mui/material";
import Headers from './Headers/Header'
import AboutBody from './Body/Body'

function About() {
  return (
    <React.StrictMode>
      <Typography >
      <Headers/>
      <AboutBody/>
      </Typography>
    </React.StrictMode>
  )
}
export default About;