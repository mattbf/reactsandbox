import React, {useState, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import blue from '@material-ui/core/colors/blue';

import {
  People,
  Notifications,
  Link,
  Phone,
  AccessAlarm,
  Delete,
  Cast,
  Launch,
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


import 'react-big-calendar/lib/css/react-big-calendar.css';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  actionsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'end',
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

  const meetingTime = details.start
  console.log(meetingTime)
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <Card className={classes.card}>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <div
                      style={{
                      backgroundColor: '#' + details.colour,
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
                    secondary="sjkds"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <People/>
                  </ListItemIcon>
                  <ListItemText
                    primary={details.name}
                    secondary={details.email}
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
                {details.url ?
                  <ListItem>
                    <ListItemIcon>
                      <Cast/>
                    </ListItemIcon>
                    <ListItemText
                      primary={details.url}
                    />
                  </ListItem>
                :
                  <ListItem>
                    <ListItemIcon>
                      <Phone/>
                    </ListItemIcon>
                    <ListItemText
                      primary={details.phone}
                    />
                  </ListItem>
                }
              </List>
            </CardContent>

          <CardActions>
            <div className={classes.actionsWrapper}>
              <Button size="small" color="primary">
                Share
              </Button>
              <div className={classes.buttonGroup}>
              {details.url ?
                <Fragment>
                  <Tooltip title="Copy Meeting Link" aria-label="Copy Meeting Link">
                    <IconButton aria-label="CopyLink">
                      <Link color="primary"/>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Go to Meeting" aria-label="Go to Meeting">
                    <IconButton aria-label="GoToMeeting" button component="a" href={details.url} target="_blank">
                      <Launch color="primary" />
                    </IconButton>
                  </Tooltip>
                </Fragment>
              :
                null
              }
              <Tooltip title="Cancel Meeting" aria-label="Cancel Meeting">
                <IconButton aria-label="Cancel Meeting">
                  <Delete color="secondary" />
                </IconButton>
              </Tooltip>
            </div>
          </div>
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

//button component="a" href={details.url} target="_blank"
