import React, {useEffect, useState} from 'react';
import axios from 'axios';
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

// function createData(date, amount) {
//     return { date, amount };
//   }
  
//   const data = [
//     createData('4/09', 49),
//     createData('4/10', 48),
//     createData('4/11', 31),
//     createData('4/12', 39),
//     createData('4/13', 40),
//     createData('4/14', 54),
//     createData('4/15', 17),
//     createData('4/16', 15),
//     createData('4/17', 60),
//     createData('4/18', 59),
//     createData('4/19', 37),
//     createData('4/20', 28),
//     createData('4/21', 22),
//     createData('4/22', 10),
//     createData('4/23', 28),
//     createData('4/24', 34),
//     createData('4/25', 30),
//     createData('4/26', 46),
//     createData('4/27', 28),
//     createData('4/28', 24),
//     createData('4/29', 27),
//     createData('4/30', 20),
//     createData('5/01', 26),
//     createData('5/02', 33),
//     createData('5/03', 26),
//     createData('5/04', 20),
//     createData('5/05', 33),
//     createData('5/06', 46),
//     createData('5/07', 40),
//     createData('5/08', 55),
//     createData('5/09', 34),
//     createData('5/10', 31),
//     createData('5/11', 17),
//     createData('5/12', 21),
//     createData('5/13', 38),
//     createData('5/14', 35),
//     createData('5/15', 54),
//     createData('5/16', 31),
//     createData('5/17', 33),
//     createData('5/18', 11),
//     createData('5/19', 63),
//     createData('5/20', 15),
//     createData('5/21', 41),
//     createData('5/22', 30),
//     createData('5/23', 28),
//     createData('5/24', 25),
//     createData('5/25', 19),
//     createData('5/26', 29),
//     createData('5/27', 34),
//     createData('5/28', 48),
//     createData('5/29', 67),
//     createData('5/30', 56),
//     createData('5/31', 78),
//     createData('6/01', 14),
//     createData('6/02', 114),
//     createData('6/03', 129),
//     createData('6/04', 42),
//     createData('6/05', 214),
//     createData('6/06', 67),
//     createData('6/07', 148),
//     createData('6/08', 56),
//     createData('6/09', 7),
//     createData('6/10', 189),
//     createData('6/11', 149),
//     createData('6/12', 149),
//     createData('6/13', 261),
//     createData('6/14', 21),
//     createData('6/15', 34),
//     createData('6/16', 485),
//     createData('6/17', 56),
//   ];

function Deposits(props) {
  const [dataManip, setDataManip] = useState()

async function findLastSeven() {
  const result = await axios
  .get("https://covid-tracker-be.herokuapp.com/data")
  .then(res => {
            const dataManip = Number([res.data[res.data.length - 1].value]) + Number([res.data[res.data.length - 2].value]) + Number([res.data[res.data.length - 3].value]) + Number([res.data[res.data.length - 4].value]) + Number([res.data[res.data.length - 5].value]) + Number([res.data[res.data.length - 6].value]) + Number([res.data[res.data.length - 7].value]);
            setDataManip(dataManip)
        })
        .catch(error => {
            console.log(error)
            alert(error)
        })

      }

      useEffect(() => {
        findLastSeven();
       }, []);


    // const last_seven_days = Number([data[data.length - 1].amount]) + Number([data[data.length - 2].amount]) + Number([data[data.length - 3].amount]) + Number([data[data.length - 4].amount]) + Number([data[data.length - 5].amount]) + Number([data[data.length - 6].amount]) + Number([data[data.length - 7].amount])
    // ('last7', last_seven_days)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');

    const classes = useStyles();
  return (
    <React.Fragment>
      <Title>New Positive Tests Over Last 7 Days</Title>
      <Typography component="p" variant="h4">
      {dataManip}
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

export default Deposits