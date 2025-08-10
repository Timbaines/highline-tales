import { fetchJson } from '../http/fetchClient.js';

// FETCH 5-DAY FORECAST FROM OPENWEATHERMAP API
export async function getFiveDayForecast({ lat, lon, apiKey }) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    return fetchJson(url, { retries: 2, timeoutMs: 10000 });
}