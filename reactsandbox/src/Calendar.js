import React, {Children} from 'react';
import BigCalendar from 'react-big-calendar'
import events from './events.js';
import moment from "moment";
import { makeStyles } from '@material-ui/styles';

const localizer = BigCalendar.momentLocalizer(moment)
const now = new Date()

const CURRENT_DATE = moment().toDate();

const useStyles = makeStyles(theme => ({
  root: {
    height: 500,
    width: '50%',
    padding: '0 30px',
  },
}));


const ColoredDateCellWrapper = ({children, value}) =>
    React.cloneElement(Children.only(children), {
        style: {
            ...children.style,
            backgroundColor: value < CURRENT_DATE ? 'lightgreen' : 'lightblue',
        },
    });


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
        //toolbar={false}
        date={now}
        components={{
                // you have to pass your custom wrapper here
                // so that it actually gets used
                dateCellWrapper: ColoredDateCellWrapper,
            }}
      />
    </div>
  )
}

export default Calendar