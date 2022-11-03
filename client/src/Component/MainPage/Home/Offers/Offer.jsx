import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Offer({ index, src, icon, head, pera }) {

    return (
        <React.Fragment>
            <Container >
                <Card sx={{ width: 350, height: 250, my: "60px", boxShadow: 5}} >
                    <CardMedia
                        component="img"
                        height="130"
                        image={src}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {head}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {pera}
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </Container>
        </React.Fragment>
    );
}
