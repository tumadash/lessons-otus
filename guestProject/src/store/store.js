import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {combineReducers} from 'redux'
import {list} from './list/reducers'
import {visibilityFilter} from './filter/reducers'

const listApp = combineReducers({
    list,
    visibilityFilter,
    // allGuests
});
export const store = createStore(listApp, applyMiddleware(thunk));