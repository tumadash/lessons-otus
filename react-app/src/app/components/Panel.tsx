import * as React from "react";

export interface PanelProps {
    info: any,
    city: string
}

export class Panel extends React.Component<PanelProps, {}> {
    render() {
        return <div className="weather-panel">
            <div>
                Город: {this.props.city}
            </div>
            <div>
                Температура: {this.props.info.temperature}
            </div>
            <div>
                Влажность: {this.props.info.humidity}
            </div>
            <div>
                Осадки: {this.props.info.precipitation}
            </div>
        </div>
    }
}