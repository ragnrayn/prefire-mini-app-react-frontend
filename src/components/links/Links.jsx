import React from "react";
import { useNavigate } from "react-router-dom";
import "./Links.css";


function Links(position, route) {

    const navigate = useNavigate();

    const handleClick = (goTo) => {
        console.log(goTo);
    }

    return(
        <>
            <button className="link-btn" type="button" onClick={() => handleClick(route)}></button>
        </>
    )
}

export default Links;