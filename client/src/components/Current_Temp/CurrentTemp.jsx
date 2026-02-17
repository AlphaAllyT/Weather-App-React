import React from "react";

import "./currentTemp.css"

function CurrentTemp(props) {
    return (
        <div className="tempBox">
            <p className="tempTitle">{props.title}</p>
            <p className="tempNumber">{props.number}</p>
        </div>
    )

}

export default CurrentTemp;