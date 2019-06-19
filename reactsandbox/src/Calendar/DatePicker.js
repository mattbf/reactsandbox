import React, { useState, useEffect, Fragment } from "react";

//import 'date-fns';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import MomentUtils from '@date-io/moment';
import { Paper } from "@material-ui/core/";

import { getDate } from '../GlobalDate.js';

//import { MuiPickersUtilsProvider, TimePickerView } from "material-ui-pickers";
import { BasePicker, MuiPickersUtilsProvider, TimePickerView, Calendar } from "material-ui-pickers";

const useStyles = makeStyles(theme => ({
  grid: {
    width: '100%',
  },
  picker: {
    width: '100%',
    marginBottom: '25px',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function DatePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  const [{globaldate}, dispatch] = getDate();
  const disabledDates = [1, 5, 7, 15, 18]

  useEffect(() => {
      dispatch({
        type: 'changeDate',
        newDate: {startDate: new Date(selectedDate), endDate: new Date(selectedDate)}
      })
      dispatch({
        type: 'setSelected',
        selection: false
      })
      console.log("selected: " + new Date(selectedDate))
      console.log("global:" + globaldate)
    }, [selectedDate])

    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div className={classes.sectionDesktop}>

            <BasePicker id="desktop" value={selectedDate} onChange={handleDateChange} shouldDisableDate={disabledDates}>
              {({
                date,
                handleAccept,
                handleChange,
                handleClear,
                handleDismiss,
                handleSetTodayDate,
                handleTextFieldChange,
                pick12hOr24hFormat,
                shouldDisableDate,
              }) => (
                <div className={classes.picker}>
                  <div>
                    <Paper style={{ overflow: "hidden", padding: "10px" }}>
                      <Calendar date={date} onChange={handleDateChange} />
                    </Paper>
                  </div>
                </div>
              )}
            </BasePicker>

        </div>
        <div className={classes.sectionMobile}>
          <h3> Mobile hehe </h3>
        </div>
      </MuiPickersUtilsProvider>
    );
}


export default DatePicker;

/*

<MuiPickersUtilsProvider utils={MomentUtils}>
  <Grid container className={classes.grid} justify="space-around">
    <DatePicker
      id="mobile"
      margin="normal"
      label="Date picker"
      value={selectedDate}
      onChange={handleDateChange}
    />
  </Grid>
</MuiPickersUtilsProvider>


<Fragment>
  <div className="picker">
    <DatePicker
      label="Basic example"
      value={selectedDate}
      onChange={handleDateChange}
      animateYearScrolling
    />
  </div>
</Fragment>

*/
