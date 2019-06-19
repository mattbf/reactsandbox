import React, { useState, useEffect, Fragment } from "react";
import { Link } from 'react-router-dom';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import events from './events.js';
import { makeStyles } from '@material-ui/styles';

import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import { Paper } from "@material-ui/core/";

import { BasePicker, MuiPickersUtilsProvider, TimePickerView, Calendar } from "material-ui-pickers";
//import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';


import testAvails from './availabilitiesData.js';


import {
  Button,
  IconButton,
  Typography,
} from '@material-ui/core';

import {
  KeyboardArrowLeft,
} from '@material-ui/icons'

const localizer = BigCalendar.momentLocalizer(moment)


const customDayPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
      style: {
        border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
      },
    }
  else return {}
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing.unit * 2,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  wrapper: {
    display: 'none',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    width: '100vw',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      flexWrap: 'wrap',
      width: '100vw',
      justifyContent: 'center',
    },
  },
  grid: {
    width: '60%',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: "10px",
    marginLeft: "10px",
    minWidth: '300px',
    width: '75%',
    justifyContent: 'start',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: "25px",
      marginLeft: "25px",
      minWidth: '300px',
      width: '30%',
      maxWidth: '350px',
    },
  },
  dayselect: {
    width: '100%',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      width: '30%',
      minWidth: '400px',
    },
  },
  confirmbutton: {
    marginTop: "25px",
  },
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
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
  },
  mobileWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    maxWidth: '425px',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  calendar: {
    height: '100%',
    width: '300px',
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
 backFab: {
   position: 'absolute',
   top: '15px',
   left: '15px',
 },
 mobileCalendar: {
   minWidth: '275px',
   border: 'solid',
 },
 infoDiv: {
   display: 'flex',
 },
 infoColumn: {
   width: '32%',
 }

}));


function eventStyling(event, start, end, isSelected) {
  //const backgroundColor = '#' + event.colour
  //console.log(isSelected)
  const backgroundColor = '#' + event.colour
  const style = {
    backgroundColor: '#2979ff',
    boxShadow: isSelected ? '0 6px 6px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' : '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    borderRadius: '4px',
    //opacity: 0.8,
    border: isSelected ? 'none' : 'none',
    // marginLeft: '5px',
    // marginRight: '5px',
    color: 'black',
    border: '0px',
    //display: 'block',
    textAlign: 'left',
  };
  return {
    style: style
  }
}

