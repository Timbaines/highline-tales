import { getWeatherIcon } from '@/utils/weatherUtils';
import useWeatherData from '@/hooks/useWeatherData';
import { LOCATION } from '@/data/weatherMockData';

/***** MODULE STYLES *****/
import styles from '@/components/ui/cards/WeatherCard.module.css';

export default function WeatherCard() {
    const { forecast, loading, error } = useWeatherData();

    if (loading) return (
        <div className={styles.weatherCard}>
            <div className={styles.weatherCardTitle}>
                <h3>Loading weather data...</h3>
            </div>
        </div>
    );

    if (error && !forecast.length) return (
        <div className={styles.weatherCard}>
            <div className={styles.weatherCardTitle}>
                <h3>Error: {error}</h3>
            </div>
        </div>
    );

    if (forecast.length === 0) return (
        <div className={styles.weatherCard}>
            <div className={styles.weatherCardTitle}>
                <h3>No forecast data available</h3>
            </div>
        </div>
    );

    // LIST FIRST DAY OF FORECAST AS CURRENT DAY
    const currentDay = forecast[0];
    // LIST REMAINING 4 DAYS OF FORECAST
    const weekForecast = forecast.slice(1);

    return (
        <div className={styles.weatherCard}>
            <div className={styles.weatherCardTitle}>
                <h3>{LOCATION.name}</h3>
                {getWeatherIcon(currentDay.weatherIcon)}
            </div>
            {error ? (
                <div style={{ padding: '0.25rem 0', color: '#b45309', fontSize: '0.875rem' }}>
                    Showing sample data due to a connection issue.
                </div>
            ) : null}
            {/* TODAY'S FORECAST */}
            <div className={styles.weatherForecast}>
                <div className={styles.weatherTemp}>
                    <p>{currentDay.currentTemp}°F</p>
                </div>
                <div className={styles.weatherCondition}>
                    <div className={styles.range}>
                        <p>{currentDay.weatherDescription}</p>
                    </div>
                    <div>
                        <div className={styles.range}>
                            <p>H: <span>{currentDay.highTemp}°F</span></p>
                            <p>L: <span>{currentDay.lowTemp}°F</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* REMAINING 4-DAY FORECAST */}
            <div className={styles.forecastDays}>
                {weekForecast.map((day, index) => (
                    <div key={index} className={styles.forecastDay}>
                        <p>{day.day}</p>
                        {getWeatherIcon(day.weatherIcon, 25)}
                        <p>{day.currentTemp}°F</p>
                    </div>
                ))}
            </div>
        </div>
    );
}