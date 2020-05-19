import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

function createData(date, amount) {
    return { date, amount };
  }
  
  const data = [
    createData('4/09', 49),
    createData('4/10', 48),
    createData('4/11', 31),
    createData('4/12', 39),
    createData('4/13', 40),
    createData('4/14', 54),
    createData('4/15', 17),
    createData('4/16', 15),
    createData('4/17', 60),
    createData('4/18', 59),
    createData('4/19', 37),
    createData('4/20', 28),
    createData('4/21', 22),
    createData('4/22', 10),
    createData('4/23', 28),
    createData('4/24', 34),
    createData('4/25', 30),
    createData('4/26', 46),
    createData('4/27', 28),
    createData('4/28', 24),
    createData('4/29', 27),
    createData('4/30', 20),
    createData('5/01', 26),
    createData('5/02', 33),
    createData('5/03', 26),
    createData('5/04', 20),
    createData('5/05', 33),
    createData('5/06', 46),
    createData('5/07', 40),
    createData('5/08', 55),
    createData('5/09', 34),
    createData('5/10', 31),
    createData('5/11', 17),
    createData('5/12', 21),
    createData('5/13', 38),
    createData('5/14', 35),
    createData('5/15', 54),
    createData('5/16', 31),
    createData('5/17', 33),
    createData('5/18', 11),


  ];

export default function Deposits() {

    const last_seven_days = Number([data[data.length - 1].amount]) + Number([data[data.length - 2].amount]) + Number([data[data.length - 3].amount]) + Number([data[data.length - 4].amount]) + Number([data[data.length - 5].amount]) + Number([data[data.length - 6].amount]) + Number([data[data.length - 7].amount])
    console.log('last7', last_seven_days)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');

    const classes = useStyles();
  return (
    <React.Fragment>
      <Title>New Positive Tests Over Last 7 Days</Title>
      <Typography component="p" variant="h4">
      {last_seven_days}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Todays Date: {mm}/{dd} 
      </Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}