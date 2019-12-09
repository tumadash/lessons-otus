import * as React from "react";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {Panel} from "../components/Panel";
import {ListFavourites} from "../components/ListFavourites";

interface IProps {
}

interface IState {
    city: string,
    isShow: boolean,
    weather: { temperature: string, humidity: string, precipitation: string },
    listFavourites: string[]
}

export class App extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            city: '',
            isShow: false,
            weather: {temperature: '', humidity: '', precipitation: ''},
            listFavourites: []
        };
        this.addToFavourites = this.addToFavourites.bind(this);
        this.show = this.show.bind(this);
    }

    componentDidMount() {
        this.setState({
            city: 'Нижний Новгород',
            isShow: true,
            weather: {temperature: '+25', humidity: '30%', precipitation: 'не ожидается'}
        })
    }

    render() {
        return <div className="container-fluid  d-flex justify-content-center weather">
            <div className="row weather-card   align-self-center">
                <div className="col-12">
                    <div className="row">
                        <div className="col  align-self-center"><Input
                            handleInputChange={this.handleInputChange.bind(this)}/><Button submit={this.show}
                                                                                           title={"Показать"}/>
                        </div>
                    </div>
                    {this.state.isShow && <div className="row">
                        <div className="col align-self-center"><Panel info={this.state.weather}
                                                                      city={this.state.city}/></div>
                    </div>}
                    <Button disabled={!this.state.city || this.state.listFavourites.includes(this.state.city)}
                            submit={this.addToFavourites} title={"Добавить в избранное"}/>
                    <ListFavourites list={this.state.listFavourites}/>
                </div>
            </div>
        </div>
    }

    handleInputChange(city: string) {
        if (this.state.isShow) {
            this.setState({'isShow': false});
        }
        this.setState({'city': city});
    }

    show() {
        this.setState({'isShow': true});
        this.setState({'weather': {temperature: '+27', humidity: '80%', precipitation: 'не ожидается'}});
    }

    addToFavourites() {
        let listFavourites = this.state.listFavourites;
        if (!listFavourites.includes(this.state.city)) {
            listFavourites.push(this.state.city);
        }
        this.setState({'listFavourites': listFavourites});
    }

}