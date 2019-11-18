import * as React from "react";

export interface ListFavouritesProps {
    list: string[]
}

export class ListFavourites extends React.Component<ListFavouritesProps, {}> {
    render() {
        return <ul style={{margin: '10pt'}} className="list-group">
            {this.props.list.map(value => <li className="list-group-item" key={value}>{value}</li>)}
        </ul>
    }
}