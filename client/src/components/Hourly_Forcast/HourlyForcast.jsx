import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";


function HourlyForcast({ days, selectedDay, setSelectedDay }) { 

  const menuItemStyles = {
    backgroundColor: "hsl(243, 27%, 20%)",
    color: "white",
    "&:hover": { backgroundColor: "#2a2a2a" },
    "&.Mui-selected": { backgroundColor: "#333" },
    "&.Mui-selected:hover": { backgroundColor: "#444" },
  };

  const MenuProps = {
    PaperProps: {
      sx: {
        backgroundColor: "hsl(243, 27%, 20%)",
        color: "#fff",
      },
    },
  };


  return (
    <FormControl size="small">
      <Select
        displayEmpty
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
        MenuProps={MenuProps}
        sx={menuItemStyles}
      >
        <MenuItem value="">
          Choose a day
        </MenuItem>

        {days.map(day => (
          <MenuItem key={day} value={day} sx={menuItemStyles}>
            {day}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default HourlyForcast;
