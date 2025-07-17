import {WiDaySunny, WiDayCloudy, WiDayThunderstorm, WiDayWindy} from 'react-icons/wi';

/***** MODULE STYLES *****/
import styles from './WeatherCard.module.css';

export default function WeatherCard() {
    return (
        <div className={styles.weatherCard}>
            <div className={styles.weatherCardHeader}>
                <h4>Today's Weather</h4>
            </div>
            <div className={styles.weatherForecast}>
                <div className={styles.weatherCondition}>
                    <WiDayCloudy
                        size={70}
                    />
                    <p>Cloudy</p>
                </div>
                <div className={styles.weatherTemp}>
                    <p>88°F</p>
                </div>
            </div>
            <div className={styles.weatherForecastWeek}>
                <div className={styles.forecastDays}>
                    <div className={styles.forecastDay}>
                        <p>Mon</p>
                        <WiDaySunny
                        size={25}
                        />
                        <p>92°F</p>
                    </div>
                    <div className={styles.forecastDay}>
                        <p>Tue</p>
                        <WiDayThunderstorm
                            size={25}
                        />
                        <p>88°F</p>
                    </div>
                    <div className={styles.forecastDay}>
                        <p>Wed</p>
                        <WiDaySunny
                            size={25}
                        />
                        <p>85°F</p>
                    </div>
                    <div className={styles.forecastDay}>
                        <p>Thu</p>
                        <WiDaySunny
                            size={25}
                        />
                        <p>85°F</p>
                    </div>
                    <div className={styles.forecastDay}>
                        <p>Fri</p>
                        <WiDaySunny
                            size={25}
                        />
                        <p>87°F</p>
                    </div>
                    <div className={styles.forecastDay}>
                        <p>Sat</p>
                        <WiDayWindy
                            size={25}
                        />
                        <p>86°F</p>
                    </div>
                </div>
            </div>
        </div>
    )
}