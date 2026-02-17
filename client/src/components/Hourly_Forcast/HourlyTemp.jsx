import React from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

import "./HourlyForcast.css"

function HourlyTemp({hourlyTemp}) {
    return (
        <Box className= "hourlyBox">
            <List style={{overflowY: "auto", width:"200%"}}>
                {hourlyTemp.map((item, index) => (
                    <ListItem key={index}>
                    <ListItemText
                        style={{display: "flex", justifyContent: "space-between", width: "400px"}}
                        primary={`${item.icons}`+" "+`${item.hour}:00`}
                        secondary={`${item.temp}°`}                        
                        primaryTypographyProps={{ style: { color: "white", fontWeight: "bold" } }}
                        secondaryTypographyProps={{ style: { color: "white", fontSize: "18px" } }}
                    />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
 
export default HourlyTemp;