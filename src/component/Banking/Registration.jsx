import { TextField, Grid, Button, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export const Registration = () => {
  const [acctypeOptions, setAcctypeOptions] = useState();
  const [custId, setCustId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [accType, setAccType] = useState({});
  const [isActive, setIsActive]=useState(true);
  const [isValid,setIsValid]=useState(false);
  const [msg, setMsg]=useState("");

  const getData = async () => {
    const result = await axios.get("http://localhost:7500/accttype");
    setAcctypeOptions(result.data);
  };

  const handleSubmit =async () => {
    const payload = { custId, fname, lname, password, repassword, accType:accType.value,isActive };
    const result=await axios.post("http://localhost:7500/addregisters",payload);
    result.status === 200 && setMsg(result.data);
    result.status === 200 && handleCancel();
    console.log("==>", payload);
  };

  const handleCancel=()=>{
    setCustId("");
    setFname("");
    setLname("");
    setPassword("");
    setRepassword("")
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

},[])

  useEffect(() => {
    getData();
  }, []);

  

  return (
    <div>
      <h1>Register New Account</h1>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            label="Customer ID"
            variant="outlined"
            type="number"
            fullWidth
            onChange={(e) => setCustId(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="First Name"
            variant="outlined"
            type="text"
            fullWidth
            onChange={(e) => setFname(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Last Name"
            variant="outlined"
            type="text"
            fullWidth
            onChange={(e) => setLname(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            value={accType}
            options={acctypeOptions}
            onChange={(val) => setAccType(val)}
            placeholder="Select Account Type"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Re Eneter Password"
            variant="outlined"
            type="password"
            fullWidth
            onChange={(e) => setRepassword(e.target.value)}
          />
        </Grid>
     
        <Grid item xs={3}>
          {" "}
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" size="large" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" size="large" onClick={handleCancel}>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
            {msg && <Alert severity="success">{msg}</Alert>}
        </Grid>

      </Grid>
    </div>
  );
}