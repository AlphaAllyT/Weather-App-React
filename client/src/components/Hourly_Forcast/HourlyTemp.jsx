import React from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

const box = {
    background: "hsl(243, 23%, 24%)",
    borderRadius: "15px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto auto",
    width: "100%",
    height: "480px",   
    marginTop: "20px"
};

function HourlyTemp({hourlyTemp}) {
    return (
        <Box style={box}>
            <List style={{overflowY: "auto", width: "450px"}}>
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