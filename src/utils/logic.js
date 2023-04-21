export function getCurrentForecast(dailyForecast, timestamp) {
  return dailyForecast.find((hourly, i) => {
    if (!dailyForecast[i + 1]) return hourly;

    return (
      hourly.time_epoch <= timestamp &&
      dailyForecast[i + 1].time_epoch > timestamp
    );
  });
}

export function getDayName(timestamp, locale) {
  const date = new Date(timestamp * 1000);
  const day = date.toLocaleDateString(locale, { weekday: 'long' });
  return day.charAt(0).toUpperCase() + day.slice(1);
}

export function fillWaterdrop(percentage) {
  const darkColor = 'rgb(214, 213, 213)';
  const lightColor = 'rgb(153, 202, 216)';
  const gradient = `linear-gradient(to right, ${darkColor} 0%, ${darkColor} ${percentage}%, ${lightColor} ${percentage}%, ${lightColor} 100%)`;

  return gradient;
}
