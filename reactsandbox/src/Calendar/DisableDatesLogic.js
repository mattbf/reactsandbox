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

  function disableUnavailable(checkDate) {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const currentDay = currentDate.getDate()
    const checkDay = new Date(checkDate).getDate()
    const checkMonth = new Date(checkDate).getMonth() + 1
    var disable = true
    const newAvails = []
    testAvails.map(availability => {
      const sd = new Date(availability.start)
      newAvails.push(sd.getFullYear() + "/" + sd.getMonth() + "/" + sd.getDate())
    })

    // enable available Days
    if (newAvails.includes(checkDate)) {
      disable = false;
    }
    //disble past dates
    if (checkMonth < currentMonth || checkDay < currentDay) {
      disable = true;
    }
    return disable
  }

  function disableUnavailableDays(date) {
    const YMD = date._d.getFullYear() + "/" + (date._d.getMonth() + 1) + "/" + date._d.getDate()
    const isDisabled = disableUnavailable(YMD)
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
