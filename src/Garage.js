import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddScenario from './components/AddScenario.js';
import { CustomDialog } from './testModal.js';
import Garage from './Garage.js';
//import StickyHeadTable from './List.js';

import {
  TextField
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

//import Contact from './contacts.js';
//C:\Users\rhodr\OneDrive\Desktop\TryAgain\future-cast\src\components\AddScenario.js
const columns = [
  { id: 'ScenarioId', label: 'ID', minWidth: 5 },
  { id: 'ScenarioName', label: 'Scenario Name', minWidth: 50 },
  { id: 'ScenarioDesc', label: 'Scenario Description', minWidth: 100 } 
];


const useStyles2 ={
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
};


var test = [
  {
  brand: "Toyota",
  model: "Corola",
  color: "red",
  year: 1964
},
{
  brand: "Honda",
  model: "Pilot",
  color: "red",
  year: 2004
}
];


class Car extends React.Component {
  
  constructor() {
    super();
    this.state = {cart:test,
                  style:useStyles2,
                  columns:columns
                  };  
    this.state.setIsOpen = false;
    this.submitForm = this.submitForm.bind(this);
    this.handleDataFromChild = this._handleDataFromChild.bind(this);
    //this.state = {style:useStyles};
//    const [isOpen,setIsOpen] = useState(false)

  }


  
  submitForm(values){
    this.setState({ values })
  }

  handleDialogOpen() {
  //  this.state.setIsOpen = 'true'
    this.setState({setIsOpen: 'true'});
  }

  handleDialogClose(){
//    setIsOpen(false)
    this.setState({setIsOpen: 'false'});
  }

  _handleDataFromChild(data){


    //console.log('got this from child:'+JSON.stringify(data[0]));
    //console.log('previousState');
    //console.log(prevState);

    this.setState({
      cart: this.state.cart.concat(data[0])
    });
  
   // console.log('data:');
   // console.log(data[0]);
   // console.log('cart:');
   // console.log(this.state.cart);

  }


  componentDidMount() {
    fetch('http://localhost:7071/api/futurecast/scenarios')
    .then(res => res.json())
    .then((data) => {
      this.setState({cart: data});
      console.log('done');
    })
    .catch(
      console.log
      )
  }

  callModal() {
    alert('this');
    //<AddScenario />
    /*
    Thanks to the binding in the constructor function,
    the 'this' keyword now refers to the component object
    */
  }
  
  createTable() {
    /*
    let table =[]
    
    for (let i = 0; i < this.state.length; i++) {
      let children = []
      children.push(<td>{this.state[i].ScenarioId}</td>)
      children.push(<td>{this.state[i].ScenarioName}</td>)
      children.push(<td>{this.state[i].ScenarioDesc}</td>)
      children.push(<td>{this.state[i].CreatedDate}</td>)
      //  console.log(children);
     table.push(<tr>{children}</tr>)
    }
    return table
    */
    return JSON.stringify(this.state);
//      return 'rhodri'
//    return this.state.data.length;
  }

  render() {

    return ( 
      /*

      <h2>I am a {this.state[0].color} Car! <table>{this.createTable()}</table> </h2>
  */

    <div>
      <Garage
        title = 'Create New Scenario'
        buttonName = 'Create Scenario'
        onFormSubmit={this.submitForm}
        handleDataFromChild={this.handleDataFromChild}
      >
        <TextField
          id="ScenarioName"
          name="ScenarioName"
          label="Scenario"
          defaultValue="Default Value"
          helperText="Enter Name of Scenario"
          variant="outlined"
        /><br></br><br></br>
        <TextField
          id="ScenarioDesc"
          name="ScenarioDesc"
          label="Scenario Description"
          defaultValue="Default Value"
          helperText="Enter Description of Scenario"
          multiline
          rowsMax={4}
          variant="outlined"
        />


      </Garage>
      <center><h1>Scenario List</h1></center>
      <CustomDialog
        isOpen={this.state.isOpen}
        handleClose={this.handleDialogClose}
        title='Update Roles for User'
        >
      </CustomDialog>      


      {JSON.stringify(this.state)}
      <br></br>
      <br></br>

      
      {JSON.stringify(this.state.style)}

      {/*
      {this.state.cart.map((data) => (
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">ID {data.ScenarioId}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Description {data.ScenarioDesc}</h6>
                  <p class="card-text">Created Date {data.CreatedDate}</p>
              </div>
          </div>
      ))}
      

<Paper className={this.state.style.root}>
      <TableContainer className={this.state.style.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {this.state.columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.cart.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.ScenarioId}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={this.state.cart.length}
//        rowsPerPage={rowsPerPage}
//        page={page}
//        onChangePage={handleChangePage}
//        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
*/}
    

    </div>




    );
  }
}

export default Car;
