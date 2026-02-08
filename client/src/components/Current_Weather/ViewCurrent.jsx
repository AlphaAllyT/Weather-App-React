import React from "react";
import "./CurrentView.css"

function CurrentView(props) {
    return (
        <div className="currentBox">
            <div>
                <p style={{fontSize: "2rem", fontWeight: "bold"}}>{props.placeName}</p> 
                <p>{props.date}</p>
            </div>
            <div style={{display:"flex"}}>
                <p style={{padding: "60px 40px", fontSize: "4rem"}}>{props.icon}</p>
                <p style={{fontSize: "6rem"}}>{props.temp}</p>p
            </div>
        </div>    
    ) 
}

export default CurrentView;