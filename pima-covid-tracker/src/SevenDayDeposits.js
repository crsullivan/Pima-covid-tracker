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

function SevenDayDeposits(props) {

  const [dataSize, setDataSize] = useState()
  const [dataManip, setDataManip] = useState()
  const [every7Days, setEvery7Days] = useState([])
  const [every7DaysData, setEvery7DaysData] = useState([])
  const [newArr, setNewArr] = useState()
  const [sevenDayAvg, setSevenDayAvg] = useState()
  const [currentAvg, setCurrentAvg] = useState()

  async function getData() {
    const result = await axios
    .get("https://covid-tracker-be.herokuapp.com/data")
    .then(res => {

              const dataSize = res.data.length - (Math.floor(res.data.length/7) * 7) 
              const dataManip = res.data.slice(dataSize)
              setDataManip(dataManip)
              const every7Days = []
              var i,j,temparray,chunk = 7;
              for (i=0,j=dataManip.length; i<j; i+=chunk) {
                temparray = dataManip.slice(i,i+chunk);
                setEvery7Days(every7Days.push(temparray))
              }
              const every7DaysData = []
              var counter = 0
              every7Days.forEach( el => {
                var obj = {};
                obj["id"] = counter += 1
                obj["date"] = el[2].date;
                obj["value"] = Number(((el[0].value + el[1].value + el[2].value + el[3].value + el[4].value + el[5].value + el[6].value) / 7).toFixed(2))
                setEvery7DaysData(every7DaysData.push(obj))
              })
            
                const newArr = Array.from(every7DaysData)
                setNewArr(newArr)
                var total = 0
                newArr.forEach( el => {
                  total += el.value
                })
                var avg = (total / newArr.length).toFixed(2)
                const sevenDayAvg = avg
                setSevenDayAvg(sevenDayAvg)
                const currentAvg = newArr[newArr.length - 1].value
                setCurrentAvg(currentAvg)
          })
          .catch(error => {
              console.log(error)
              alert(error)
          })
        }

    useEffect(() => {
      getData();
     }, []);

    const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Typical Seven Day Average</Title>
      <Typography component="p" variant="h4">
      {sevenDayAvg}
      </Typography>
      <Title>Last Recorded Seven Day Average</Title>
      <Typography component="p" variant="h4">
      {currentAvg}
      </Typography>
    </React.Fragment>
  );
}

export default SevenDayDeposits