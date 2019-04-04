import React, { Fragment, useState } from "react";
import { BasePicker, MuiPickersUtilsProvider, TimePickerView, Calendar, DatePicker } from "material-ui-pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { Paper } from "@material-ui/core/";
import { makeStyles } from '@material-ui/styles';
import DateMobileStepper from './MobileStepper.js';
import BigCalendar from 'react-big-calendar'
import events from './events.js';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

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
      display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      width: '300px',
    },
  },
  mobile: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    border: 'solid',
    borderColor: '#00c853',
    height: '100vh',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  },
  calendar: {
    height: '300px',
  },
  placeholder: {
    width: '80%',
    height: '200px',
    border: 'solid',
  }

}));




function disableWeekends(date) {
  return 0;
}

function DatePickerResponsive(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();


  const stepperComponents = [
    {
      label: 'Pick a day',
      component:
      <div>

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
      </div>,
    },
    {
      label: 'Pick a time',
      component:
      <div className={classes.calendar}>
        <BigCalendar
          events={events}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          height={'100%'}
          view={['day']}
          toolbar={false}
        />
      </div>,
    },

  ]

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
          <div className={classes.calendar}>
            <BigCalendar
              events={events}
              localizer={localizer}
              startAccessor="start"
              endAccessor="end"
              height={'400px'}
            />
          </div>
        </div>
        <div className={classes.mobile}>
          <DateMobileStepper stepperComponents={stepperComponents}/>
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
