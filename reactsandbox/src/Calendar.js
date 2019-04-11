import React, {Children, useState} from 'react';
import BigCalendar from 'react-big-calendar'
import events from './events.js';
import moment from "moment";
import { makeStyles } from '@material-ui/styles';

import calendarstyles from './calendarstyles.css';
import EventCard from './EventCard.js';
import MeetingCard from './MeetingCard.js';

const localizer = BigCalendar.momentLocalizer(moment)
const now = new Date()

const CURRENT_DATE = moment().toDate();

const useStyles = makeStyles(theme => ({
  root: {
    height: 500,
    width: '90%',
    padding: '0 30px',
  },
  event: {
    border: 'solid',
  },
  agendaBlock: {
    display: 'flex',
    border: 'solid',
    width: '100px',
  },
  agenda: {
    height: 500,
    width: '50%',
    padding: '0 30px',
  },
}));

const EventComponent = ({event, start, end, allDay,}) => {
  const classes = useStyles();
  return(
    <div className={classes.event}> title {event.title} </div>
  )
}

// Booking calendar events
function bookingeventStyling(event, start, end, isSelected) {
  //const backgroundColor = '#' + event.colour
  console.log(isSelected)
  const backgroundColor = '#' + event.colour
  const style = {
    backgroundColor: isSelected ? backgroundColor : backgroundColor,
    boxShadow: isSelected ? '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' : '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    borderRadius: '4px',
    //opacity: 0.8,
    border: isSelected ? 'none' : 'none',
    marginLeft: '5px',
    color: 'white',
    border: '0px',
    display: 'block',
    textAlign: 'left',
  };
  return {
    style: style
  }
}

function eventStyling(event, start, end, isSelected) {
  //const backgroundColor = '#' + event.colour
  //console.log(isSelected)
  const backgroundColor = '#' + event.colour
  const style = {
    backgroundColor: '#ffffff',
    boxShadow: isSelected ? '0 6px 6px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' : '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    borderRadius: '4px',
    //opacity: 0.8,
    border: isSelected ? 'none' : 'none',
    marginLeft: '5px',
    color: 'black',
    border: '0px',
    display: 'block',
    textAlign: 'left',
  };
  return {
    style: style
  }
}

function agendaStyling(event, start, end, isSelected) {
  //const backgroundColor = '#' + event.colour
  //console.log(isSelected)
  const backgroundColor = '#' + event.colour
  const style = {
    width: '125px',
  };
  return {
    style: style
  }
}

function bookingEvent(event) {
  const meetingCircle = {
    width: '8px',
    height: '8px',
    backgroundColor: '#000000',
    marginRight: '5px',
  }
  const wrapper = {
    display: 'flex',
    alignItems: 'center',
  }
  return(
    <div style={wrapper}>
      <div style={meetingCircle}></div>
      <div> {event.title} </div>
    </div>
  )
}

function agendaEvent(event, start, end, isSelected) {
  const classes = useStyles();
  return(
    <div className={classes.agendaBlock}> Title: {event.title} </div>
  )
}

function Calendar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [curView, setCurView] = useState('month')
  const [details, setDetails] = useState("")

  function handleSelectEvent(event) {
    setOpen(true);
    setDetails(event)
  }

  const handleClose = value => {
    setOpen(false);
    //setDetails(null)

  };

  function handleView(view) {
    setCurView(view)
    //console.log(curView)
  }


  return(
    <div className={curView == 'agenda' ? classes.agenda : classes.root}>
      <MeetingCard/>
      <BigCalendar
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        height={'50%'}
        //view={['Month', 'week', 'day']}
        selectable
        //toolbar={false}
        date={now}
        onView={(view) => handleView(view)}
        components={{
                // you have to pass your custom wrapper here
                // so that it actually gets used
                //dateCellWrapper: ColoredDateCellWrapper,
                 day: {
                   event: bookingEvent,
                 },
                 agenda: {
                   event: agendaEvent,
                 },
            }}
        eventPropGetter={curView == 'agenda' ? agendaStyling : eventStyling}
        onSelectEvent= {(event) => handleSelectEvent(event)}
       />
       <EventCard open={open} onClose={handleClose} details={details}/>

    </div>
  )
}

export default Calendar
