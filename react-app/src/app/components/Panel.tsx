import * as React from "react";

export interface PanelProps {
    info: { temperature: string, humidity: string, precipitation: string },
    nameCity: string
}

export class Panel extends React.Component<PanelProps, {}> {
    render() {
        return <div className="weather-panel">
            <div>
                Город: {this.props.nameCity}
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