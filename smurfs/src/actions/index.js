import axios from 'axios'

export const GET_SMURF = 'GET_SMURF'
export const ADD_SMURF = 'ADD_SMURF'

export const getSmurfs = () => dispatch => {
    console.log("Getting smurfs");
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => dispatch({ type: GET_SMURF, payload: response.data }))
        .catch(err => console.log (err))
}

export const addSmurf = () => dispatch => {
    
}