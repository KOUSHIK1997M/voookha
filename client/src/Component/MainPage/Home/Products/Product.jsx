import * as React from 'react';
import PCard from './PCard'
import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import useStyles from '../Offers/OfferStyle'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';


export default function Heding({ product }) {

    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                    <Grid   sx={{my:'50px'}}>
                        <Typography variant="h5" component="div">
                            Choose subscription
                        </Typography>
                        <Typography variant="p" component="div">
                            choose your comfortable subscription
                        </Typography>
                    </Grid>
                    <Grid container className={classes.offerCard} sx={{mb:'80px'}}  spacing={2.5} >
                        <Grid sx={{
                            display: { sm: 'none', xs: 'block', md: 'flex', lg: 'flex' }
                        }}>
                            {product.map((item, index) => (

                                <PCard key={item.image} index={index} hade={item.hade} src={item.image} revies={item.revies} reting={item.reting} price={item.price} />

                            ))}
                        </Grid>
                    </Grid>
            </Container >
        </React.Fragment>

    )
}
