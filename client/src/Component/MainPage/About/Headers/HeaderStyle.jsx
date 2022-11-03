// import * as React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
    slideText: {
        position: "absolute",
        color: "black",
        top: 50,
        left:250,
        // transform: "translateX(50%)"
    },

    headText: {
        color: "black",
        // color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)',
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
        // transform: "translateX(-50%)",
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        }
    }
}))

export default useStyles;