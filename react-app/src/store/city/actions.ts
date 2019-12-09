import { City, ADD_CITY, DELETE_CITY } from "./types";

export function addCity(city: City) {
    return {
        type: ADD_CITY,
        city
    };
}

export function deleteCity(name: string) {
    return {
        type: DELETE_CITY,
        name
    };
}
