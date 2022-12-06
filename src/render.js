import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'; 
import React, { useEffect, useState , Component} from 'react';
import { orange, purple } from '@material-ui/core/colors';
import 'fontsource-roboto';
import { Container ,AppBar,Toolbar,IconButton,Typography,TableContainer,Table,TableHead,TableRow,TableCell,TableBody} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({ 
  root: { 
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
    background: 'linear-gradient(45deg, #FFA69E, #861657)'
  }
})


 const theme = createTheme
 (
  { 
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
 }
)
 
const ButtonStyled=()=>
{ 
  const classes = useStyles()
  return <Button className={classes.root}  onClick={() => { 




    
   }}>Delete</Button>
}

 const createData=(bloodbank, patientNO, TIME, bloodgroup,date)=> 
 {
  return { bloodbank, patientNO, TIME, bloodgroup,date };
 }
 const row = [
  createData("RBC bloodbank", 5, "21:00","O+","03/01/22"),
  createData("DONERS bloodbank", 8, "21:00","O+","04/05/22"),                                                                                                                 
  createData("LIFE SAVER", 9, "21:00","O+","06/08/22"),
  createData("ONE DROP", 15, "21:00","O+","15/11/22"),
  createData("GOD'S PLAN", 7, "21:00","O+","30/01/23")
 ]; 

class Apple extends React.Component 
{
  constructor()
  {
    super()

    this.state = {
      bloodbank:'',
    patientNO: '',
    time: '',
    bloodgroup:'' ,
    date: '',
    safe: []
    }
  }
  render()
    {
      return ( 
        <ThemeProvider theme={theme}> 
        <Container maxWidth='lg' >
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary"> 
              <Toolbar color="primary"> 
                <IconButton color="primary"> 
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h6"> 
                  APPOINTMENTS
                </Typography>
              </Toolbar>
            </AppBar>
            <Typography variant="h10" component="div" >
            <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>BLOODBANK</TableCell>
                <TableCell align="right">PATIENT NO</TableCell>
                <TableCell align="right">TIME</TableCell>
                <TableCell align="right">BLOOD GROUP</TableCell> 
                <TableCell align="right">DATE</TableCell>
                <TableCell align="right"> OPTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((row) => (
                <TableRow key={row.number}>
                  <TableCell>{row.bloodbank}</TableCell>
                  <TableCell align="right">{row.patientNO}</TableCell>
                  <TableCell align="right">{row.TIME}</TableCell>
                  <TableCell align="right">{row.bloodgroup}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <ButtonStyled align="right" style={{padding: 15}} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Typography>
          </header>
        </div>
        </Container>
        </ThemeProvider>
      );
    }
  }
export default Apple;