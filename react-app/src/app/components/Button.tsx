import * as React from "react";

export interface ButtonProps {
    submit: () => void,
    title: string,
    disabled?: boolean
}


export class Button extends React.Component<ButtonProps, {}> {
    render() {
        return <button disabled={this.props.disabled} className="btn btn-primary" onClick={this.props.submit}>{this.props.title}</button>
    }
}