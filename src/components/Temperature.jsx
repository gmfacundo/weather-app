import { CELSIUS_UNIT, FARENHEIT_UNIT } from '../utils/constants';
import './Temperature.css';

const Temperature = ({ data, unit, toggleUnit }) => {
  return (
    <header className='temp--header'>
      <h1>{unit === CELSIUS_UNIT ? data.temp_c : data.temp_f}&deg;</h1>
      <section className='unit--container'>
        <button
          className={`temp--button ${
            unit === CELSIUS_UNIT ? 'active' : ''
          }`}
          onClick={() => toggleUnit(CELSIUS_UNIT)}
        >
          C
        </button>
        <div className='unit--separator' />
        <button
          className={`temp--button ${
            unit === FARENHEIT_UNIT ? 'active' : ''
          }`}
          onClick={() => toggleUnit(FARENHEIT_UNIT)}
        >
          F
        </button>
      </section>
    </header>
  );
};

export default Temperature;
