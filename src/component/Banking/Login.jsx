import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export const Login=()=>{
    const [custId,setCustId]=useState(0);
    const [password,setPassword]=useState('');

    const handleLogin=async()=>{
        const payload={
            custId,password,
        };
        const result=await axios.post("http://localhost:7500/login",payload);
        console.log(result.data);
    }

    return(
        <React.Fragment>
           <Grid container spacing={3}>
            <Grid item xs={3}>
                <TextField variant="outlined" onChange={e=>setCustId(e.target.value)} label="Customer ID" fullWidth/>
            </Grid>
            <Grid item xs={3}>
                <TextField variant="outlined" onChange={e=>setPassword(e.target.value)} type="password" label="Password" fullWidth/>
            </Grid>
            <Grid item xs={3}>
            <Button variant="contained" onClick={handleLogin} fullWidth>Login</Button>
            </Grid>
            <Grid item xs={3}>
            <Button variant="contained" fullWidth>Cancel</Button>
            </Grid>
           </Grid>
        </React.Fragment>
    )
}