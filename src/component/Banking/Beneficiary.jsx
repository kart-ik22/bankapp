import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import { AddBenefs } from "./AddBenefs";
import axios from "axios";

export const Beneficiary=()=>{
    const [accTypeOptions,setAccTypeOpptions]=useState([]);

    const getData=async()=>{
        const result=await axios.get("http://localhost:7500/accttype");
        setAccTypeOpptions(result.data)
    };
    useEffect(()=>{
        getData();
    },[])
    return(
        <React.Fragment>
           <Card>
            <CardContent>
                <AddBenefs accTypeOptions={accTypeOptions}/>
            </CardContent>
           </Card>
        </React.Fragment>
    )
}