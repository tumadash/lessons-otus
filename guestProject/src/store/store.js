import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import {list} from './list/reducers'
import {visibilityFilter} from './filter/reducers'
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const composedEnhancers = compose(
    applyMiddleware(thunk)
);

const listApp = combineReducers({
    list,
    visibilityFilter,
});

const persistedReducer = persistReducer(persistConfig, listApp);

const store = createStore(
    persistedReducer,
    {},
    composedEnhancers
);

let persistor = persistStore(store);

export {
    store,
    persistor,
};
