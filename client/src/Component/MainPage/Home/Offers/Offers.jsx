import React from 'react'
import Offer from './Offer'
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import useStyles from './OfferStyle'

export default function Offers({ offer }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.offerCard}  spacing={2.5}>
      <Grid sx={{
        display: {sm: 'none', xs: 'block', md: 'flex', lg: 'flex' }
      }}>
        {offer.map((item, index) => (
          <Offer key={item.image} index={index} icon={item.icon} src={item.image} head={item.hade} pera={item.pera} />
        ))}
      </Grid>

    </Grid>
  )
}

