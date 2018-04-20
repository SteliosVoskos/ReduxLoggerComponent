import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { loadState, saveState } from './services/LocalStorage';

const persistedLogs = loadState();

const store = createStore(rootReducer, persistedLogs);
store.subscribe(() => {
    saveState(store.getState());
});

export default store;