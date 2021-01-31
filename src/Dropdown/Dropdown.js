import React, { useRef, useEffect } from 'react';

function Dropdown(props) {

    const ref = useRef();

    useEffect(() => {

        document.addEventListener("click", HandleOutsideClick);
        return () => document.removeEventListener("click", HandleOutsideClick);

    }, [HandleOutsideClick] );

    function HandleOutsideClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            if (props.isShown) props.onOutsideClick();
        }
    };
    
    return (
        <nav ref={ref}>
            {props.children}
        </nav>
    );
}

export default Dropdown;