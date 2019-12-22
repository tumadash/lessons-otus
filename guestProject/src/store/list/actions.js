export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';
export const EDIT_GUEST = 'EDIT_GUEST';


export function addGuest(name) {
    return {type: ADD_GUEST, name}
}

export function editGuest(guest) {
    return {type: EDIT_GUEST, guest}
}

export function deleteGuest(index) {
    return {type: DELETE_GUEST, index}
}
