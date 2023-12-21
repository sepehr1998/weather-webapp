import tokenText from "./token.txt";

export const fetchWeatherData = async () => {
  const apiToken = await fetch(tokenText).then((r) => r.text());

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=espoo&units=metric&appid=${apiToken}`
  );

  const data = await response.json();
  return data;
};
