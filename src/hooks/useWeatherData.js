import { useState, useEffect } from 'react';
import { weatherPatterns, LOCATION } from '@/data/weatherMockData.js';

export default function useWeatherData() {
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState(null);

    const { lat, lon } = LOCATION;
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    // FORMAT DATE TO DAY OF THE WEEK
    const formatDay = (dateObj, format = 'short') => {
        return dateObj.toLocaleDateString('en-US', {
            weekday: format === 'short' ? 'short' : 'long'
        });
    };

    // FALLBACK TO MOCK DATA IF API KEY IS MISSING OR API CALL FAILS
    const createMockForecastData = () => {
        const today = new Date();

        return Array.from({ length: 5 }, (_, i) => {
            const date = new Date(today);
            date.setDate(date.getDate() + i);

            const weatherPattern = weatherPatterns[i];
            const tempVariation = Math.floor(Math.random() * 3) - 1; // -1 TO +1 DEGREES

            return {
                date: date.getTime(),
                day: formatDay(date, 'short'),
                fullDay: formatDay(date, 'long'),
                weatherIcon: weatherPattern.icon,
                weatherDescription: weatherPattern.description,
                currentTemp: Math.round(weatherPattern.temp + tempVariation),
                highTemp: Math.round(weatherPattern.highTemp + tempVariation),
                lowTemp: Math.round(weatherPattern.lowTemp + tempVariation)
            };
        });
    };

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (!API_KEY) {
                console.log('API key missing, using mock data');
                setForecast(createMockForecastData());
                setLoading(false);
                return;
            }

            try {
                setLoading(true);

                // USE THE API KEY ENDPOINT TO FETCH THE 5-DAY FORECAST
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
                );

                if (!response.ok) {
                    console.error('API Error:', response.status);
                    // FALL BACK TO MOCK DATA IF API CALL FAILS
                    setForecast(createMockForecastData());
                    setLoading(false);
                    return;
                }

                const data = await response.json();

                // THE 5-DAY FORECAST DATA IS IN THE LIST PROPERTY OF THE RESPONSE
                if (!data.list || !Array.isArray(data.list)) {
                    console.error('Invalid data format from API');
                    setForecast(createMockForecastData());
                    setLoading(false);
                    return;
                }

                // GROUP BY DAY TO GET THE 5-DAY FORECAST
                const dailyForecasts = {};

                // PROCESS THE API DATA RESPONSE
                data.list.forEach(item => {

                    const date = new Date(item.dt * 1000);
                    const day = date.toDateString();

                    // IF IT IS A NEW DAY UPDATE THE FORECAST
                    if (!dailyForecasts[day] ||
                        (date.getHours() >= 12 && date.getHours() <= 14)) {
                        dailyForecasts[day] = {
                            date: date.getTime(),
                            day: formatDay(date, 'short'),
                            fullDay: formatDay(date, 'long'),
                            weatherIcon: item.weather[0].icon,
                            weatherDescription: item.weather[0].description,
                            currentTemp: Math.round(item.main.temp),
                            highTemp: Math.round(item.main.temp_max),
                            lowTemp: Math.round(item.main.temp_min)
                        };
                    }

                    // UPDATE HIGH AND LOW TEMPS IF NEEDED
                    if (dailyForecasts[day]) {
                        if (item.main.temp_max > dailyForecasts[day].highTemp) {
                            dailyForecasts[day].highTemp = Math.round(item.main.temp_max);
                        }
                        if (item.main.temp_min < dailyForecasts[day].lowTemp) {
                            dailyForecasts[day].lowTemp = Math.round(item.main.temp_min);
                        }
                    }
                });

                // CONVERT TO AN ARRAY OF OBJECTS AND SORT BY DATE
                let processedForecast = Object.values(dailyForecasts)
                    .sort((a, b) => a.date - b.date);

                // ENSURE WE HAVE 5 DAYS OF DATA
                if (processedForecast.length < 5) {
                    const mockData = createMockForecastData();
                    // USE MOCK DATA TO FILL IN THE GAP IF NEEDED
                    processedForecast = [
                        ...processedForecast,
                        ...mockData.slice(processedForecast.length)
                    ];
                } else if (processedForecast.length > 5) {
                    // LIMIT TO 5 DAYS IF MORE THAN 5
                    processedForecast = processedForecast.slice(0, 5);
                }

                setForecast(processedForecast);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching weather data:', err.message);
                // FALL BACK TO MOCK DATA IF API CALL FAILS
                setForecast(createMockForecastData());
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [API_KEY, lat, lon]);

    return { forecast, loading, error };
}