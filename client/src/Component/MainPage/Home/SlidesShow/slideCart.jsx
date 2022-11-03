import { Paper, Typography, CardMedia } from '@mui/material'
import useStyles from './SlideStyle'


function Item({ title, description, images }) {
    const classes = useStyles();
    return (
        <Paper sx={{ mt: '58px' }}  >
            <div style={{ position: "relative" }}>
                <CardMedia alt={title} className={classes.slides} component="img" image={images} />
                <Typography className={classes.slideText}>
                    <h3 className={classes.headText}>{title}</h3>
                    <p className={classes.peraText}>{description}</p>
                </Typography>
            </div>
        </Paper>
    )
}

export default Item;