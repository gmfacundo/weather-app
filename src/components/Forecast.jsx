import { getCurrentForecast, getDayName } from '../utils/logic.js';
import { CELSIUS_UNIT } from '../utils/constants';

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
          <li key={i} style={{ listStyleType: 'none' }}>
            <section className='weekly--forecast'>
              <h5>
                {i === 0 ? 'Hoy' : getDayName(daily.hour[0].time_epoch)}
              </h5>
              <span className='rain--chance'>
                <span
                  className='material-icons water--drop'
                  style={{
                    background: `linear-gradient(to top, #d6d5d5 0%, #d6d5d5 ${daily.day.daily_chance_of_rain}%, #608995 ${daily.day.daily_chance_of_rain}%, #608995 100%)`,
                  }}
                >
                  water_drop
                </span>
                <p>{daily.day.daily_chance_of_rain}%</p>
              </span>
              <img
                src='//cdn.weatherapi.com/weather/64x64/day/113.png'
                style={{ width: '2.5rem' }}
              />
              <h4>
                {unit === CELSIUS_UNIT
                  ? `${Math.round(daily.day.mintemp_c)}\u00b0 ${Math.round(
                      daily.day.maxtemp_c
                    )}\u00b0`
                  : `${Math.round(daily.day.mintemp_f)}\u00b0 ${Math.round(
                      daily.day.maxtemp_f
                    )}\u00b0`}
              </h4>
            </section>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Forecast;
