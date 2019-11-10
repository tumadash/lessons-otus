import * as React from "react";

export interface AppProps {
    message: string
}

export class App extends React.Component<AppProps, {}> {
    render() {
        return <h1>Message: {this.props.message}!</h1>
    }
}