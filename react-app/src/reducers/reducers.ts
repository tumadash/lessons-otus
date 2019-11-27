import {Actions} from "../actions/actions";
import {combineReducers} from "redux";

interface IAppState {
    list: any[];
}

const initialState: IAppState = {
    list: []
};

export interface IAction {
    type?: Actions,
    city: string
}

function reduce(state = initialState, action: IAction) {
    switch (action.type) {
        case Actions.ADD_CITY:
            return {list: [...state.list, action.city]};
        case Actions.REMOVE_CITY:
            return {list: state.list.filter(e => e !== action.city)}
    }
}

const weatherApp = combineReducers({reduce});
export default weatherApp;