const initialState = {
    name: 'Name',
    address: 'Address line 1',
    counter: 0
};

const person = (state=initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'SHOW_STUFF':
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
    return state;
};

export default person;