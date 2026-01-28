import React from "react";
import {InputLabel, MenuItem, ListSubheader, FormControl, Select, Divider } from "@mui/material";

function NavSelect() {
  // Style for the menu items inside the dropdown
  const menuItemStyles = {
    backgroundColor: "hsl(243, 27%, 20%)", // black
    color: "#fff", // white text
    "&:hover": {
      backgroundColor: "#222",
    },
    "&.Mui-selected": {
      backgroundColor: "hsl(243, 27%, 20%)",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#444",
    },
  };

  // MenuProps to style the Select dropdown itself
  const MenuProps = {
    PaperProps: {
      sx: {
        backgroundColor: "hsl(243, 27%, 20%)", // black background
        color: "#fff",
      },
    },
  };

  return (
    <div>
      <FormControl
        sx={{
          minWidth: 180,
          borderRadius: "10px",
          backgroundColor: "hsl(243, 27%, 20%)",
        }}
      >
        <InputLabel sx={{ color: "#fff" }} id="grouped-select-label">
          <img src="/images/icon-units.svg" alt="" style={{marginRight: "10px"}}/>Units
        </InputLabel>

        <Select
          labelId="grouped-select-label"
          defaultValue=""
          id="grouped-select"
          MenuProps={MenuProps}
          sx={{ color: "#fff" }} // text color in select
          label= '</> Units'
        >
          <MenuItem value="">
            <em>Switch to Imperial</em>
          </MenuItem>

          <ListSubheader sx={{ backgroundColor: "hsl(243, 27%, 20%)", color: "#ffffff85" }}>
            Temperature
          </ListSubheader>
          <MenuItem sx={menuItemStyles} value={1}>
            Celsius (°C)
          </MenuItem>
          <MenuItem sx={menuItemStyles} value={2}>
            Fahrenheit (°F)
          </MenuItem>

          <Divider sx={{ borderColor: "#444" }} />

          <ListSubheader sx={{ backgroundColor: "hsl(243, 27%, 20%)", color: "#ffffff85" }}>
            Wind Speed
          </ListSubheader>
          <MenuItem sx={menuItemStyles} value={3}>
            km/h
          </MenuItem>
          <MenuItem sx={menuItemStyles} value={4}>
            mph
          </MenuItem>

          <Divider sx={{ borderColor: "#444" }} />

          <ListSubheader sx={{ backgroundColor: "hsl(243, 27%, 20%)", color: "#ffffff85" }}>
            Precipitation
          </ListSubheader>
          <MenuItem sx={menuItemStyles} value={5}>
            Millimeters (mm)
          </MenuItem>
          <MenuItem sx={menuItemStyles} value={6}>
            Inches (in)
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default NavSelect;
