import * as React from "react";

export interface InputProps {
    handleInputChange: (str: string) => void
}


export class Input extends React.Component<InputProps, {}> {
    constructor(props: any) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event: any) {
        const target = event.target;
        const value = target.value;
        this.props.handleInputChange(value);
    }

    render() {
        return <div className="input-group"><input className="form-control" onChange={this.handleInputChange}/></div>
    }
}