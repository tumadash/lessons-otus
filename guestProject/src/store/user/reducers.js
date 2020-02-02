import {SET_NAME, SET_PHOTO} from './actions';

export const user = (state = {}, action) => {
    switch (action.type) {
        case SET_NAME:
            return {name: action.name, photo: state.photo};
        case SET_PHOTO:
            return {name: state.name, photo: action.uri};
        default:
            return state
    }
};


