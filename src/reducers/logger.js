import { combineReducers } from 'redux';
const initialState = {
    filteredLogs: [],
    persistedLogs: [],
    logs: []
};

const logWorker = (state=initialState, action) => {
    switch(action.type) {
        case 'CLEAR_LOGS':
        localStorage.removeItem('state');
            return {
                ...state,
                persistedLogs: [],
                logs: [],
                filteredLogs: []
            }
        case 'CLEAR_TIME_STAMP_FILTERED_LOGS':
        localStorage.removeItem('state');
            return {
                ...state,
                logs: []
            }
        case 'CLEAR_FILTERED_LOGS_BY_ACTION_NAME':
        localStorage.removeItem('state');
            return {
                ...state,
                filteredLogs: []
            }
        case 'UPDATE_LOGS':
            const newDate = new Date();
            return {
                ...state,
                logs: state.persistedLogs.filter(log => (newDate.getMinutes() - log.minutes) <= action.minutes)
            }
        case 'FILTER_LOGS_BY_ACTION_NAME':
            return {
                ...state,
                filteredLogs: state.persistedLogs.filter(log => log.actionType === action.name)
            }
    }
    return {
        ...state,
        persistedLogs: state.persistedLogs.concat({
            actionType: action.type,
            day: new Date().getUTCDate(),
            month: new Date().getUTCMonth(),
            year: new Date().getUTCFullYear(),
            hour: new Date().getHours(),
            minutes: new Date().getUTCMinutes(),
            seconds: new Date().getSeconds()
        })
    };
};

const logObserver = (state=initialState, action) => {
    switch(action.type) {
        case 'CLEAR_LOGS':
            localStorage.removeItem('state');
            return {
                ...state,
                persistedLogs: []
            }
    }

    return state;
};

const logger = combineReducers({
    logObserver,
    logWorker
});


export default logger;