import React from "react";
import "./CurrentView.css"

function CurrentView(props) {
    return (
        <div className="currentBox">
            <div>
                <p className="placeName" >{props.placeName}</p> 
                <p>{props.date}</p>
            </div>
            <div className="placeTemp">
                <p className="currentIcon">{props.icon}</p>   
                <p className="currentTemp">{props.temp}</p>             
            </div>
        </div>    
    ) 
}

export default CurrentView;