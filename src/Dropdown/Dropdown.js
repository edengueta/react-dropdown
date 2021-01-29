import React, { useRef, useEffect } from 'react';
import './Dropdown.css'

function Dropdown(props) {

    const ref = useRef();

    useEffect(() => {
        document.addEventListener("click", HandleOutsideClick);
    },[]);

    function HandleOutsideClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            if (props.isShown) props.onOutsideClick();
            console.log(props.onOutsideClick);
        }
    };
    
    return (
        <nav ref={ref} className="Dropdown">
            {props.children}
        </nav>
    );
}

export default Dropdown;