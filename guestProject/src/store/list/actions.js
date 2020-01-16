export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';
export const EDIT_GUEST = 'EDIT_GUEST';
export const CHECK_GUEST = 'CHECK_GUEST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export function addGuest(name) {
    return {type: ADD_GUEST, name}
}

export function editGuest(guest) {
    return {type: EDIT_GUEST, guest}
}

export function deleteGuest(guest) {
    return {type: DELETE_GUEST, guest}
}

export function checkGuest(id) {
    return {type: CHECK_GUEST, id}
}

export function setVisibilityFilter(item) {
    return {
        type: SET_VISIBILITY_FILTER,
        item
    }
};

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_TWO: 'SHOW_TWO',
    SHOW_ONE: 'SHOW_ONE'
};