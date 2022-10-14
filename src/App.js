import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { ButtonGroup, FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';

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
    <div className="App">
      <header className="App-header">

        <CheckBoxExample />

        <ButtonGroup>
          <Button variant='contained' color='primary' style={{fontSize: 25}} startIcon={<SaveIcon />}>Save As</Button>
          <Button variant='contained' color='secondary' style={{fontSize: 25}} startIcon={<DeleteIcon />}>Discard</Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />



      </header>
    </div>
  );
}

export default App;
