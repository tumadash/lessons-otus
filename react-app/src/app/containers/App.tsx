import * as React from "react";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {Panel} from "../components/Panel";

interface IProps {
}

interface IState {
    city: string,
    city1: string,
    weather: any
}

export class App extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            city: '',
            city1: '',
            weather: {}
        };
    }

    render() {
        return <div className="container-fluid  d-flex justify-content-center weather">
            <div className="row weather-card   align-self-center">
                <div className="col-12">
                    <div className="row">
                        <div className="col  align-self-center"><Input
                            handleInputChange={this.handleInputChange.bind(this)}/><Button submit={this.show.bind(this)}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col  align-self-center"><Panel info={this.state.weather}
                                                                       city={this.state.city}/></div>
                    </div>
                </div>
            </div>
        </div>
    }

    handleInputChange(city: any) {
        this.setState({'city1': city});
    }

    show() {
        this.setState({'weather': {temperature: '+27', humidity: '80%', precipitation: 'не ожидается'}});
        this.setState({'city': this.state.city1});
    }

}