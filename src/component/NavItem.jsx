import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavItem=({path,title,xs})=>{
    return(
            <Grid item xs={xs}>
            <Link to={path}>{title}</Link>
            </Grid> 
    )
}