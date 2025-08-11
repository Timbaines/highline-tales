import { useEffect, useRef, useState, useCallback } from 'react';
import { getFiveDayForecast } from '@/services/weather/weatherService.js';
import { LOCATION, createMockForecastData } from '@/data/weatherMockData.js';

// Transform OpenWeather 3-hourly data into a simple 5-day daily summary the card expects
function mapApiToForecast(data) {
  // Safe-guards
  if (!data || !Array.isArray(data.list)) return [];

  // Group entries by date (YYYY-MM-DD) using local time from dt_txt
  const byDate = new Map();
  for (const item of data.list) {
    const dateStr = (item.dt_txt || '').slice(0, 10);
    if (!byDate.has(dateStr)) byDate.set(dateStr, []);
    byDate.get(dateStr).push(item);
  }

  // Build up to 5 days from today forward
  const days = Array.from(byDate.keys()).slice(0, 5);

  const forecasts = days.map((dateStr) => {
    const entries = byDate.get(dateStr) || [];
    // Pick a representative entry (prefer around midday ~ 12:00:00)
    const mid = entries.find(e => /12:00:00$/.test(e.dt_txt)) || entries[Math.floor(entries.length / 2)] || entries[0];

    const temps = entries.map(e => e.main?.temp).filter(t => typeof t === 'number');
    const high = temps.length ? Math.max(...temps) : mid?.main?.temp_max ?? null;
    const low = temps.length ? Math.min(...temps) : mid?.main?.temp_min ?? null;

    const weather = mid?.weather?.[0] || {};
    const icon = weather.icon || '01d';
    const description = weather.description ? (weather.description[0].toUpperCase() + weather.description.slice(1)) : 'Sunny';

    const currentTemp = Math.round(mid?.main?.temp ?? (high ?? low ?? 70));

    // Derive day label
    const day = new Date(dateStr + 'T00:00:00');
    const dayLabel = day.toLocaleDateString(undefined, { weekday: 'short' });

    return {
      day: dayLabel,
      weatherIcon: icon,
      currentTemp,
      highTemp: typeof high === 'number' ? Math.round(high) : currentTemp,
      lowTemp: typeof low === 'number' ? Math.round(low) : currentTemp,
      weatherDescription: description,
    };
  });

  // Ensure exactly 5 items
  return forecasts.slice(0, 5);
}

export default function useWeatherData(lat = LOCATION.lat, lon = LOCATION.lon) {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState([]);
  const retryRef = useRef(() => {});

  const run = useCallback(async () => {
    setLoading(true);
    try {
      if (!API_KEY) throw new Error('Missing API key');
      const data = await getFiveDayForecast({ lat, lon, apiKey: API_KEY });
      const processed = mapApiToForecast(data);
      if (!processed.length) throw new Error('No forecast entries');
      setForecast(processed);
      setError(null);
    } catch (e) {
      console.error(e);
      setError('Unable to fetch live weather; showing sample data');
      setForecast(createMockForecastData());
    } finally {
      setLoading(false);
    }
  }, [API_KEY, lat, lon]);

  useEffect(() => { run(); }, [run]);
  useEffect(() => { retryRef.current = run; }, [run]);

  return { forecast, loading, error, retry: () => retryRef.current() };
}