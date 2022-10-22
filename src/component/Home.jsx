import React from "react";
import { useDispatch } from "react-redux";
import {Button, Grid} from "@mui/material";
import { AccountSummary } from "./Banking/AccountSummary";


export const Home=()=>{
    const dispatch=useDispatch();

        const handleRaj=()=>{
            dispatch({
                type:"accInfo",
                payload:{
                    accNo:5005,
                }

            })
        }
        const handleAmit=()=>{
            dispatch({
                type:"accInfo",
                payload:{
                    accNo:2242,
                }
            })
        }

    return(
        <React.Fragment>     
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    Account Summary
                </Grid>
                <Grid item xs={6}>
                    Loan Summary
                </Grid>
                <Grid item xs={6}>
                    <AccountSummary/>
                </Grid>
                <Grid item xs={6}>
                    Lone Home
                    <Button variant="contained" onClick={handleRaj}>Raja Acc Info</Button>
                    <Button variant="contained" onClick={handleAmit}>Amit Acc Info</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}