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
    let cities = state.cities;
    if (cities.length === 0){
        cities = JSON.parse(localStorage.getItem('cities') || '[]');
    }
    switch (action.type) {
        case ADD_CITY: {
            const newCities = [...cities, action.city];
            localStorage.setItem('cities', JSON.stringify(newCities));
            return {
                cities: newCities
            }
        }
        case DELETE_CITY: {
            const newCities = cities.filter(
                city => city.name !== action.name
            );
            localStorage.setItem('cities', JSON.stringify(newCities));
            return {
                cities: newCities
            }
        }
        default:
            return {
                cities
            };
    }
}