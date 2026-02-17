import react from "react";
import NavSelect from "./NavbarDrop";

import "./navbarStyle.css";

function NavbarControl() {
    return(
        <div className="navStyle">
            <div className="logo">
                <img src="/images/logo.svg" alt="Weather now logo"/>
            </div>
            <div className="navSelect" >
                <NavSelect />
            </div>
        </div>
    )
}

export default NavbarControl;