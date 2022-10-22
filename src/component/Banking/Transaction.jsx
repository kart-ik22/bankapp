import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { AccountSummary } from "./AccountSummary";


export const Transaction=()=>{
    
  const [trans,settrans]=useState([])
  const [accNo,setaccNo]=useState(5575474)
  const [accType,setType]=useState("S")
  const [amnt,setamnt]=useState(0)
  const [transType,settransType]=useState("C")
  const [isvalid,setisvalid]=useState(false)
  
   const getdata= async ()=>{
    const result= await axios.get("http://localhost:7500/transtype")
    settrans(result.data)
   }
   
   const handelsub=()=>{
       const payload={
           accNo,
           accType,
           amnt,
           transType,
        }
        axios.post("http://localhost:7500/transactions",payload)
        setamnt(0)
        setisvalid(false)
    }
    useEffect(()=>{
       if (amnt>0){
        setisvalid(true)
       } else {
        setisvalid(false)
       }
    },[amnt])
   

    useEffect(()=>{
       getdata()
    },[])

    return(
        <React.Fragment>
           <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <AccountSummary/>
                    </Grid>
                  <Grid item xs={4}>Type:- {" "}</Grid>

                  <Grid item xs={8}><Select options={trans} onChange={(val)=>settransType(val.value)}/></Grid>
                  
                  <Grid item xs={4}>Amount:- </Grid>
                  <Grid item xs={8}><TextField onChange={(e)=>setamnt(e.target.value)} value={amnt} label="Amount" variant="standard" fullWidth/></Grid>
                  
                  <Grid item xs={6}><Button variant="contained" disabled={!isvalid} fullWidth onClick={handelsub}>Submit</Button></Grid>
                  
                  <Grid item xs={6}><Button variant="contained" fullWidth>Cancel</Button></Grid>
                  
                </Grid>
            </CardContent>
           </Card>
        </React.Fragment>
    )
}