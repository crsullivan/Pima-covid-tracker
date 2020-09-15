import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
// function createData(date, amount) {
//   return { date, amount };
// }

// const data = [
//   createData('4/09', 49),
//   createData('4/10', 48),
//   createData('4/11', 31),
//   createData('4/12', 39),
//   createData('4/13', 40),
//   createData('4/14', 54),
//   createData('4/15', 17),
//   createData('4/16', 15),
//   createData('4/17', 60),
//   createData('4/18', 59),
//   createData('4/19', 37),
//   createData('4/20', 28),
//   createData('4/21', 22),
//   createData('4/22', 10),
//   createData('4/23', 28),
//   createData('4/24', 34),
//   createData('4/25', 30),
//   createData('4/26', 46),
//   createData('4/27', 28),
//   createData('4/28', 24),
//   createData('4/29', 27),
//   createData('4/30', 20),
//   createData('5/01', 26),
//   createData('5/02', 33),
//   createData('5/03', 26),
//   createData('5/04', 20),
//   createData('5/05', 33),
//   createData('5/06', 46),
//   createData('5/07', 40),
//   createData('5/08', 55),
//   createData('5/09', 34),
//   createData('5/10', 31),
//   createData('5/11', 17),
//   createData('5/12', 21),
//   createData('5/13', 38),
//   createData('5/14', 35),
//   createData('5/15', 54),
//   createData('5/16', 31),
//   createData('5/17', 33),
//   createData('5/18', 11),
//   createData('5/19', 63),
//   createData('5/20', 15),
//   createData('5/21', 41),
//   createData('5/22', 30),
//   createData('5/23', 28),
//   createData('5/24', 25),
//   createData('5/25', 19),
//   createData('5/26', 29),
//   createData('5/27', 34),
//   createData('5/28', 48),
//   createData('5/29', 67),
//   createData('5/30', 56),
//   createData('5/31', 78),
//   createData('6/01', 14),
//   createData('6/02', 114),
//   createData('6/03', 129),
//   createData('6/04', 42),
//   createData('6/05', 214),
//   createData('6/06', 67),
//   createData('6/07', 148),
//   createData('6/08', 56),
//   createData('6/09', 7),
//   createData('6/10', 189),
//   createData('6/11', 149),
//   createData('6/12', 149),
//   createData('6/13', 261),
//   createData('6/14', 21),
//   createData('6/15', 34),
//   createData('6/16', 485),
//   createData('6/17', 56),
// ];

// function createThreeDayData(ThreeDays, ThreeDayAvg) {
//     return { ThreeDays, ThreeDayAvg };
//   }


  
//   const three_day_data = [
//     createThreeDayData(data[data.length - 67].date, (data.slice(data.length - 69, data.length - 68)[0].amount + data.slice(data.length - 68, data.length - 67)[0].amount + data.slice(data.length - 67, data.length - 66)[0].amount) / 3),
//     createThreeDayData(data[data.length - 64].date, (data.slice(data.length - 66, data.length - 65)[0].amount + data.slice(data.length - 65, data.length - 64)[0].amount + data.slice(data.length - 64, data.length - 63)[0].amount) / 3),
//     createThreeDayData(data[data.length - 61].date, (data.slice(data.length - 63, data.length - 62)[0].amount + data.slice(data.length - 62, data.length - 61)[0].amount + data.slice(data.length - 61, data.length - 60)[0].amount) / 3),
//     createThreeDayData(data[data.length - 58].date, (data.slice(data.length - 60, data.length - 59)[0].amount + data.slice(data.length - 59, data.length - 58)[0].amount + data.slice(data.length - 58, data.length - 57)[0].amount) / 3),
//     createThreeDayData(data[data.length - 55].date, (data.slice(data.length - 57, data.length - 56)[0].amount + data.slice(data.length - 56, data.length - 55)[0].amount + data.slice(data.length - 55, data.length - 54)[0].amount) / 3),
//     createThreeDayData(data[data.length - 52].date, (data.slice(data.length - 54, data.length - 53)[0].amount + data.slice(data.length - 53, data.length - 52)[0].amount + data.slice(data.length - 52, data.length - 51)[0].amount) / 3),
//     createThreeDayData(data[data.length - 49].date, (data.slice(data.length - 51, data.length - 50)[0].amount + data.slice(data.length - 50, data.length - 49)[0].amount + data.slice(data.length - 49, data.length - 48)[0].amount) / 3),
//     createThreeDayData(data[data.length - 46].date, (data.slice(data.length - 48, data.length - 47)[0].amount + data.slice(data.length - 47, data.length - 46)[0].amount + data.slice(data.length - 46, data.length - 45)[0].amount) / 3),
//     createThreeDayData(data[data.length - 43].date, (data.slice(data.length - 45, data.length - 44)[0].amount + data.slice(data.length - 44, data.length - 43)[0].amount + data.slice(data.length - 43, data.length - 42)[0].amount) / 3),
//     createThreeDayData(data[data.length - 40].date, (data.slice(data.length - 42, data.length - 41)[0].amount + data.slice(data.length - 41, data.length - 40)[0].amount + data.slice(data.length - 40, data.length - 39)[0].amount) / 3),
//     createThreeDayData(data[data.length - 37].date, (data.slice(data.length - 39, data.length - 38)[0].amount + data.slice(data.length - 38, data.length - 37)[0].amount + data.slice(data.length - 37, data.length - 36)[0].amount) / 3),
//     createThreeDayData(data[data.length - 34].date, (data.slice(data.length - 36, data.length - 35)[0].amount + data.slice(data.length - 35, data.length - 34)[0].amount + data.slice(data.length - 34, data.length - 33)[0].amount) / 3),
//     createThreeDayData(data[data.length - 31].date, (data.slice(data.length - 33, data.length - 32)[0].amount + data.slice(data.length - 32, data.length - 31)[0].amount + data.slice(data.length - 31, data.length - 30)[0].amount) / 3),
//     createThreeDayData(data[data.length - 28].date, (data.slice(data.length - 30, data.length - 29)[0].amount + data.slice(data.length - 29, data.length - 28)[0].amount + data.slice(data.length - 28, data.length - 27)[0].amount) / 3),
//     createThreeDayData(data[data.length - 25].date, (data.slice(data.length - 27, data.length - 26)[0].amount + data.slice(data.length - 26, data.length - 25)[0].amount + data.slice(data.length - 25, data.length - 24)[0].amount) / 3),
//     createThreeDayData(data[data.length - 22].date, (data.slice(data.length - 24, data.length - 23)[0].amount + data.slice(data.length - 23, data.length - 22)[0].amount + data.slice(data.length - 22, data.length - 21)[0].amount) / 3),
//     createThreeDayData(data[data.length - 19].date, (data.slice(data.length - 21, data.length - 20)[0].amount + data.slice(data.length - 20, data.length - 19)[0].amount + data.slice(data.length - 19, data.length - 18)[0].amount) / 3),
//     createThreeDayData(data[data.length - 16].date, (data.slice(data.length - 18, data.length - 17)[0].amount + data.slice(data.length - 17, data.length - 16)[0].amount + data.slice(data.length - 16, data.length - 15)[0].amount) / 3),
//     createThreeDayData(data[data.length - 13].date, (data.slice(data.length - 15, data.length - 14)[0].amount + data.slice(data.length - 14, data.length - 13)[0].amount + data.slice(data.length - 13, data.length - 12)[0].amount) / 3),
//     createThreeDayData(data[data.length - 10].date, (data.slice(data.length - 12, data.length - 11)[0].amount + data.slice(data.length - 11, data.length - 10)[0].amount + data.slice(data.length - 10, data.length - 9)[0].amount) / 3),
//     createThreeDayData(data[data.length - 7].date, (data.slice(data.length - 9, data.length - 8)[0].amount + data.slice(data.length - 8, data.length - 7)[0].amount + data.slice(data.length - 7, data.length - 6)[0].amount) / 3),
//     createThreeDayData(data[data.length - 4].date, (data.slice(data.length - 6, data.length - 5)[0].amount + data.slice(data.length - 5, data.length - 4)[0].amount + data.slice(data.length - 4, data.length - 3)[0].amount) / 3),
//     createThreeDayData(data[data.length - 1].date, (data.slice(data.length - 3, data.length - 2)[0].amount + data.slice(data.length - 2, data.length - 1)[0].amount + data.slice(data.length - 1, data.length - 0)[0].amount) / 3),

