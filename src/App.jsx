import { useEffect, useState } from 'react';
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
import './App.css';
import { CELSIUS_UNIT, FARENHEIT_UNIT } from './utils/constants';

function App() {
  const [data, setData] = useState({});
  const [unit, toggleUnit] = useState(CELSIUS_UNIT);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/forecast.json');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className='temp--modal'>
      <Temperature
        data={data.current}
        unit={unit}
        toggleUnit={toggleUnit}
      />
      <Forecast data={data} unit={unit} />
    </section>
  );
}

export default App;
