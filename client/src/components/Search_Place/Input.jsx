import React, {useState} from "react";
import {Button, InputAdornment} from '@mui/material';

import "./input.css"

function Input({onSearch}) {

const [inputValue, setinputValue] = useState("");

function handleSubmit(event){ 
    event.preventDefault();
    setinputValue("");
    console.log(inputValue);
    onSearch(inputValue);
};

    return(
        <form onSubmit={handleSubmit} className="formStyle" >
            <h1>How's the sky looking today?</h1>
            <input 
                className="inputStyle"                
                placeholder= "🔍︎ Search for a place...."                
                type="text"                  
                value={inputValue}
                onChange={input=>setinputValue(input.target.value)}                
            />
            <Button variant="contained" type="submit" size="medium" className="buttonChange">Search</Button>
        </form>
    )
};

export default Input;