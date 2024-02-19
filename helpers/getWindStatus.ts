import { BEAUFORT_SCALE } from "../consts/BEAUFORT_SCALE";

export const getWindStatus = (windSpeed?: number) => {
  if (!windSpeed) return;

  if (windSpeed >= 0 && windSpeed <= 12) {
    return BEAUFORT_SCALE[Math.round(windSpeed)];
  } else {
    if (windSpeed > 12) {
      return BEAUFORT_SCALE[12];
    }
    if (windSpeed < 0) {
      return BEAUFORT_SCALE[0];
    }
  }
};
