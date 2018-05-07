export function increment() {
    return {
        type: 'INCREMENT'
    }
};

export function showStuff() {
    return {
        type: 'SHOW_STUFF'
    }
};

export function updateLogs(minutes) {
    return {
        type: 'UPDATE_LOGS',
        minutes
    }
}

export function clearLogs() {
    return {
        type: 'CLEAR_LOGS'
    }
}

export function filterLogsByActionName(name) {
    return {
        type: 'FILTER_LOGS_BY_ACTION_NAME',
        name
    };
}