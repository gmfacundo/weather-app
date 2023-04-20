import { useEffect, useState } from 'react';
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
import './App.css';
import './components/Temperature.css';
import './components/Forecast.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data.json');
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
      <Temperature data={data.main} />
      <Forecast data={data} />
    </section>
  );
}

export default App;
