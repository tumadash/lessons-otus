export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';
export const EDIT_GUEST = 'EDIT_GUEST';
export const CHECK_GUEST = 'CHECK_GUEST';


export function addGuest(name) {
    return {type: ADD_GUEST, name}
}

export function editGuest(guest) {
    return {type: EDIT_GUEST, guest}
}

export function deleteGuest(id) {
    return {type: DELETE_GUEST, id}
}

export function checkGuest(id) {
    return {type: CHECK_GUEST, id}
}
