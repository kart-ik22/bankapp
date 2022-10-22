import React, { useState } from "react";     
import { Tabs,Tab } from "@mui/material";
import { Transaction } from "./Transaction";      
import { Transfer } from "./Transfer";
import { AccountType } from "./AccountType";
import { Beneficiary } from "./Beneficiary";

export const Banking=()=>{
    const [selected, setSelected]=useState("transaction");
    return(
        <React.Fragment>
            <Tabs value={selected} onChange={(e,val)=>setSelected(val)} sx={{bgcolor:"white"}}>
                <Tab value="transaction" label="Transaction"/>
                <Tab value="transfer" label="Transfer"/>
                <Tab value="benef" label="Beneficiary"/>
                <Tab value="acctype" label="AccountType"/>
            </Tabs>
            {selected==="transaction" && <Transaction/>}
            {selected==="transfer" && <Transfer/>}
            {selected==="benef" && <Beneficiary/>}
            {selected==="acctype" && <AccountType/>}
        </React.Fragment>
    )
}