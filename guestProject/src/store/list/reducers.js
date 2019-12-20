import {combineReducers} from 'redux'
import {
    ADD_GUEST,
    DELETE_GUEST,
} from './actions'

function list(state = [], action) {
    switch (action.type) {
        case ADD_GUEST:
            return [
                ...state,
                {
                    id: generateId(action.name),
                    name: action.name
                }
            ];
        case DELETE_GUEST:
            return state.filter(
                guest => guest.id !== action.id
            );
        default:
            return state
    }
}

const listApp = combineReducers({
    list
});
export default listApp

function generateId(name) {
    return name + Math.random().toString(16).slice(2)
}