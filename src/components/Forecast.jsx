const Forecast = ({ data }) => {
  return (
    <main className='forecast'>
      <h2>{data.weather[0].description}</h2>
      <h4 style={{ display: 'flex' }}>
        {data.name}
        <i class='material-icons'>location_on</i>
      </h4>
      <p>
        {`${Math.round(data.main.temp_max)}\u00b0 /
        ${Math.round(data.main.temp_min)}\u00b0 -
        Sensación térmica ${Math.round(data.main.feels_like)}\u00b0`}
      </p>
    </main>
  );
};

export default Forecast;
