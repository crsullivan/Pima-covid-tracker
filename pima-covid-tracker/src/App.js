import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from './actions/index';
import './App.css';
import Dashboard from './Dashboard'

function App(props) {

  useEffect (() => {
    props.fetchData();
}, [])

  return (
    <div className="App">
      <Dashboard />
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