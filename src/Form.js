import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export default function FormModal(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();
  const [page, setPage] = React.useState(0);
 

  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked  times`;
    //setData(props.data);
  });

  const handleClickOpen = () => {
    setOpen(true);
    setData(props.data);
    console.log(props.data);
  };

  function handleClose() {
      setOpen(false);
    }

  const myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    //console.log({[nam]: val})
    setData({...data, [nam]: val});
    //console.log(data)
  }

  const setDefaultValue = (child) => {
    let name = child.props.name;
    if(props.data && props.data[name]){
      return props.data[name];
    }
  }

  const onClickAction = () => {
    if(props.action=='Create'){
      createNewRecord();
    } else if (props.action=='Edit'){
      console.log('updating record');
      updateRecord();
    }

    handleClose();
  }

  const onClickDelete = () => {
    deleteRecord();

    handleClose();
  }

  
  const createNewRecord = () => {
    axios.put(props.crudEndpoint, data)
    .then(res => {
      console.log(res);
      props.parentAddNewObjectToList(res.data);
      console.log(res.data);
    })

    handleClose();
  }

  const deleteRecord = () => {
    axios.delete(props.crudEndpoint + '/' + data.ScenarioId, data)
    .then(res => {
      console.log('delete record');
      console.log(res);
      props.parentDeleteObjectInList(res.data);
      console.log(res.data);
    })

    handleClose();
  }


  const updateRecord = () => {
    axios.patch(props.crudEndpoint, data)
    .then(res => {
      console.log(res);
      props.parentEditObjectInList(res.data);
      console.log(res.data);
    })

    handleClose();
  }
 

  return (
    <div>
        {/*}{JSON.stringify(data)}
        <br></br>
        <br></br>
        {*/}
        {/*JSON.stringify(props.data)*/}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.action} Scenario
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.action} Scenario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {JSON.stringify(data)}
            To {props.action} a Scenario, please enter the information below and click submit.
          </DialogContentText>
            <form>
                {React.Children.map(props.children,
                    child => {
                        //console.log(child)
                        return React.cloneElement(child,
                        {onChange:myChangeHandler, 
                        defaultValue:setDefaultValue(child)
                      }, null);
                        //console.log(child)
                      }
                )}
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClickAction} color="primary">
            {props.action} Scenario
          </Button>
          { props.action == 'Edit' ? <Button onClick={onClickDelete} color="primary"> Delete Scenario </Button>: null}
        </DialogActions>
      </Dialog>
    </div>
  );
}