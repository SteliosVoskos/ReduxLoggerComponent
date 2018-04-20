import { combineReducers } from 'redux';

import person from './person';
import logger from './logger';

const rootReducer = combineReducers({
    logger,
    person
});

export default rootReducer;