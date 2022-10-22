import React,{useEffect, useState} from "react";
import { Alert, Button, Grid, TextField } from "@mui/material";
import Select from "react-select";
import axios from "axios";

export const AddBenefs=({accTypeOptions})=>{
    const [accNo,setAccNo]=useState(11115);
    const [refAccNo,setRefAccNo]=useState(5575474);
    const [accType,setAccType]=useState({});
    const [name,setName]=useState("");
    const [limit,setLimit]=useState(1001);
    const [isActive]=useState(true);
    const [isValid,setIsValid]=useState(false);
    const [msg,setMsg]=useState("");
 
    const handleAddBenef=async()=>{
        const payload={
            accNo,
            name,
            accType:accType.value,
            refAccNo,
            isActive,
            limit
        };

       const result=await axios.post("http://localhost:7500/addbenefs",payload);
       result.status===200 && setMsg(result.data);
       result.status===200 && handleClear();
       console.log(result)
    };

    const handleClear=()=>{
        setAccNo("");
        setName("");
        setLimit("");
        setAccType({});

    };

    useEffect(()=>{
        if(msg){
            setTimeout(()=>{
                setMsg("")
            },5000)
        }
    },[msg]);

    useEffect(()=>{
        accNo && name && limit>1000 && accType ? setIsValid(true):setIsValid(false)
    },[accNo,name,limit,accType])

    
    return(
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <TextField label="Beneficiary Account Number" value={accNo} variant="outlined" onChange={e=>setAccNo(e.target.value)} type="number" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <Select options={accTypeOptions} value={accType} onChange={(val)=>setAccType(val)} placeholder="Select Account Type" />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Beneficiary Name" value={name} variant="outlined" onChange={e=>setName(e.target.value)} fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Beneficiary Max Limit" value={limit} variant="outlined" onChange={e=>setLimit(e.target.value)} type="number" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                   <Button variant="contained" disabled={!isValid} onClick={handleAddBenef} fullWidth>Add Beneficiary</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" onClick={handleClear} fullWidth>Clear</Button>
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item  xs={4}>
                    {msg && <Alert severity="success">{msg}</Alert>}
                </Grid>
            </Grid> 
        </React.Fragment>
    )
}