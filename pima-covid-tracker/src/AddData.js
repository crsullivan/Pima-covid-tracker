import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosLoginAuth from './axiosLoginAuth';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import './data.css'
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        
      },
    },
  }));
  
  
  const AddData = (props) => {

    const classes = useStyles();
    const [newData, setNewData] = useState();

    const changeHandler = event => {
        event.preventDefault();
        setNewData({...newData, [event.target.name]: event.target.value })
    }

        const handleSubmit = event => {
            event.preventDefault();
            console.log(newData);
            axiosLoginAuth()
                .post("/data/add", newData)
                .then(result => {
                props.history.push("/")
            })
            .catch(error => {
                console.log(error)
                alert("There was a problem updating your information, please try again. If the problem persists, notify Connor", error)
            })
        
        }

    return (
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
        <div className="top">
          <h1>Welcome, Laura!</h1>
          <h3>Add your content in the fields below, ensuring that the format for the first field is mm/dd.</h3>
        </div>
        <div className="main">
          <TextField
            id="date"
            label="mm/dd"
            type="string"
            autoComplete="date"
            name="date"
            onChange={changeHandler}
          />

          <TextField
            id="value"
            label="Value"
            type="number"
            autoComplete="value"
            name="value"
            onChange={changeHandler}
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Confirm
          </Button>
        </div>
    </form>
    );
  }
  
  export default AddData;
