import { Card, CardContent, Grid } from "@mui/material";
import React from "react";

export const AccountSummaryItem=({item})=>{
    return(
        <Grid item xs={4}>
            <Card sx={{textAlign:"center", bgcolor:"coral",fontWeight:"bolder",color:"white"}}>
                <CardContent>
                    {item}
                </CardContent>
            </Card>
        </Grid>
    )
}