import React, { Fragment, useState } from "react";
import { DatePicker, MuiPickersUtilsProvider, Calendar } from "material-ui-pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";


function DatePickerResponsive(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
      <Calendar
        autoOk={false}
        cancelLabel={false}
        firstDayOfWeek={1}
        mode={'portrait'}
        open={true}
      />

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

*/
