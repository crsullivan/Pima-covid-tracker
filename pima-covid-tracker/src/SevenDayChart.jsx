import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

function SevenDayChart() {
  const [dataSize, setDataSize] = useState()
  const [dataManip, setDataManip] = useState()
  const [every7Days, setEvery7Days] = useState([])
  const [every7DaysData, setEvery7DaysData] = useState([])
  const [newArr, setNewArr] = useState()



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
                obj["date"] = el[6].date;
                obj["value"] = Number(((el[0].value + el[1].value + el[2].value + el[3].value + el[4].value + el[5].value + el[6].value) / 7).toFixed(2))
                setEvery7DaysData(every7DaysData.push(obj))
              })
                const newArr = Array.from(every7DaysData)
                setNewArr(newArr)
          })

          
          .catch(error => {
              console.log(error)
              alert(error)
          })

        }

    useEffect(() => {
      getData();
     }, []);

  const theme = useTheme();

    return (
      <React.Fragment>
        <Title>Seven Day Averages</Title>
        <ResponsiveContainer>
          <LineChart
            data={newArr}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          >
            <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
            <YAxis stroke={theme.palette.text.secondary}>
              <Label
                angle={270}
                position="left"
                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
              >
                New Daily Positive Tests
              </Label>
            </YAxis>
            <Line type="monotone" dataKey="value" stroke={theme.palette.primary.main} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
}

export default SevenDayChart