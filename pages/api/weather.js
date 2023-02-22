import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const { city } = req.query;
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();
  res.status(200).json(data);
};

