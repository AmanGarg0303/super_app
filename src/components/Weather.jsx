import { useState, useEffect } from "react";
import axios from "axios";
import { rainSVG, pressure, wind, humidity } from "../assets/svgs";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setWeatherData(data.data);
    };

    fetchWeatherData();
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div>
      <div className="px-8 py-4 bg-[#ff4ade] rounded-t-3xl flex gap-4 justify-around text-4xl font-semibold">
        <p>{date?.toLocaleDateString()}</p>
        <p>{date?.toLocaleTimeString()}</p>
      </div>

      <div className="p-8 bg-[#101744] rounded-b-3xl flex gap-5 justify-around">
        <div className="flex flex-col gap-2 items-center">
          {rainSVG}
          <p className="text-2xl font-medium">
            {weatherData?.weather[0]?.main}
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <p className="text-3xl font-medium">{weatherData?.main?.temp} C</p>
          <div className="flex">
            <div className="mt-3">{pressure}</div>
            <div>
              <p>{weatherData?.main?.pressure} mbar</p>
              <p>pressure</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-2">
            <div className="mt-3">{wind}</div>
            <div>
              <p>{weatherData?.wind?.speed}km/h</p>
              <p>Wind</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="mt-3">{humidity}</div>
            <div>
              <p>{weatherData?.main?.humidity} %</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
