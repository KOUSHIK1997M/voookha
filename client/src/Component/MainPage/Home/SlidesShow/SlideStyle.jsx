// import * as React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
    slides: {
        width: "100%",
        height: "auto",
        maxHeight: "75vh",
        minHeight: '40vh',
        overflow: "hidden",
        maxWidth: "100%",
        verticalAlign: "middle",

    },
    slideBar: {
        mt: "10px"
    },
    slideText: {
        position: "absolute",
        color: "black",
        top: 50,
        left: 40,
        // transform: "translateX(-50%)"
    },

    headText: {
        color: "yellowgreen",
        fontSize: '2.2rem',
        '@media (min-width:500px)': {
          fontSize: '2.5rem',
        },
        '@media (max-width:600px)': {
            fontSize: '1.4rem',
          },
    },
    peraText: {
        color: "blue",
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        }
    }
}))

export default useStyles;