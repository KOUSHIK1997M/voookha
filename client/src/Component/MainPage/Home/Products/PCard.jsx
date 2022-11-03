import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function PCard({ hade, link, index, src, revies, reting, price }) {
    return (
        <React.Fragment>
            <Container >
                <Card sx={{
                    height: "280px",
                    width: '350px',
                    boxShadow: 5
                }} >
                <CardMedia
                    component="img"
                    height="150"
                    image={src}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {hade}
                        <ShareIcon sx={{ justifyContent: "left", mx: "41px", color: 'chocolate' }} />
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Reting:-{reting}-Price:₹{price}
                        <Button to={link} sx={{ justifyContent: "left", ml: '15px', color: 'chocolate' }} variant="contained">View</Button>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
        </React.Fragment >
    )
}
