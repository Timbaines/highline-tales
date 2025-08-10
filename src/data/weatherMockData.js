// FALLBACK - 5 DAY MOCK WEATHER FORECAST DATA
// These represent typical daily patterns used to build mock forecasts.
// They are kept immutable to avoid accidental runtime mutation.
export const weatherPatterns = Object.freeze([
  { icon: '01d', description: 'Sunny',           highTemp: 91, lowTemp: 76, temp: 88 },
  { icon: '02d', description: 'Partly Cloudy',   highTemp: 89, lowTemp: 75, temp: 86 },
  { icon: '03d', description: 'Cloudy',          highTemp: 86, lowTemp: 73, temp: 83 },
  { icon: '11d', description: 'Thunderstorms',   highTemp: 84, lowTemp: 74, temp: 81 },
  { icon: '10d', description: 'Rain',            highTemp: 82, lowTemp: 71, temp: 78 },
]);

// DEFAULT APP LOCATION — GLACIER NATIONAL PARK COORDINATES
export const LOCATION = Object.freeze({
  name: 'Glacier National Park, MT.',
  lat: 48.7561,
  lon: -113.7797,
});

/**
 * Alias export to make the intent explicit without breaking existing imports.
 * Prefer importing DEFAULT_LOCATION for clarity; LOCATION remains for compatibility.
 */
export const DEFAULT_LOCATION = LOCATION;

/**
 * Create mock 5-day forecast data in the same shape the WeatherCard expects.
 * Useful as a fallback when live API calls fail or for local development.
 *
 * @param {number} count - Number of days to generate (default 5)
 * @param {Date} startDate - Starting date (default today)
 * @param {Array} patterns - Source patterns to cycle through (default weatherPatterns)
 * @returns {Array<{day:string,weatherIcon:string,currentTemp:number,highTemp:number,lowTemp:number,weatherDescription:string}>}
 */
export function createMockForecastData(count = 5, startDate = new Date(), patterns = weatherPatterns) {
  const days = Math.max(0, Math.floor(count));
  const out = [];
  for (let i = 0; i < days; i++) {
    const p = patterns[i % patterns.length];
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    out.push({
      day: d.toLocaleDateString(undefined, { weekday: 'short' }),
      weatherIcon: p.icon,
      currentTemp: Number.isFinite(p.temp) ? Math.round(p.temp) : 70,
      highTemp: Number.isFinite(p.highTemp) ? Math.round(p.highTemp) : 72,
      lowTemp: Number.isFinite(p.lowTemp) ? Math.round(p.lowTemp) : 68,
      weatherDescription: p.description,
    });
  }
  return out;
}