function DisableDatesLogic({match}) {
  const curDate = new Date()
  const [selectedDate, handleDateChange] = useState(new Date());
  // console.log("macth: ")
  // console.log(match)
  const classes = useStyles();

  //console.log(meetingType)
  console.log(testAvails)
  const availDays = [];
  testAvails.forEach(function(date) {
    //console.log(new Date(date.start).getMonth())
    availDays.push({
      day: new Date(date.start).getDate(),
      month: new Date(date.start).getMonth()
    })
  })
  console.log(availDays)

  function checkValue(dayOf, month, date){
    function search(Key, myArray){
    for (var i=0; i < myArray.length; i++) {
      // console.log(Key)
      // console.log(parseInt(new Date(myArray[i].start).getDate()))
      // console.log(new Date(myArray[i].start).getDate() == Key)
      // console.log(i)
        if (new Date(myArray[i].start).getDate() == Key) {
            //console.log("index:" + i)
            return new Date(myArray[i].start).getMonth();
        }
      }
    }
  var isDisabled = true;
  //console.log("day we are checking: " + month + ":" + dayOf)
  const currentDate = new Date()

  if (month < currentDate.getMonth()) {
    isDisabled = true;
  }
  if (month == currentDate.getMonth() && dayOf < currentDate.getDate()) {

    isDisabled = true;
  }
  const matchingMonth = search(new Date(date).getDate(), testAvails)
  if (
      month >= currentDate.getMonth() &&
      testAvails.some(item => new Date(item.start).getDate() == new Date(date).getDate()) && matchingMonth == new Date(date).getMonth()
     ) {
    isDisabled = false;
  }

  // const flattenedDate = new Date(month, dayOf, currentDate.getYear())
  // console.log(flattenedDate)
  //console.log(new Date(testAvails[1].start))
  const DateMatch = availDays.some(item => item.day == dayOf) && availDays.some(item => item.month === month)


  const DateMatchV2 = testAvails.some(item => new Date(item.start).getDate() == new Date(date).getDate()) && matchingMonth == new Date(date).getMonth()

  //console.log(dayOf + "/" + month + DateMatchV2)
  // console.log(new Date(testAvails[1].start).valueOf())
  //console.log(new Date(date).getDate())
   if (DateMatchV2) {
    console.log(dayOf + "/" + month + DateMatchV2)
  }
  //myarr.some(item => item.class === 'y')

  // for (var j=0; j<testAvails.length; j++) {
  //   availDays.push(testAvails[j].start).getMonth())
  // }
  //


  //for (var j=0; j<testAvails.length; j++) { // for every date in events
    // var isMonth = new Date(testAvails[j].start).getMonth() // switch with getAvailabilities response
    // //console.log("month of events array: " + isMonth)
    // if (isMonth < month){ // if the month is in the past
    //     isDisabled = true;
    //     //console.log("disabled is: " + isDisabled)
    //   }
    //
    // else {
    //       for(var i=0; i<array.length; i++){
    //       var day = array[i];
    //       if(day == dayOf && isMonth == month){
    //       isDisabled = false;
    //       //console.log("disabled is: " + isDisabled)
    //       }
    //     }
    //   }
    // if (month < currentDate.getMonth()) {
    //   isDisabled = true;
    // } else if (month == currentDate.getMonth && dayOf < currentDate.getDate) {
    //   isDisabled = true;
    // } else if (month >= currentDate.getMonth && availDays.includes(dayOf)) {
    //   isDisabled = false;
    // }
  //}

  return isDisabled;
}
  function disableUnavailable(checkDate) {
    var disable = true
    const newAvails = []
    testAvails.map(availability => {
      const sd = new Date(availability.start)
      newAvails.push(sd.getFullYear() + "/" + sd.getMonth() + "/" + sd.getDate())
    })
    //console.log(newAvails)
    //console.log(checkDate === 2019/6/18 || checkDate === 2019/7/22)
    // if (month < currentDate.getMonth()) {
    //   isDisabled = true;
    // }
    // if (month == currentDate.getMonth() && dayOf < currentDate.getDate()) {
    //
    //   isDisabled = true;
    // }
    // const matchingMonth = search(new Date(date).getDate(), testAvails)
    if (newAvails.includes(checkDate)) {
      disable = false;
      //console.log(checkDate + "is Available")
    }
    return disable
  }

  function disableUnavailableDays(date) {
    //console.log(date._d.getDate())
    const checkDate = date._d.getDate()
    const checkMonth = date._d.getMonth()
    const YMD = date._d.getFullYear() + "/" + (date._d.getMonth() + 1) + "/" + date._d.getDate()
    console.log(date._d.getMonth())
    console.log(YMD)
    // const isDisabled = checkValue(checkDate, checkMonth, date)
    const isDisabled = disableUnavailable(YMD)
    //console.log(isAvail)
  return isDisabled
  }
    return (
      <Fragment>
        <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
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
                <div className={classes.calendar}>
                  <Paper style={{ overflow: "hidden", paddingBottom: '5px'}}>
                    <Calendar
                      date={date}
                      onChange={handleDateChange}
                      shouldDisableDate={disableUnavailableDays}
                    />
                  </Paper>
                </div>
              </div>
            )}
          </BasePicker>

        </MuiPickersUtilsProvider>
        <div className={classes.infoDiv}>
          <div className={classes.infoColumn}>
            <h3> Availabilities from API </h3>
            <ul>
              {testAvails.map((avail, index) =>
                <li key={index}> Full Date {avail.start} |{new Date(avail.start).getFullYear()} / {new Date(avail.start).getMonth()} / {new Date(avail.start).getDate()}</li>
              )}
            </ul>
          </div>
          <div className={classes.infoColumn}>
            <h3> Dates Being Checked </h3>
          </div>
          <div className={classes.infoColumn}>
            <h3> True Dates </h3>

          </div>
        </div>
      </Fragment>
    )
}

export default DisableDatesLogic
