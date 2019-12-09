import * as React from "react";
import {City} from "../../store/city/types";

export interface ListFavouritesProps {
    cities: City[],
    setCurrentCity: (name: City) => void,
}

export class ListFavourites extends React.Component<ListFavouritesProps> {
    state = {
        activeCity: ''
    };

    render() {
        return this.props.cities.length !== 0 ?<ul style={{margin: '0 15pt'}} className="list-group" >
            {this.props.cities.map(value => <li
                className={"list-group-item list-group-item-action " + (value.name == this.state.activeCity ? 'active' : '')}
                key={value.name}
                onClick={this.setCity.bind(this, value)}>{value.name}</li>)}
        </ul> : <div style={{margin: '0 15pt', padding:'10px', backgroundColor: 'white', fontWeight: 'bold'}}>Нет избранных городов</div>
    }

    setCity(city: City) {
        this.setState({activeCity: city.name});
        this.props.setCurrentCity(city)
    }

}