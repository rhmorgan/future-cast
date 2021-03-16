import { ViewColumnSharp } from '@material-ui/icons';
import React, { useState, useEffect } from "react";
import List from './List.js';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

  
const columns = [
    { id: 'ScenarioId', label: 'ID', minWidth: 5 },
    { id: 'ScenarioName', label: 'Scenario Name', minWidth: 50 },
    { id: 'ScenarioDesc', label: 'Scenario Description', minWidth: 100 }
  ];  

const endpoint = "http://localhost:7071/api/futurecast/"

const resource = "scenario"


export default function Scenario(props) {
    const [page, setPage] = useState(1);
    const [scenarios, setScenarios] = useState(null);


return (
<div>
    {/*}
    {JSON.stringify(scenarios)}
    <br></br>
    <br></br>
    {JSON.stringify(page)}
    {*/}

    <h1>Scenario</h1>
    <List
        resource = {resource}
        columns = {columns}
        endpoint = {endpoint}
        idColumn = 'ScenarioId'
//        rows = {scenarios}
    >
        <TextField
                required
                id="outlined-required"
                name="ScenarioName"
                label="Scenario Name"
                //defaultValue="Hello World"
                variant="outlined"
            />
            <br></br>
            <br></br>

            <TextField
                id="outlined-multiline-static"
                name="ScenarioDesc"
                label="Scenario Description"
                multiline
                rows={4}
                //defaultValue="Default Value"
                variant="outlined"
            />
    </List>


</div>
)
}
