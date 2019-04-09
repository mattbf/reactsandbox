import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import blue from '@material-ui/core/colors/blue';

import {
  People,
  Notifications,
  Link,
} from '@material-ui/icons'

import {
  Button,
  List,
  ListItem,
  ListItemText,
  Dialog,
  Card,
  CardActions,
  CardContent,
  ListItemIcon,
  Tooltip,
  IconButton,
} from '@material-ui/core';

import {
  AccessAlarm,
} from '@material-ui/icons';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function EventCard(props) {
  const classes = useStyles();
  const { onClose, selectedValue, details, ...other } = props;


  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    onClose(value);
  }


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <Card className={classes.card}>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <div
                      style={{
                      backgroundColor: 'magenta',
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      marginRight: '4px',
                      marginLeft: '5px',
                      }}
                    ></div>
                  </ListItemIcon>
                  <ListItemText
                    primary={details.title}
                    secondary="Date/Time of meeting"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <People/>
                  </ListItemIcon>
                  <ListItemText
                    primary="First Name Last name"
                    secondary="Guests email"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Notifications/>
                  </ListItemIcon>
                  <ListItemText
                    primary="X amount of time before"
                  />
                </ListItem>
                <ListItem component="a" href="https://www.google.com" target="_blank">
                  <ListItemIcon>
                    <Link/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Link to Meeting"
                  />
                </ListItem>
              </List>
            </CardContent>

          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
            <Tooltip title="Add" aria-label="Add">
              <IconButton aria-label="Delete">
                <AccessAlarm />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
    </Dialog>
  );
}

EventCard.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default EventCard;
