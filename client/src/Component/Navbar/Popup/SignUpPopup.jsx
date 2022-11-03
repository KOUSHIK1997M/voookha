import { Grid, Typography, TextField, Button, Link, Box, InputAdornment } from '@mui/material'
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useStyles from '../NavStyle'


export default function SignUpPopup() {
    const classes = useStyles();
    return (
        <Typography>
            <Box
                component="form"
                noValidate
                autoComplete="on"
            >
                <Typography>
                    <Grid container spacing={2} sx={{ pt: '10px' }}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="filled-required"
                                label="First Name"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment container justifyContent="flex-end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="filled-required"
                                label="Last Name"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment container justifyContent="flex-end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                </Typography>
                <Typography>
                    <Grid sx={{ mt: '15px' }}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            type="number"
                            label="phone"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment container justifyContent="flex-end">
                                        <PhoneIphoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid sx={{ mt: '15px' }}>
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
                    <Grid container spacing={2} sx={{ pt: '10px' }}>
                        <Grid item xs={6}>
                            <TextField
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
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="outlined-password-input"
                                label="confirm Password"
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
                    </Grid>
                </Typography>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label=" I have read and accept the Terms and Privacy Policy" />
                </FormGroup>
                <Grid sx={{ mt: '10px' }}>
                    <Button variant="contained" className={classes.button} sx={{width:'100%', height:'50px', color:'black'}}>Sign Up</Button>
                </Grid>
                <Grid sx={{mx:'30px', mt:'20px'}}>
                    <Typography>Already have an account?{<Link to='/login'>Log In</Link>}</Typography>
                </Grid>
            </Box>
        </Typography>
    )
}
