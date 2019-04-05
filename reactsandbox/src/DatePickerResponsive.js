import React, { Fragment, useState } from "react";
import { BasePicker, MuiPickersUtilsProvider, TimePickerView, Calendar, DatePicker } from "material-ui-pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { Paper, IconButton } from "@material-ui/core/";
import { makeStyles } from '@material-ui/styles';
import DateMobileStepper from './MobileStepper.js';
import BigCalendar from 'react-big-calendar'
import events from './events.js';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Badge from '@material-ui/core/Badge';
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
    height: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  },
  calendar: {
    height: '100%',
  },
  placeholder: {
    width: '80%',
    height: '200px',
    border: 'solid',
  },
  badge: {
   top: '50%',
   right: -3,
   // The border color match the background color.
   border: `2px solid ${
     theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
   }`,
 },
 stepperComponent: {
   height: '100px',
 },

}));






function DatePickerResponsive(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  const availableDays = [];
  const mapevents = events.map((day) => {
    availableDays.push(day.start.getDate())
  })

  //console.log(availableDays)

  function disableRandomDates() {
  const disabled = Math.random() > 0.7
  return disabled;
  }

  function highlightAvail(date) {

  }

  function checkValue(value, month, array){
  var isDisabled = true;
  console.log("day we are checking: " + month + ":" + value)
  //console.log("month of events array: " + isMonth)
  for (var j=0; j<events.length; j++) { // for every date in events
    var isMonth = events[j].start.getMonth()
    if (isMonth < month){ // if the month is in the past
        isDisabled = false;
      }

    else {
          for(var i=0; i<array.length; i++){
          var day = array[i];
          if(day == value && isMonth == month){
          isDisabled = false;
          console.log(isDisabled)
          }
        }
      }
  }

  return isDisabled;
}

  function disableUnavailableDays(date) {
    //console.log(date._d.getDate())
    const checkDate = date._d.getDate()
    const checkMonth = date._d.getMonth()
    //console.log("month: " + checkMonth)
    const isDisabled = checkValue(checkDate, checkMonth, availableDays)
    //console.log(isAvail)
  return isDisabled
  }

  const renderAvailableDays = (date, selectedDate, dayInCurrentMonth, children, shouldDisableDate) => {

      return (
        <div>
          <IconButton>
            <Badge color="secondary" variant="dot" invisible={!disableUnavailableDays}  classes={{ badge: classes.badge }}>
            {children}
            </Badge>
          </IconButton>
        </div>
      );
    };

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
            shouldDisableDate,
          }) => (
            <div>
              <div className="picker">
                <Paper style={{ overflow: "hidden" }}>
                  <Calendar
                    date={date}
                    onChange={handleChange}
                    //maxDate = {new Date()}
                    shouldDisableDate={disableUnavailableDays}
                    //renderDay={renderAvailableDays}
                  />
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
          date={selectedDate}
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
              date={selectedDate}
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
