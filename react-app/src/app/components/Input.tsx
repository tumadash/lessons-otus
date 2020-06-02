import * as React from "react";
import Select from 'react-select'

export interface InputProps {
    handleInputChange: (str: string) => void
}

const options = [
    {value: 'Нижний Новгород', label: 'Нижний Новгород'},
    {value: 'Москва', label: 'Москва'},
    {value: 'Казань', label: 'Казань'},
    {value: 'Минск', label: 'Минск'},
    {value: 'Киев', label: 'Киев'},
    {value: 'Нью-Йорк', label: 'Нью-Йорк'},
];

export class Input extends React.Component<InputProps, {}> {
    constructor(props: any) {
        super(props);
    }

    state = {
        selectedOption: {value: '', label: ''},
    };
    handleChange = (selectedOption: any) => {
        this.props.handleInputChange(selectedOption.value);
        this.setState(
            {selectedOption}
        );
    };

    render() {
        const {selectedOption} = this.state;
        return <div style={{margin: '15pt'}}><Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            placeholder='Выберите город...'
            heigth='100'
        /></div>
    }
}