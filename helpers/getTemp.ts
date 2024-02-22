import { DegreeType } from "../types/general/DegreeType";

export const getTemp = (temp: number, degree: DegreeType) => {
  if (!temp) return;

  if (degree === "C") {
    return Math.round(temp - 273.15);
  } else {
    return Math.round(1.8 * (temp - 273.15) + 32);
  }
};
