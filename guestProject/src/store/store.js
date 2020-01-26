import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {compose, combineReducers} from 'redux'
import {list} from './list/reducers'
import {visibilityFilter} from './filter/reducers'
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const enhancers = [];
const middleware = [thunk];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
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
