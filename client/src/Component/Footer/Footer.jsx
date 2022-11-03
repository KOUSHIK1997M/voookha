import React from 'react'
import Fcard from './FCard';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Grid, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
import useStyles from './FoodStyle'


export default function Footer({ foonav }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography>
        <Typography className={classes.head} sx={{
          justifyContent: 'left',
          pl: '100px',
          backgroundColor: '#FFF3DC',
          display: { md: 'flex', lg: 'flex' }
        }}>
          <Grid sx={{ display: 'flex' }}>
            <Typography variant='div' sx={{ my: '20px', mx: '40px' }}>
              <ContactMailIcon name="ios-book" style={{ fontSize: 60, color: '#CC9D1D' }} />
            </Typography>
            <Typography variant='div' className=''>
              <h2 className=''>Get Updates & More</h2>
              <p className=''>Thoughtful thoughts to your inbox</p>
            </Typography>
          </Grid>
          <Grid sx={{ my: '20px' }}>
            <Typography variant='div' sx={{ ml: '200px', display: 'flex' }}>
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                // value={this.state.form_email}
                // onChange={this.handle_change('form_email')}
                margin="normal"
                sx={{ bgcolor: 'white' }}
              />
              <Button variant="contained" sx={{ my: '15px', white: '100px', height: '55px', color: '#CC9D1D' }}>SUBSCRIBE</Button>
            </Typography>
          </Grid>
        </Typography>
        <Typography className={classes.head} sx={{
          justifyContent: 'left',
          pl: '100px',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)',
          // border: 1,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        }}>
          <Grid
            sx={{ display: { sm: "none", md: "flex", lg: "flex" } }}
          >
            <Typography >
              <h3 className=''>NEED HELP?</h3>
              <Typography className=''>
                <label className=''>Call Us</label>
                <p className=''>+91 6296783642</p>
              </Typography>
              <Typography className=''>
                <label className=''>Email for Us</label>
                <p className=''>voookha@gmail.com</p>
              </Typography>
            </Typography>
            <Typography sx={{ mx: '50px' }}>
              <Typography variant='div' sx={{ display: { sm: { direction: "column", justifyContent: "left", alignItems: "center" }, md: "flex", lg: "flex" }, pl: '30px' }}>
                {foonav.map((item, index) => (
                  <Fcard key={item.image} index={index} hade={item.hade} hade1={item.hade1} link1={item.link1} hade2={item.hade2} link2={item.link2} hade3={item.hade3} link3={item.link3} />
                ))}
              </Typography>
            </Typography>
          </Grid>
        </Typography>
      </Typography>
      <Typography sx={{backgroundColor:'#d81b60'}}>
        <Typography variant='h7' sx={{ ml: '100px', color: 'black' }}>
          <label className=''>Copyright © 2022 by Voookha.com</label>
        </Typography>
      </Typography>

    </React.Fragment>
  )
}
