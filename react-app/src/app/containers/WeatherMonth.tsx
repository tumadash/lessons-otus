import * as React from "react";
import {City, CityState} from "../../store/city/types";
import {connect} from "react-redux";
import {AppState} from "../../store";

export interface WeatherMonthProps {
    city: CityState;
    match: any
}

class WeatherMonth extends React.Component<WeatherMonthProps> {
    render() {
        const city = this.props.city.cities.find(city => city.name === this.props.match.params.id);
        return city ? <div className="container-fluid  d-flex justify-content-center weather">
            <div className="row weather-card   align-self-center">
                <div className="card">
                    <div className='card-header'>Прогноз погоды для: {city.name}</div>
                    <div className='card-body'>
                        <div>
                            {this.createTable(city)}
                        </div>
                    </div>
                </div>
            </div>
        </div> : <div className="container-fluid  d-flex justify-content-center weather">
            <div className="row weather-card   align-self-center">
                <div className="card">
                    <div className='card-body'>Для города {this.props.match.params.id} нет данных</div>
                </div>
            </div>
        </div>
    }

    createTable = (city: City) => {
        const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'воскр'];
        let table = [];
        let countDays = 0;

        for (let i = 0; i < 5; i++) {
            let children = [];
            const weekDays = i < 4 ? 7 : 3;
            for (let j = 0; j < weekDays; j++) {
                children.push(<div className='col border'>
                    <div style={{color: '#007eff'}}>
                        {++countDays} декабря
                    </div>
                    <div style={{color: '#007eff'}}>
                        {days[j]}
                    </div>
                    <div>
                        Температура: {city.weather.temperature}
                    </div>
                    <div>
                        Влажность: {city.weather.humidity}
                    </div>
                    <div>
                        Осадки: {city.weather.precipitation}
                    </div>
                </div>)
            }
            table.push(<div className='row'>{children}</div>)
        }
        return table
    }

}

const mapStateToProps = (state: AppState) => ({
    city: state.city
});

export default connect(
    mapStateToProps,
    {}
)(WeatherMonth);