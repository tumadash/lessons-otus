export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';


export function addGuest(name) {
    return {type: ADD_GUEST, name}
}

export function deleteGuest(index) {
    return {type: DELETE_GUEST, index}
}
