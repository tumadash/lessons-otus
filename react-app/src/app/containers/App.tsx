import * as React from "react";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {Panel} from "../components/Panel";
import {ListFavourites} from "../components/ListFavourites";
import {addCity, deleteCity} from "../../store/city/actions";
import {City, CityState} from "../../store/city/types";
import {AppState} from "../../store";
import {connect} from "react-redux";

interface AppProps {
    addCity: typeof addCity;
    deleteCity: typeof deleteCity;
    city: CityState;
}

// export type UpdateCityParam = React.SyntheticEvent<{ value: string }>;

interface IState {
    city: City,
    isShow: boolean
}

class App extends React.Component<AppProps> {
    state = {
        city: {name: '', weather: {temperature: '', humidity: '', precipitation: ''}},
        isShow: false
    };


    componentDidMount() {
        const city: City = {
            name: 'Нижний Новгород',
            weather: {temperature: '+25', humidity: '30%', precipitation: 'не ожидается'}
        };
        this.setState({city: city});
    }

    addCity = () => {
        this.props.addCity(this.state.city);
    };

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
                        <div className="col align-self-center"><Panel info={this.state.city.weather}
                                                                      nameCity={this.state.city.name}/></div>
                    </div>}
                    <Button disabled={!this.state.city.name || (this.props.city.cities && this.props.city.cities.includes(this.state.city))}
                    submit={this.addCity} title={"Добавить в избранное"}/>
                    <ListFavourites cities={this.props.city.cities}/>
                </div>
            </div>
        </div>
    }

    handleInputChange(name: string) {
        if (this.state.isShow) {
            this.setState({'isShow': false});
        }
        const city: City = {
            name,
            weather: {temperature: '', humidity: '', precipitation: ''}
        };
        this.setState({'city': city});
    }

    show() {
        const city: City = {
            name: this.state.city.name,
            weather: {temperature: '', humidity: '', precipitation: ''}
        };
        this.setState({'isShow': true});
        this.setState({city});
    }

}

const mapStateToProps = (state: AppState) => ({
    city: state.city
});

export default connect(
    mapStateToProps,
    {addCity, deleteCity}
)(App);
