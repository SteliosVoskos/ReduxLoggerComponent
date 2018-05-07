import { combineReducers } from 'redux';
const initialState = {
    filteredLogs: [],
    persistedLogs: [],
    logs: [],
    header: ''
};

const logWorker = (state=initialState, action) => {
    switch(action.type) {
        case 'CLEAR_LOGS':
        localStorage.removeItem('state');
            return {
                ...state,
                persistedLogs: [],
                logs: []
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