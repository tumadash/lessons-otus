import {
    ADD_GUEST,
    CHECK_GUEST,
    DELETE_GUEST,
    EDIT_GUEST,
    GET_GUESTS,
} from './actions';


function editArray(state, id, guest) {
    let array = JSON.parse(JSON.stringify(state));
    const index = array.map((e) => e.id).indexOf(id);
    if (~index) {
        if (guest) {
            array[index] = guest;
        } else {
            array[index].isChecked = !array[index].isChecked;
        }
    }
    return array;
}

export const list = (state = [], action) => {
    switch (action.type) {
        case GET_GUESTS:
            return action.list;
        case ADD_GUEST:
            return [...state, action.guest];
        case DELETE_GUEST:
            return state.filter(
                guest => guest.id !== action.guest.id
            );
        case CHECK_GUEST:
            return editArray(state, action.id);
        case EDIT_GUEST:
            return editArray(state, action.guest.id, action.guest);
        default:
            return state
    }
};


