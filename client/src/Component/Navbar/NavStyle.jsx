// import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px',
    transition: {

    }
  },
  appBar:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: 65
  },
  navlink:{
    color: 'black',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    hover:{
      color: 'white'
    }
    },
    loginStyle:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      height: 500,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    },
    signUpStyle:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      height: 500,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    },
    button:{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      padding: '0 30px',
      transition: {
  
      } 
    }
});

export default useStyles;