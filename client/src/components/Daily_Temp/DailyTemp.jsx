import React from "react";

const box = {
    background: "hsl(243, 27%, 20%)",
    borderRadius: "15px",
    width: "100%",
    padding: "5px 15px 5px 15px",
    marginRight: "20px"
};


function DailyTemp({day, temp, wind, icon}) {
    return (
        <div style={box}>
            <div style={{textAlign: "center"}}>
                <p>{day}</p>
            </div>
            <div style={{textAlign: "center"}}>
                <p>{icon}</p>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <p>{temp}</p>
                <p>{wind}</p>
            </div>
        </div>
    )
}

export default DailyTemp;