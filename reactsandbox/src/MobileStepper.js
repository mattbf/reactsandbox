import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    height: '200px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
    border: 'solid',
  },
  mobileStepper: {
    left: '0px',
    bottom: '0px',
    width: '100%',
  },
  content: {

  },
  gridContainter: {
    width: '100%',
    border: 'solid',
    borderColor: '#7859ee',
    height: '100vh',
  },
  gridItem: {
    border: 'solid',
    borderColor: '#2979ff',
    width: '100%',
  },
}));

function DateMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const stepperComponents = props.stepperComponents;
  const maxSteps = stepperComponents.length;
  const ConfirmLink = props => <Link to="/about" {...props} />

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <div className={classes.root}>
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      className={classes.gridContainter}
    >
      <Grid item className={classes.gridItem}>
        <Paper square elevation={0} className={classes.header}>
          <Typography variant="h6">{stepperComponents[activeStep].label}</Typography>
        </Paper>
      </Grid>
      <Grid item className={classes.gridItem}>
        <div>
          {stepperComponents[activeStep].component}
        </div>
      </Grid>
      <Grid item className={classes.gridItem}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            activeStep === maxSteps -1 ?
            <Button component={ConfirmLink} variant= "contained" color="primary" size="small">
            Confirm
            </Button>
            :
            <Button variant= "contained" color="primary" size="small" onClick={handleNext}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default DateMobileStepper;
