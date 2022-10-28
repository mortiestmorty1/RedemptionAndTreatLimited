
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'; //import for styles and themes
import React, { useEffect, useState , Component} from 'react';
import { orange, purple } from '@material-ui/core/colors';
import 'fontsource-roboto'; //importing fonts, this is a google font, so we need to import it from google

 //and remember, this entire thing is a const, so its getting called within a function, so remember the ending normal bracket



//now to give some font stuff, we need to install the damn thing first
//so, choosing roboto for the font, we need to install it into the environment
//as always, if there's a version mismatch, then just add in --force to the end of the command

const useStyles = makeStyles({ //this makes it so that you can simply make calls for stuff that needs to be styled, without the use of css
  root: { //make sure that you add in this root component
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
    background: 'linear-gradient(45deg, #FFA69E, #861657)'
  }
})


 const theme = createTheme({ //this is how you create a theme, and then you can use it within the theme provider
  palette: { //is how colors are changed
    primary: { //the changing of the primary color in this 
      main: orange[300], //and then the values of the color that you want to change, with the weight of the color in the braces
    },
    secondary: {
      main:purple[500], //secondary
    }
  },
  typography: {
    h4: {
      fontSize: 42,
      marginBottom: 30, //this is how you change the typography of the page, and then you can call it within the typography component
    }
  }
})
 
const ButtonStyled=()=>{ //then you can make whatever you want to use it for a function, and then call it within the return statement
  const classes = useStyles()
  return <Button className={classes.root}>Delete</Button> //like so, i wanted a button styled, so i used it to call a button, just remember to add in a classname call using classes.root
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


class App extends React.Component() {
  constructor(){
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
        <ThemeProvider theme={theme}> {/*this is how you use the theme provider, and then you can call the theme within the theme provider*/} {/*btw is you're wondering what's up with the curly braces, then in the return component of this, you can only comment like this, otherwise it'll show up in the website */}  
        <Container maxWidth='lg' >
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary"> {/*add in the app bar at the top, and then you can add in the color of the app bar*/}
              <Toolbar color="primary"> {/*add in the toolbar, and then you can add in the color of the toolbar*/}
                <IconButton color="primary"> {/*add in the icon button, and then you can add in the color of the icon button*/}
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6"> {/* this specifies what font size we want out menu text to be, an h6 is nice for this one*/}
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
              {rows.map((row) => (
                <TableRow key={row.number}>
                  <TableCell>{row.bloodbank}</TableCell>
                  <TableCell align="right">{row.patientNO}</TableCell>
                  <TableCell align="right">{row.TIME}</TableCell>
                  <TableCell align="right">{row.bloodgroup}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <ButtonStyled align="right" style={{padding: 15}} onClick={deleteRow(row.number)}/>
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
}

export default App;