import React from "react";

const box = {
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    backgroundImage: "url('/images/bg-today-large.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
    padding: "20px 50px",
    maxWidth: "100%",
    height: "200px",    
    margin: "0 20px 0 0",  
}

function CurrentView(props) {
    return (
        <div style={box}>
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