import { Grid } from "@mui/material";
import React from "react";
import { NavItem } from "./NavItem";

export const Nav=()=>{
    return(
        <div className="nav">
            <Grid container spacing={1}>
            <NavItem path="/" title="Home" xs={1}/>
            <NavItem path="/banking" title="Banking" xs={1}/>
            <NavItem path="/card" title="Cards" xs={1}/>
            <NavItem path="/loan" title="Loans" xs={1}/>
            <NavItem path="/support" title="Supports" xs={1}/>
            <NavItem path="/register" title="Register" xs={1}/>
            <NavItem path="/login" title="Login" xs={1}/>

            </Grid>
        </div>
    )
}