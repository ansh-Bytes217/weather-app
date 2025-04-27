import { useState } from 'react';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  // Mock weather data (no API yet)
  const mockWeatherData = {
    temperature: '28°C',
    condition: 'Sunny',
    location: 'New Delhi',
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      // In a real app, here we'd call the weather API
      setWeather({
        ...mockWeatherData,
        location: city,
      });
      setCity('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Weather App</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
