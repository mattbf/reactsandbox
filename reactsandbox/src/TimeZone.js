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
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setAge(event.target.value);
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
              value={age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'demo-controlled-open-select',
              }}
            >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
          </FormControl>
        <h2> {selectedDate.toString()} </h2>
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default TimeZone
