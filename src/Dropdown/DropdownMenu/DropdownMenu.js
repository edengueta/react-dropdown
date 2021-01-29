import React, { useRef, useEffect } from 'react';
import './DropdownMenu.css';

function DropdownMenu(props) {

    return (
        props.isShown &&
        <ul className="DropdownMenu">
            {props.children}
        </ul>
    );
}

export default DropdownMenu;