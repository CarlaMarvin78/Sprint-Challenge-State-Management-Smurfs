import React from "react";
import "./App.css";
import {connect} from'react-redux';
import {getSmurfs, addSmurf} from '../actions';
import Form from './Form';


const App = (props) => {
  if (!props.loaded) {
    props.getSmurfs();
    return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
    </div>
  )
  }
  else return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {props.smurfs.map(smurf=><div key={smurf.id}>Name: {smurf.name} Age: {smurf.age} Height:{smurf.height}</div>)}
      <Form addSmurf={props.addSmurf} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loaded: state.loaded
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App)
