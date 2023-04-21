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
