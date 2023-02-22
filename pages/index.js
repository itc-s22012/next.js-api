import { useState } from 'react';
import styles from '../styles/search.module.css'

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
      <h2>Please enter the city name in the search field</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={getWeather}>天気を取得</button>
      {weather && (
        <div className={styles.container}>
          <h2>都市名:{weather.name}</h2>
          <h3>天気: {weather.weather[0].description}</h3>
          <h3>気温: {Math.round(weather.main.temp - 273.15)}°C</h3>
        </div>
      )}
    </div>
  );
}