//   ];
function ThreeDayChart() {
  const [dataSize, setDataSize] = useState()
  const [dataManip, setDataManip] = useState()
  const [every3Days, setEvery3Days] = useState([])
  const [every3DaysData, setEvery3DaysData] = useState([])
  const [newArr, setNewArr] = useState()



  async function getData() {
    const result = await axios
    .get("https://covid-tracker-be.herokuapp.com/data")
    .then(res => {
              const dataSize = res.data.length - (Math.floor(res.data.length/3) * 3) 
              const dataManip = res.data.slice(dataSize)
              setDataManip(dataManip)
              const every3Days = []
              var i,j,temparray,chunk = 3;
              for (i=0,j=dataManip.length; i<j; i+=chunk) {
                temparray = dataManip.slice(i,i+chunk);
                setEvery3Days(every3Days.push(temparray))
              }
              const every3DaysData = []
              var counter = 0
              every3Days.forEach( el => {
                var obj = {};
                obj["id"] = counter += 1
                obj["date"] = el[2].date;
                obj["value"] = Number(((el[0].value + el[1].value + el[2].value) / 3).toFixed(2))
                setEvery3DaysData(every3DaysData.push(obj))
              })
                const newArr = Array.from(every3DaysData)
                setNewArr(newArr)
          })

          
          .catch(error => {
              console.log(error)
              alert(error)
          })

        }
    // const last_seven_days = Number([props.covidStats[props.covidStats.length - 1].value]) + Number([props.covidStats[props.covidStats.length - 2].value]) + Number([props.covidStats[props.covidStats.length - 3].value]) + Number([props.covidStats[props.covidStats.length - 4].value]) + Number([props.covidStats[props.covidStats.length - 5].value]) + Number([props.covidStats[props.covidStats.length - 6].value]) + Number([props.covidStats[props.covidStats.length - 7].value])
    // ('last7', last_seven_days)

    useEffect(() => {
      getData();
     }, []);





  const theme = useTheme();
    // const last_seven_days = Number([data[data.length - 1].amount]) + Number([data[data.length - 2].amount]) + Number([data[data.length - 3].amount]) + Number([data[data.length - 4].amount]) + Number([data[data.length - 5].amount]) + Number([data[data.length - 6].amount]) + Number([data[data.length - 7].amount])
    // (data.slice(data.length - 1, data.length - 0)[0].amount)
    // (three_day_data[0])
    return (
      <React.Fragment>
        <Title>Three Day Averages</Title>
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
                style={{ textAnchor: 'middle', fill: theme.palette.text.secondary }}
              >
                New Daily Positive Tests
              </Label>
            </YAxis>
            <Line type="monotone" dataKey="value" stroke={theme.palette.secondary.main} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
}

export default ThreeDayChart