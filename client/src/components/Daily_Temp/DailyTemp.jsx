import React from "react";
import "./dailyTemp.css";

function DailyTemp({day, temp, wind, icon}) {
    return (
        <div className="dailyTempBox">
            <div style={{textAlign: "center"}}>
                <p>{day}</p>
            </div>
            <div className="dailyIcon">
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