export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

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

