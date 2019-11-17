import * as React from "react";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {Panel} from "../components/Panel";
import {ListFavourites} from "../components/ListFavourites";

interface IProps {
}

interface IState {
    city: string,
    city1: string,
    weather: any,
    listFavourites: any
}

export class App extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            city: '',
            city1: '',
            weather: {},
            listFavourites: []
        };
    }

    componentDidMount() {
        this.setState({
            city: 'Нижний Новгород',
            city1: 'Нижний Новгород',
            weather: {temperature: '+25', humidity: '30%', precipitation: 'не ожидается'}
        })
    }

    render() {
        return <div className="container-fluid  d-flex justify-content-center weather">
            <div className="row weather-card   align-self-center">
                <div className="col-12">
                    <div className="row">
                        <div className="col  align-self-center"><Input
                            handleInputChange={this.handleInputChange.bind(this)}/><Button submit={this.show.bind(this)}
                                                                                           title={"Показать"}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col  align-self-center"><Panel info={this.state.weather}
                                                                       city={this.state.city}/></div>
                    </div>
                    <Button submit={this.addToFavourites.bind(this)} title={"Добавить в избранное"}/>
                    <ListFavourites list={this.state.listFavourites}/>
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

    addToFavourites() {
        let listFavourites = this.state.listFavourites;
        if (!listFavourites.includes(this.state.city1)) {
            listFavourites.push(this.state.city1);
        }
        this.setState({'listFavourites': listFavourites});
    }

}