import { combineReducers, createStore } from 'redux';

import { reducer as counterReducer } from '../models/counter/reducer';

const reducers = combineReducers({
    counter: counterReducer,
});

const storeCreator = () => createStore(reducers);

export default storeCreator;
