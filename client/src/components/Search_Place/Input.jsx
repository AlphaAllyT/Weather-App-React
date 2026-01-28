import React, {useState} from "react";
import {Button, InputAdornment} from '@mui/material';

function Input({onSearch}) {

const [inputValue, setinputValue] = useState("");

const buttonChange ={ backgroundColor: "hsl(233, 67%, 56%)", color: "hsl(0, 0%, 100%)", "&:hover": {backgroundColor: "hsl(248, 70%, 36%)"}}

function handleSubmit(event){ 
    event.preventDefault();
    setinputValue("");
    console.log(inputValue);
    onSearch(inputValue);
};

    return(
        <form onSubmit={handleSubmit} style={{textAlign: "center", padding: "0 0 60px 0"}}>
            <h1 style={{fontSize: "3rem"}}>How's the sky looking today?</h1>
            <input 
                style={{width: "400px", height: "33px", marginRight: "10px", borderRadius: "5px", paddingLeft: "20px"}}
                placeholder= "🔍︎ Search for a place...."                
                type="text"                  
                value={inputValue}
                onChange={input=>setinputValue(input.target.value)}                
            />
            <Button variant="contained" type="submit" size="medium" sx={buttonChange}>Search</Button>
        </form>
    )
};

export default Input;