import {
    addGuestService,
    checkGuestService,
    deleteGuestService,
    editGuestService,
    getGuestsService
} from "../../service/list-service";

export const ADD_GUEST = 'ADD_GUEST';
export const GET_GUESTS = 'GET_GUESTS';
export const DELETE_GUEST = 'DELETE_GUEST';
export const EDIT_GUEST = 'EDIT_GUEST';
export const CHECK_GUEST = 'CHECK_GUEST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export function addGuest(name) {
    let guest = {
        id: generateId(name),
        name: name,
        isChecked: false
    };
    addGuestService(guest);
    return addGuestAction(guest);
}
export function deleteGuest(guest) {
    deleteGuestService(guest);
    return deleteGuestAction(guest);
}

export function editGuest(guest) {
    if (guest.name) {
        editGuestService(guest);
        return editGuestAction(guest);
    }
    return deleteGuest(guest);
}

export function checkGuest(id) {
    checkGuestService(id);
    return checkGuestAction(id);
}

export function getGuests() {
    return (dispatch) => {
        getGuestsService().then((list) => {
            dispatch(getGuestsAction(Object.values(list.val())));
        })
    }
}

export function addGuestAction(guest) {
    return {type: ADD_GUEST, guest}
}

export function getGuestsAction(list) {
    return {type: GET_GUESTS, list}
}

export function editGuestAction(guest) {
    return {type: EDIT_GUEST, guest}
}

export function deleteGuestAction(guest) {
    return {type: DELETE_GUEST, guest}
}

export function checkGuestAction(id) {
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

function generateId(name) {
    return name + Math.random().toString(16).slice(2)
}