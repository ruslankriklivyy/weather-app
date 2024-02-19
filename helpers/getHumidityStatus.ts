export const getHumidityStatus = (humidity?: number) => {
  let humidityStatus = "";

  if (!humidity) return humidityStatus;

  switch (true) {
    case humidity <= 50:
      humidityStatus = "Dry";
      break;

    case humidity > 50 && humidity <= 55:
      humidityStatus = "Pleasant";
      break;

    case humidity > 55 && humidity <= 60:
      humidityStatus = "Comfortable";
      break;

    case humidity > 60 && humidity <= 65:
      humidityStatus = "Sticky";
      break;

    case humidity > 65 && humidity <= 70:
      humidityStatus = "Uncomfortable";
      break;

    case humidity > 70 && humidity <= 75:
      humidityStatus = "Oppressive";
      break;

    case humidity > 75:
      humidityStatus = "Miserable";
      break;
    default:
      break;
  }

  return humidityStatus;
};
