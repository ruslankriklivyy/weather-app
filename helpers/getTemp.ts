export const getTemp = (temp: number) => {
  if (!temp) return;
  return Math.round(temp - 273.15);
};
