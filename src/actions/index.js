import axios from 'axios';
// const API_KEY = '0bb820c0fbded385d5b1c827b29cf864';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL_PART_ONE = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
const ROOT_URL_PART_TWO = '%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL_PART_ONE}${city}${ROOT_URL_PART_TWO}`;
    const request = axios.get(url);
    console.log('Request:', request);
    return {
        type: FETCH_WEATHER,
        payload: request
        
    };
}


