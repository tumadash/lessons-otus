import * as React from "react";

export interface ButtonProps {
    submit: () => void,
    title: string
}


export class Button extends React.Component<ButtonProps, {}> {
    render() {
        return <button className="btn btn-primary" onClick={this.props.submit}>{this.props.title}</button>
    }
}