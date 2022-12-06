
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'; 
import React, { useEffect, useState , Component} from 'react';
import { orange, purple } from '@material-ui/core/colors';
import 'fontsource-roboto'; 
import Apple from './render';

const useStyles = makeStyles({ 
  root: {
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
    background: 'linear-gradient(45deg, #FFA69E, #861657)'
  }
})


 const theme = createTheme({ 
  palette: { 
    primary: { 
      main: orange[300],
    },
    secondary: {
      main:purple[500], 
    }
  },
  typography: {
    h4: {
      fontSize: 42,
      marginBottom: 30, 
    }
  }
})
 
const ButtonStyled=()=>{ 
  const classes = useStyles()
  return <Button className={classes.root}>Delete</Button>
}

 const createData=(bloodbank, patientNO, TIME, bloodgroup,date)=> {
  return { bloodbank, patientNO, TIME, bloodgroup,date };
 }
 
const deleteRow = (e) => {
  var rows = [
  createData("RBC bloodbank", 5, "21:00","O+","03/01/22"),
  createData("DONERS bloodbank", 8, "21:00","O+","04/05/22"),                                                                                                                 
  createData("LIFE SAVER", 9, "21:00","O+","06/08/22"),
  createData("ONE DROP", 15, "21:00","O+","15/11/22"),
  createData("GOD'S PLAN", 7, "21:00","O+","30/01/23")
 ];
}

const App = () => {
  return (

    <div><Apple/></div>
  );
}

export default App;