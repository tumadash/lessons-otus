import {combineReducers} from 'redux'
import {
    ADD_GUEST,
    DELETE_GUEST,
    EDIT_GUEST,
    CHECK_GUEST
} from './actions'

function editArray(state, id, name) {
    let array = JSON.parse(JSON.stringify(state));
    const index = array.map(function (e) {
        return e.id;
    }).indexOf(id);
    if (~index) {
        if (name) {
            array[index].name = name;
        } else {
            array[index].isChecked = !array[index].isChecked;
        }
    }
    return array;
}

function list(state = [], action) {
    switch (action.type) {
        case ADD_GUEST:
            return [
                ...state,
                {
                    id: generateId(action.name),
                    name: action.name,
                    isChecked: false
                }
            ];
        case DELETE_GUEST:
            return state.filter(
                guest => guest.id !== action.id
            );
        case CHECK_GUEST:
            return editArray(state, action.id);
        case EDIT_GUEST:
            if (action.guest.name) {
                return editArray(state, action.guest.id, action.guest.name);
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