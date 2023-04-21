import { CELSIUS_UNIT } from '../utils/constants';
import { getDayName } from '../utils/logic.js';
import ChanceIcon from './ChanceIcon';
import './WeeklyForecast.css';

const WeeklyForecast = ({ data, index, unit }) => {
  return (
    <li className='weekly--forecast'>
      <h5>
        {index === 0
          ? 'Hoy'
          : getDayName(data.hour[0].time_epoch, 'es-ES')}
      </h5>
      <ChanceIcon icon='ac_unit' chance={data.day.daily_chance_of_snow} />
      <ChanceIcon
        icon='water_drop'
        chance={data.day.daily_chance_of_rain}
      />
      <img
        src={data.day.condition.icon}
        style={{ width: '2.5rem', userSelect: 'none' }}
      />
      <h4>
        {unit === CELSIUS_UNIT
          ? `${Math.round(data.day.mintemp_c)}\u00b0 ${Math.round(
              data.day.maxtemp_c
            )}\u00b0`
          : `${Math.round(data.day.mintemp_f)}\u00b0 ${Math.round(
              data.day.maxtemp_f
            )}\u00b0`}
      </h4>
    </li>
  );
};

export default WeeklyForecast;
