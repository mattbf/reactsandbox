import React from 'react';
import { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  TextField,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
  Input,
  InputLabel,
} from '@material-ui/core';

import {
  Schedule,
} from '@material-ui/icons';

import { TwitterPicker } from 'react-color';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    minWidth: 500,
    margin: theme.spacing.unit * 2,
  },
  content: {
    width: '100%',
  },
  colourDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingBottom: 15,
    flexWrap: 'nowrap',

  },
  actionbox: {
    display: 'flex',
  },
  actionbutton: {
    alignContent: 'flex-end',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    marginTop: 10,
    marginBottom: 10,
  },
  titleBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  fab: {

  }

});

// function doPostMeeting(values) {
//   const url = "/meetingtypes";
//   const state = getState();
//   const access = state[0].access.access;
//   const { res, doPost } = usePostApi()
//   doPost(
//     {
//       method: "POST",
//       url: `${url}/`,
//       headers: {Authorization: "Bearer " + access},
//       data: {
//         title: `${values.title}`,
//         description: `${values.description}`,
//         duration: `${values.duration}`,
//         colour: `${values.colour}`,
//       }
//     }
//   )
// }

function MeetingTypeCardEdit(props) {
  const { classes } = props;
  // const url = "/meetingtypes";
  // const state = getState();
  // const access = state[0].access.access;
  // const { doPost } = usePostApi()
  const [values, setValues] = useState({
  title: 'New Timing Format',
  description: 'Enter your meeting description here. This will be visible to viewers',
  colour: '#333',
  duration: '00:30:00',
});


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
    console.log(values.colour)
  };

  const handleChangeColour = name => (color, event) => {
    setValues({ ...values, [name]: color.hex })
    console.log(values.colour)
  };

  function handleClick(event) {
    doPost(
    //   event,
    //   {
    //     method: "POST",
    //     url: `${url}/`,
    //     headers: {Authorization: "Bearer " + access},
    //     data: {
    //       title: `${values.title}`,
    //       description: `${values.description}`,
    //       duration: `${values.duration}`,
    //       colour: `${values.colour.substr(1)}`,
    //     }
    //   }
    // )
    console.log(values)
  }



  return (
      <div>
          <div>
            <Button color="primary" onClick={handleClick}>
              submit
            </Button>
            <div>
              <TextField
                id="meeting type title"
                label="Meeting Title"
                placeholder="Enter the Title"
                fullWidth
                value={values.title}
                name="title"
                onChange={handleChange('title')}
              />
            </div>
            <TextField
              fullWidth
              id="standard-multiline-static"
              label="Meeting Description"
              multiline
              rowsMax="4"
              margin="normal"
              value={values.description}
              name="description"
              onChange={handleChange('description')}
            />
            <div>
              <Typography variant="subtitle2" gutterBottom> Meeting Colour </Typography>
              <div style={{ width: '75%',}}>
                <TwitterPicker
                  triangle="hide"
                  color={values.colour}
                  onChangeComplete={handleChangeColour('colour')}
                />
              </div>
              <ListItem>
                <ListItemIcon>
                  <Schedule />
                </ListItemIcon>
                  <FormControl>
                    <Select
                      value={values.duration}
                      onChange={handleChange('duration')}
                      input={<Input name="Form" id="age-label-placeholder" />}
                      displayEmpty
                      name="age"
                    >
                      <MenuItem value={`00:15:00`}>15 min</MenuItem>
                      <MenuItem value={`00:30:00`}>30 min</MenuItem>
                      <MenuItem value={`00:45:00`}>45 min</MenuItem>
                      <MenuItem value={`00:60:00`}>60 min</MenuItem>
                    </Select>
                    <FormHelperText>Meeting Duration</FormHelperText>
                  </FormControl>
              </ListItem>
            </div>
          </div>
      </div>
  );
}


export default MeetingTypeCardEdit;
