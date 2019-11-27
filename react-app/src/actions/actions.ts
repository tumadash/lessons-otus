export enum Actions {
    ADD_CITY = 'ADD_CITY',
    REMOVE_CITY = 'REMOVE_CITY'
}

export function addCity(city:string){
    return {type: Actions.ADD_CITY, city}
}
export function removeCity(city:string){
    return {type: Actions.REMOVE_CITY, city}
}