import React, { Fragment, useState } from "react";
import { BasePicker, MuiPickersUtilsProvider, TimePickerView, Calendar } from "material-ui-pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { Paper } from "@material-ui/core/";

function DatePickerResponsive(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
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
              <div className="picker">
                <Paper style={{ overflow: "hidden" }}>
                  <Calendar date={date} onChange={handleChange} />
                </Paper>
              </div>
            </div>
          )}
        </BasePicker>
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
