import {combineReducers} from 'redux'
import {
    ADD_GUEST,
    DELETE_GUEST,
    EDIT_GUEST
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
        case EDIT_GUEST:
            if (action.guest.name) {
                let array = state;
                const index = array.map(function (e) {
                    return e.id;
                }).indexOf(action.guest.id);
                if (~index) {
                    array[index].name = action.guest.name;
                }
                return array;
            }
            return state.filter(
                guest => guest.id !== action.guest.id
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