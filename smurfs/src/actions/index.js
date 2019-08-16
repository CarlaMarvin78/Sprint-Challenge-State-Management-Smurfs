import axios from 'axios'
import { thisExpression } from '@babel/types';

export const GET_SMURF = 'GET_SMURF'
export const ADD_SMURF = 'ADD_SMURF'

export const getSmurfs = () => dispatch => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => dispatch({ type: GET_SMURF, payload: response.data }))
        .catch(err => console.log (err))
}

