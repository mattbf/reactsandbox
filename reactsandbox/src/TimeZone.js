import React, {useState} from 'react';
//picker
import { BasePicker, MuiPickersUtilsProvider, TimePickerView, Calendar, DatePicker } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

//selectabl
import { makeStyles } from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
}));

function TimeZone() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);
  //const tz1 = selectedDate.getTimezoneOffset();
  const [tz, setTZ] = useState('Canada/Mountain');

  function handleSelectTZ(event) {
    setTZ(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return(
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
        <div className="picker">
          <DatePicker
            label="Basic example"
            value={selectedDate}
            onChange={handleDateChange}
            animateYearScrolling
          />
        </div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
            <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={tz}
              onChange={handleSelectTZ}
              inputProps={{
                name: 'age',
                id: 'demo-controlled-open-select',
              }}
            >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Australia/Brisbane'}>Brisbane</MenuItem>
                <MenuItem value={'Europe/Athens'}>Athens</MenuItem>
                <MenuItem value={'Canada/Mountain'}>Mountain time</MenuItem>
              </Select>
          </FormControl>
        <h2> {selectedDate.toLocaleString("en-US", {timeZone: tz})} </h2>
        <h2> timezone: {tz} </h2>
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default TimeZone
