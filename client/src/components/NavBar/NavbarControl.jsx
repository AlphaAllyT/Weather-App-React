import react from "react";
import NavSelect from "./NavbarDrop";

function NavbarControl() {
    return(
        <div style={{display: "flex", justifyContent: "space-between", padding: "50px 20px 0 20px"}}>
            <div>
                <img src="/images/logo.svg" alt="Weather now logo" />
            </div>
            <div>
                <NavSelect />
            </div>
        </div>
    )
}

export default NavbarControl;