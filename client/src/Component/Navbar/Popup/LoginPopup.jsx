import { Grid, Typography, TextField, Button, Box, InputAdornment } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import useStyles from '../NavStyle'

export default function LoginPopup() {
  const classes = useStyles();
  return (
    <div>
      <Typography>
        <Box
          component="form"
          noValidate
          autoComplete="on"
        >
          <Typography>
            <Grid sx={{ mt: '25px' }}>
              <TextField
                required
                id="outlined-required"
                type="email"
                fullWidth
                label="email"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment container justifyContent="flex-end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid sx={{ mt: '25px' }}>
              <TextField
                fullWidth
                required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment container justifyContent="flex-end">
                        <KeyIcon />
                      </InputAdornment>
                    ),
                  }}
              />
            </Grid>
          </Typography>
          <Grid sx={{mt:'25px', display:'flex'}} >
            <FormControlLabel control={<Checkbox defaultChecked />} label=" Remember me" />
            <Link to='/passForgot' underline="none">Forgot Password?</Link>
          </Grid>
          <Grid sx={{ mt: '20px' }}>
            <Button variant="contained" className={classes.button} sx={{ width: '100%', height: '50px', color:'black'}}>Login</Button>
          </Grid>
          <Grid container sx={{ mx: '30px', mt: '20px' }}>
            <Typography>Do not have an account?{<Link to='/signup'>Sign Up</Link>}</Typography>
          </Grid>
        </Box>
      </Typography>
    </div>
  )
}
