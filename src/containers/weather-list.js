import React, { Component } from 'react';
import {connect} from 'react-redux';
import Charts from '../components/charts';
import List from '../components/list';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
    renderWeather(cityData,i) {
            const temps = cityData.query.results.channel.item.forecast.map(weather => weather.high);
            const lows = cityData.query.results.channel.item.forecast.map(weather => weather.low);
           const forecast = cityData.query.results.channel.item.forecast.map(weather => (weather.day + " - " + weather.text));
           const lat = cityData.query.results.channel.item.lat; 
           const lon = cityData.query.results.channel.item.long;
            console.log(temps);
            console.log(lows);
            console.log(forecast);
            console.log(lat,lon);
     
        return (
            <tr key={i}> 
                <td> <GoogleMap lat={lat} lon={lon}/> </td>
                <td><Charts data={temps} color="orange" units="F / avg"/></td>
                <td><Charts data={lows} color="blue" units="F / avg"/></td>
                <td><List data={forecast} /> </td>
        
            </tr>
            )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temperature Highs (f) </th>
                        <th> Tempature Lows (f) </th>
                        <th> Forecast (10 Day) </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                
                </tbody>
            </table>
            )
    }
}

function mapStateToProps(state){
    return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);