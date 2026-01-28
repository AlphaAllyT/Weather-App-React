import React from "react";

const box = {
    background: "hsl(243, 27%, 20%)",
    borderRadius: "15px",     
    width: "100%",
    height: "auto",
    margin: "20px 20px 30px 0",
    padding: "0"
}

function CurrentTemp(props) {
    return (
        <div style={box}>
            <p style={{margin: "15px"}}>{props.title}</p>
            <p style={{fontSize: "2rem", margin: "0 0 15px 15px"}}>{props.number}</p>
        </div>
    )

}

export default CurrentTemp;