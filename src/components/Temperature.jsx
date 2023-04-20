import { useState } from 'react';
import { toCelsius, toFarenheit } from '../utils/logic.js';

const CELSIUS_UNIT = 'celsius';
const FARENHEIT_UNIT = 'farenheit';

const Temperature = ({ data }) => {
  const [unit, toggleUnit] = useState(CELSIUS_UNIT);
  const [temperature, setTemperature] = useState(Math.round(data.temp));

  function handleToggle(clickedUnit) {
    if (clickedUnit === unit) return;

    toggleUnit(() => {
      if (unit === CELSIUS_UNIT) {
        setTemperature(toFarenheit(temperature));
        return FARENHEIT_UNIT;
      } else {
        setTemperature(toCelsius(temperature));
        return CELSIUS_UNIT;
      }
    });
  }

  return (
    <header className='temp--header'>
      <h1>{temperature}&deg;</h1>
      <section className='unit--container'>
        <button
          className={`temp--button ${
            unit === CELSIUS_UNIT ? 'active' : ''
          }`}
          onClick={() => handleToggle(CELSIUS_UNIT)}
        >
          C
        </button>
        <div className='unit--separator' />
        <button
          className={`temp--button ${
            unit === FARENHEIT_UNIT ? 'active' : ''
          }`}
          onClick={() => handleToggle(FARENHEIT_UNIT)}
        >
          F
        </button>
      </section>
    </header>
  );
};

export default Temperature;
