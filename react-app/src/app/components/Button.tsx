import * as React from "react";

export interface ButtonProps {
    submit: () => void
}


export class Button extends React.Component<ButtonProps,{}> {
    render() {
        return <button className="btn btn-primary" onClick={this.props.submit}>Показать</button>
    }
}