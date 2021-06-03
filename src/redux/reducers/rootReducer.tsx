import { combineReducers } from 'redux';

import randomNumberReducers from './randomNumberReducers';

export const rootReducer = combineReducers({
    numRamdom: randomNumberReducers,
});
