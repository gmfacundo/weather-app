export function toFarenheit(temperature) {
  return Math.round((temperature * 9) / 5 + 32);
}

export function toCelsius(temperature) {
  return Math.round(((temperature - 32) * 5) / 9);
}
