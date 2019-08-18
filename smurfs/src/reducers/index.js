import {GET_SMURF, ADD_SMURF} from '../actions';

const initialState = {
    smurfs: [],
    loaded: false

}

export default (state=initialState, action) => {
    switch (action.type) {
        case GET_SMURF:
            return {
                ...state,
                smurfs: action.payload,
                loaded: true
            };
            case ADD_SMURF:
                return {
                    ...state,
                    smurfs: action.payload,
                    loaded: true
                };
        default:
            return state;
    }
}