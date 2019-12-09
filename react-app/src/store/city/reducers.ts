import {
    CityState,
    ADD_CITY,
    DELETE_CITY,
    CityActionTypes
} from "./types";

const initialState: CityState = {
    cities: []
};

export function cityReducer(
    state = initialState,
    action: CityActionTypes
): CityState {
    switch (action.type) {
        case ADD_CITY:
            return {
                cities: [...state.cities, action.city]
            };
        case DELETE_CITY:
            return {
                cities: state.cities.filter(
                    city => city.name !== action.name
                )
            };
        default:
            return state;
    }
}