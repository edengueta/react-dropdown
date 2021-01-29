import React from 'react';
import './DropdownButton.css'

function DropdownButton(props) {
    return (
        <button className='DropdownButton' onClick={props.onClick}>
            {props.children}<span className='arrow-down'></span>
        </button>
    );
}

export default DropdownButton;