export const SET_NAME = 'SET_NAME';
export const SET_PHOTO = 'SET_PHOTO';


export function setName(name) {
    return {type: SET_NAME, name}
}
export function setPhoto(uri) {
    return {type: SET_PHOTO, uri}
}