import React, { Fragment, useState } from "react";
import { BasePicker, MuiPickersUtilsProvider, TimePickerView, Calendar, DatePicker } from "material-ui-pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { Paper } from "@material-ui/core/";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  desktop: {
    display: 'flex',
    width: '300px',
  },
  mobile: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
  },

}));


function disableWeekends(date) {
  return 0;
}

function DatePickerResponsive(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();


  return (
    <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
      <div className={classes.desktop}>
          <BasePicker value={selectedDate} onChange={handleDateChange}>
            {({
              date,
              handleAccept,
              handleChange,
              handleClear,
              handleDismiss,
              handleSetTodayDate,
              handleTextFieldChange,
              pick12hOr24hFormat,
            }) => (
              <div>
                <div className="picker">
                  <Paper style={{ overflow: "hidden" }}>
                    <Calendar date={date} onChange={handleChange} />
                  </Paper>
                </div>
              </div>
            )}
          </BasePicker>
        </div>
        <div className={classes.mobile}>
          <DatePicker
            label="Basic example"
            value={selectedDate}
            onChange={handleDateChange}
            animateYearScrolling
          />
        </div>
    </MuiPickersUtilsProvider>
  );
}

export default DatePickerResponsive;

/*

<div className="picker">
  <DatePicker
    label="Basic example"
    value={selectedDate}
    onChange={handleDateChange}
    animateYearScrolling
  />
</div>

<Calendar
  autoOk={false}
  cancelLabel={false}
  firstDayOfWeek={1}
  mode={'portrait'}
  open={true}
/>

*/
