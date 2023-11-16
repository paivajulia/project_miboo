import React from "react";
import Miboologo from "../../assets/images/Miboo.png";
import "./header.css";

function HeaderComp() {
    return(
        <div className="header-container">
            <img className="header-logo-img" src={Miboologo} alt ="Miboo logo"/>

        </div> 
    )
}
export default HeaderComp