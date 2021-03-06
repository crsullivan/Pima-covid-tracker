import React, {useEffect, useState} from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from './listItems';
import Chart from './Chart';
import ThreeDayChart from './ThreeDayChart';
import Deposits from './Deposits';
import ThreeDayDeposits from './ThreeDayDeposits';
import Orders from './Orders';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import SevenDayChart from './SevenDayChart';
import SevenDayDeposits from './SevenDayDeposits';
import { TextareaAutosize } from '@material-ui/core';

const accent = purple['A200'];

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#c852ff',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

function Copyright() {
  return (
    <Typography variant="body2" color="purple" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        EclecticLogic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//   },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  // drawerPaper: {
  //   position: 'relative',
  //   whiteSpace: 'nowrap',
  //   width: drawerWidth,
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // drawerPaperClose: {
  //   overflowX: 'hidden',
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   width: theme.spacing(7),
  //   [theme.breakpoints.up('sm')]: {
  //     width: theme.spacing(9),
  //   },
  // },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    
  },
  fixedHeight: {
    height: 240,
    margin: 'auto',
  },
}));

export default function Dashboard(props) {

  const [stats, setStats] = useState()

  useEffect (() => {
    (async () => {
    await axios
    .get("https://covid-tracker-be.herokuapp.com/data")
    .then(res => {
              const stats = res.data;
              setStats(stats)
              
          })
          .catch(error => {
              console.log(error)
              alert(error)
          })
        }) ();
      }, [])

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  function goToAdmin() {
    window.location.assign('https://laurasgraph.now.sh/admin');
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="secondary.dark" position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="purple" noWrap className={classes.title}>
            Laura's Pima County Covid19 Tracker
          </Typography>
          <Button color="inherit" onClick={goToAdmin}>
          ADMIN
          </Button>
        </Toolbar>
      </AppBar>
      {/* <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div> */}
        {/* <Divider />
        <List>{mainListItems}</List>
        <Divider /> */}
        {/* <List>{secondaryListItems}</List> */}
      {/* </Drawer> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <ThreeDayChart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <ThreeDayDeposits />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9} >
              <Paper className={fixedHeightPaper}>
                <SevenDayChart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <SevenDayDeposits />
              </Paper>
            </Grid>
          </Grid>

        <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}