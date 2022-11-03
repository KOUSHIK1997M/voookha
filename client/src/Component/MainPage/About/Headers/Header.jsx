import { Typography, Card } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import useStyles from './HeaderStyle'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const classes = useStyles();
    return (
        <Typography variant='div'>
            <Typography variant='div'>
                <Typography variant='div' style={{ position: "relative" }}>
                    <CardMedia
                        component="img"
                        width='100%'
                        height="250"
                        image='https://thumbs.dreamstime.com/b/vegetables-spices-ingredient-cooking-italian-food-black-wooden-old-board-rustic-style-76334485.jpg'
                        alt="green iguana"
                        sx={{ mt: '66px' }}
                    />
                    <Typography className={classes.slideText} sx={{ justifyContent: 'center' }}>
                        <h3 className={classes.headText}>About Us</h3>
                        <p className={classes.peraText}>This is .....About Us pages.</p>
                    </Typography>
                </Typography>
            </Typography>
            <Typography sx={{ mt: '25px' }} >
                <Card sx={{  width: '100%', height: '50px', boxShadow: 3 }}>
                    <Typography sx={{ml: '50px', fontSize: '23px', color:'black'}}>
                        <Link to='/home' underline="none">{'Home'}</Link>
                        <Link to='/about' underline="none">/{'About Us =>'}</Link>
                    </Typography>
                </Card>
            </Typography>
        </Typography>
    )
}
