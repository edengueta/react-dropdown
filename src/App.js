import { useState } from 'react';
import './App.css';
import Dropdown from './Dropdown/Dropdown';
import DropdownButton from './Dropdown/DropdownButton/DropdownButton';
import DropdownItem from './Dropdown/DropdownMenu/DropdownItem/DropdownItem';
import DropdownMenu from './Dropdown/DropdownMenu/DropdownMenu';

function App() {
  const [isShown, setShown]= useState(false);


  return (
    <div className="App">
      <Dropdown isShown={isShown} onOutsideClick={()=> setShown(false)} >
        <DropdownButton onClick={()=> setShown(!isShown)}>Dropdown button</DropdownButton>
        <DropdownMenu isShown={isShown}>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </div>
  );
}

export default App;
