import { Button, Checkbox, TextField } from "@mui/material"
import React, { useEffect, useState } from "react"

function Add() {
    // const [inputs , setInputs] = useState([]);


    return(
        <>
        <div>helo</div>
         <TextField id="outlined-basic" label="description" variant="outlined" name="description"  /><br/><br/>
         <TextField id="outlined-basic" label="status" variant="outlined" name="status"  /><br/><br/>
         
        <Button variant="contained">Submit</Button>  
        </>
    )
}
    export default  Add
