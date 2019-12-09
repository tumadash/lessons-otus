export interface City {
    name: string;
    weather: { temperature: string, humidity: string, precipitation: string };
}

export interface CityState {
    cities: City[];
}

export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";

interface AddCityAction {
    type: typeof ADD_CITY;
    city: City
}

interface DeleteCityAction {
    type: typeof DELETE_CITY;
    name: string;
}

export type CityActionTypes = AddCityAction | DeleteCityAction;