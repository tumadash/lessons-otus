import * as React from "react";

export interface ListFavouritesProps {
    list: []
}

export class ListFavourites extends React.Component<ListFavouritesProps, {}> {
    render() {
        return <ul className="list-group">
            {Object.entries(this.props.list).map(([key, value]) => this.renderInformation(key, value))}
        </ul>
    }
    renderInformation(key:string, value:string) {
        return (
            <li className="list-group-item" key={key}>{value}</li>
        );
    }
}