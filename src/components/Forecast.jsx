import { getCurrentForecast, getDayName } from '../utils/logic.js';
import { CELSIUS_UNIT } from '../utils/constants';
import WeeklyForecast from './WeeklyForecast.jsx';
import './Forecast.css';
const Forecast = ({ data, unit }) => {
  return (
    <main className='forecast'>
      <h2>{data.current.condition.text}</h2>
      <h4 style={{ display: 'flex' }}>
        {`${data.location.name}, ${data.location.region}`}
        <span className='material-icons'>location_on</span>
      </h4>
      <p>
        {`${
          unit === CELSIUS_UNIT
            ? Math.round(data.forecast.forecastday[0].day.mintemp_c)
            : Math.round(data.forecast.forecastday[0].day.mintemp_f)
        }\u00b0 /
        ${
          unit === CELSIUS_UNIT
            ? Math.round(data.forecast.forecastday[0].day.maxtemp_c)
            : Math.round(data.forecast.forecastday[0].day.maxtemp_f)
        }\u00b0 -
        Sensación térmica ${
          unit === CELSIUS_UNIT
            ? Math.round(
                getCurrentForecast(
                  data.forecast.forecastday[0].hour,
                  data.current.last_updated_epoch
                ).feelslike_c
              )
            : Math.round(
                getCurrentForecast(
                  data.forecast.forecastday[0].hour,
                  data.current.last_updated_epoch
                ).feelslike_f
              )
        }\u00b0`}
      </p>
      <ul>
        {data.forecast.forecastday.map((daily, i) => (
          <WeeklyForecast data={daily} key={i} index={i} unit={unit} />
        ))}
      </ul>
    </main>
  );
};

export default Forecast;
