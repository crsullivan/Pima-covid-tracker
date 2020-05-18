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

  ];
  
  function createThreeDayData(ThreeDays, ThreeDayAvg) {
      return { ThreeDays, ThreeDayAvg };
    }
    
    const three_day_data = [
      createThreeDayData('4/09', (data.slice(0,1)[0].amount + data.slice(1,2)[0].amount + data.slice(2,3)[0].amount) / 3),
      createThreeDayData('4/12', (data.slice(3,4)[0].amount + data.slice(4,5)[0].amount + data.slice(5,6)[0].amount) / 3),
      createThreeDayData('4/15', (data.slice(6,7)[0].amount + data.slice(7,8)[0].amount + data.slice(8,9)[0].amount) / 3),
      createThreeDayData('4/18', (data.slice(9,10)[0].amount + data.slice(10,11)[0].amount + data.slice(11,12)[0].amount) / 3),
      createThreeDayData('4/21', (data.slice(12,13)[0].amount + data.slice(13,14)[0].amount + data.slice(14,15)[0].amount) / 3),
      createThreeDayData('4/24', (data.slice(15,16)[0].amount + data.slice(16,17)[0].amount + data.slice(17,18)[0].amount) / 3),
      createThreeDayData('4/27', (data.slice(18,19)[0].amount + data.slice(19,20)[0].amount + data.slice(20,21)[0].amount) / 3),
      createThreeDayData('4/30', (data.slice(21,22)[0].amount + data.slice(22,23)[0].amount + data.slice(23,24)[0].amount) / 3),
      createThreeDayData('5/03', (data.slice(24,25)[0].amount + data.slice(25,26)[0].amount + data.slice(26,27)[0].amount) / 3),
      createThreeDayData('5/06', (data.slice(27,28)[0].amount + data.slice(28,29)[0].amount + data.slice(29,30)[0].amount) / 3),
      createThreeDayData('5/09', (data.slice(30,31)[0].amount + data.slice(31,32)[0].amount + data.slice(32,33)[0].amount) / 3),
      createThreeDayData('5/12', (data.slice(33,34)[0].amount + data.slice(34,35)[0].amount + data.slice(35,36)[0].amount) / 3),
      createThreeDayData('5/15', (data.slice(36,37)[0].amount + data.slice(37,38)[0].amount + data.slice(38,39)[0].amount) / 3),
    ];
  

export default function ThreeDayDeposits() {

    // const last_seven_days = Number([data[data.length - 1].amount]) + Number([data[data.length - 2].amount]) + Number([data[data.length - 3].amount]) + Number([data[data.length - 4].amount]) + Number([data[data.length - 5].amount]) + Number([data[data.length - 6].amount]) + Number([data[data.length - 7].amount])
    // console.log('last7', last_seven_days)
    let total = 0
    three_day_data.forEach(element => total += element.ThreeDayAvg)
    let avg = total / three_day_data.length

    let last_total = three_day_data[three_day_data.length - 1].ThreeDayAvg


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');

    function number_format(val, decimals){
        //Parse the value as a float value
        val = parseFloat(val);
        //Format the value w/ the specified number
        //of decimal places and return it.
        return val.toFixed(decimals);
    }

    const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Typical Three Day Average</Title>
      <Typography component="p" variant="h4">
      {number_format(avg,2)}
      </Typography>
      <Title>Last Recorded Three Day Average</Title>
      <Typography component="p" variant="h4">
      {number_format(last_total,2)}
      </Typography>

      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}