import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { ButtonGroup, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'; //import for styles and themes
import React from 'react';
import { orange, purple } from '@material-ui/core/colors';
import 'fontsource-roboto'; //importing fonts, this is a google font, so we need to import it from google
import Typography from '@material-ui/core/Typography'; //this is required for the better moving and typography of the page
import Container from '@material-ui/core/Container'; //containers for MUI
import Paper from '@material-ui/core/Paper'; //helps in seeing the grid for MUI a bit better
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({ //this makes it so that you can simply make calls for stuff that needs to be styled, without the use of css
  root: { //make sure that you add in this root component
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
    background: 'linear-gradient(45deg, #FFA69E, #861657)'
  }
}) //and remember, this entire thing is a const, so its getting called within a function, so remember the ending normal bracket

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
    h2: {
      fontSize: 36,
      marginBottom: 15, //this is how you change the typography of the page, and then you can call it within the typography component
    }
  }
})

//now to give some font stuff, we need to install the damn thing first
//so, choosing roboto for the font, we need to install it into the environment
//as always, if there's a version mismatch, then just add in --force to the end of the command

function ButtonStyled() { //then you can make whatever you want to use it for a function, and then call it within the return statement
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button> //like so, i wanted a button styled, so i used it to call a button, just remember to add in a classname call using classes.root
}

function CheckBoxExample() { //all functions that use react in this manner must have the first letter of the function capitalized, otherwise its meant for something else entirely
  
  const [checked, setChecked] = React.useState(true); //gotta import react into this thing lmao
  
  return (
    <div>
      <FormControlLabel control={
        <Checkbox //to pass in a label, we need a wrapper that allows labels into the checkbox, so if we need that, we need to use the FormControlLabel component
        checked = {checked}
        onChange = {(e) => setChecked(e.target.checked)}
        icon={<DeleteIcon />}
        checkedIcon={<SaveIcon />}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }} //for inputs other than the default ones, something to take note of when using checkboxes
        ></Checkbox>} //checkbox within braces, and the label goes outside
        //basically the entire checkbox manifold goes into the props of the form control label

      label = "Testing Checkbox"
      />
      
    </div>
  )
}

function App() {
  return ( 
    <ThemeProvider theme={theme}> {/*this is how you use the theme provider, and then you can call the theme within the theme provider*/} {/*btw is you're wondering what's up with the curly braces, then in the return component of this, you can only comment like this, otherwise it'll show up in the website */}  
    <Container maxWidth='lg' >
    <div className="App">
      <header className="App-header">
        <Typography variant="h2" component="div" >Welcome to MUI</Typography>
        <Typography variant="subtitle1">Learn how to use Material UI</Typography>
        {/*<ButtonStyled style={{padding: 15}}/>*/}
        <TextField
        variant="outlined" //gives it a wrapped look
        outline="outlined" //gives it a border
        color="secondary" //changes the color of the outline
        type='email' //changes the type of input (also getes a dropdown for the date)
        label="Email" //remains in the background as you're typing, while the placeholder disappears
        placeholder="test@test.com"
        ></TextField>

        <Grid container spacing={4} justify="center"> {/*this element is the grid container, which specifies grid objects within it, and adds in styling for everything underneath it, pretty useful*/}
        <Grid item xs={12} xl={6} sm={6} > {/*this is the grid item, which is the actual grid object, and it can be used to specify the size of the grid object, and other things*/}
          <Paper style={{height:75, width:'100%',}}></Paper>
        </Grid>
        <Grid item>
          <Paper style={{height:75, width:50,}}></Paper>
        </Grid>
        <Grid item>
          <Paper style={{height:75, width:50,}}></Paper>
        </Grid>
        </Grid>
        
        <CheckBoxExample />
        <ButtonGroup>
          <Button variant='contained' color='primary' style={{fontSize: 25}} startIcon={<SaveIcon />}>Save As</Button>
          <Button variant='contained' color='secondary' style={{fontSize: 25}} startIcon={<DeleteIcon />}>Discard</Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
