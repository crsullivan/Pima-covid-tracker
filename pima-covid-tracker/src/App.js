import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchData} from './actions/index';
import './App.css';
import Dashboard from './Dashboard'

function App(props) {
  const [stats, setStats] = useState()

  useEffect (() => {
    const stats = props.fetchData();
    setStats(stats)
}, [])
console.log(stats)
  return (
    <div className="App">
      <Dashboard state={stats}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      covidStats: state.covidStats,
      loading: state.loading,
      error: state.error
  };
};

export default connect(mapStateToProps, {fetchData})(App)