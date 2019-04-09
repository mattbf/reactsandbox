import React, {Children} from 'react';
import BigCalendar from 'react-big-calendar'
import events from './events.js';
import moment from "moment";
import { makeStyles } from '@material-ui/styles';

import EventCSS from './EventCSS.css';
const localizer = BigCalendar.momentLocalizer(moment)
const now = new Date()

const CURRENT_DATE = moment().toDate();

const useStyles = makeStyles(theme => ({
  root: {
    height: 500,
    width: '50%',
    padding: '0 30px',
  },
  event: {
    border: 'solid',
  }
}));

const EventComponent = ({event, start, end, allDay,}) => {
  const classes = useStyles();
  return(
    <div className={classes.event}> title {event.title} </div>
  )
}


const ColoredDateCellWrapper = ({children, value}) =>
    React.cloneElement(Children.only(children), {
        style: {
            ...children.style,
            backgroundColor: value < CURRENT_DATE ? 'lightgreen' : 'lightblue',
        },
    });

function eventStyling(event, start, end, isSelected) {
  //const backgroundColor = '#' + event.colour
  console.log(isSelected)
  const backgroundColor = '#' + event.colour
  const style = {
    backgroundColor: isSelected ? backgroundColor : '#ffffff',
    boxShadow: isSelected ? '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' : '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    borderRadius: '2px',
    //opacity: 0.8,
    marginLeft: '5px',
    color: 'black',
    border: '0px',
    display: 'block',
  };
  return {
    style: style
  }
}

function Calendar() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <BigCalendar
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        height={'50%'}
        view={['day']}
        selectable
        //toolbar={false}
        date={now}
        components={{
                // you have to pass your custom wrapper here
                // so that it actually gets used
                //dateCellWrapper: ColoredDateCellWrapper,
                // day: {
                //   event: EventComponent,
                // },
            }}
        eventPropGetter={eventStyling}
      />
    </div>
  )
}

export default Calendar
