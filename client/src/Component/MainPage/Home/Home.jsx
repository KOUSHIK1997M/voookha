import React from "react";
import { Typography } from "@mui/material";
import Slides from "./SlidesShow/slidde";
import data from '../../../LocalData/data.json'
import useStyles from './Style'
// import Offers from './Offers/Offers'
import Product from './Products/Product'


function Home() {
  const classes = useStyles();
  return (
    <React.StrictMode>
      <Typography >
        <Slides className={classes.slideBar} items={data.Slideitems} />
        {/* <Offers  className={classes.offer} offer={data.offers} /> */}
        <Product  className={classes.offers} product={data.pakeges} />
      </Typography>
    </React.StrictMode>

  )
}

export default Home;