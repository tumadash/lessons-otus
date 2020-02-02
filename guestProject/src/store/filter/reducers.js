import {SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';


export const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.item.filter;
        default:
            return state
    }
};


