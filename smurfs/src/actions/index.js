import axios from 'axios'

export const GET_SMURF = 'GET_SMURF'
export const ADD_SMURF = 'ADD_SMURF'

export const getSmurfs = () => dispatch => {
    console.log("Getting smurfs");
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => dispatch({ type: GET_SMURF, payload: response.data }))
        .catch(error => console.log(error))
}

export const addSmurf = (smurf) => dispatch => {
    console.log("Adding smurf: ", smurf);
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(response => dispatch({ type: ADD_SMURF, payload: response.data }))
        .catch(error => console.log(error));
}
