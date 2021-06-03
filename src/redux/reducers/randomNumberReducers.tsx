import { ActionTypeNumber } from '../actions/randomNumberActions';
import { RANDOM_NUMBER, } from '../types/types';


export interface NumRamState {
    numRamdom: any;
}

const initialState = {
    numRamdom: {
        rand1: 'WIN',
        rand2: 'IT',
        rand3: 'NOW',
    },
};
export default function randomNumberReducers(
    state: NumRamState = initialState,
    action: ActionTypeNumber
): NumRamState {
    switch (action.type) {
        case RANDOM_NUMBER:
            return { ...state, numRamdom: action.payload };

        default:
            return state;
    }
}
