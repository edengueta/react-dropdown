import React from 'react';
import './DropdownItem.css'

function DropdownItem(props) {
    return (
        <li className='DropdownItem'>
            {props.children}
        </li>
    );
}

export default DropdownItem;