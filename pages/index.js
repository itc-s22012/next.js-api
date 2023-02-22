import { useState } from 'react';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const getWeather = async () => {
    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();
    setWeather(data);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getWeather();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      )}
    </div>
  );
}

