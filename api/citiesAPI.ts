import axios from "axios";
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from "@env";

export const citiesAPI = {
  async fetchCities(search: string) {
    const { data } = await axios.get(
      `https://rapidapi.p.rapidapi.com/v1/geo/cities?minPopulation=50000&namePrefix=${search}`,
      {
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": RAPIDAPI_HOST,
        },
      },
    );
    return data.data;
  },
};
