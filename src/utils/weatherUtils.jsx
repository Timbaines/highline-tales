import { WiDaySunny, WiRain, WiSnow, WiDayCloudy, WiThunderstorm, WiFog } from "react-icons/wi";

// MAP WEATHER CODES TO REACT ICONS
export const getWeatherIcon = (weatherCode, size = 40) => {
    switch (weatherCode) {
        case '01d': case '01n': return <WiDaySunny size={size} />;
        case '02d': case '02n': return <WiDayCloudy size={size} />;
        case '03d': case '03n': case '04d': case '04n': return <WiDayCloudy size={size} />;
        case '09d': case '09n': case '10d': case '10n': return <WiRain size={size} />;
        case '11d': case '11n': return <WiThunderstorm size={size} />;
        case '13d': case '13n': return <WiSnow size={size} />;
        case '50d': case '50n': return <WiFog size={size} />;
        default: return <WiDaySunny size={size} />;
    }
};