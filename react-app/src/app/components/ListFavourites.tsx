import * as React from "react";
import {City} from "../../store/city/types";

export interface ListFavouritesProps {
    cities: City[]
}

export class ListFavourites extends React.Component<ListFavouritesProps, {}> {
    render() {
        return <ul style={{margin: '10pt'}} className="list-group">
            {this.props.cities.map(value => <li className="list-group-item" key={value.name}>{value.name}</li>)}
        </ul>
    }
}