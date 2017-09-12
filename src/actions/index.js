import axios from "axios";

const API_KEY = "8d984dde7033c60c0251625db8c1d6df";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEATCH_WEATHER';


export function fetchWeather() {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}