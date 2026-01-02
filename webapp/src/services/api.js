import axios from "axios";

const COUNTRIES_BASE_URL = import.meta.env.VITE_COUNTRIES_BASE_URL;
const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getAllCountries = async (params) => {
  try {
    const response = await axios.get(
      `${COUNTRIES_BASE_URL}`,
      {params: params}
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching countries", error);
    throw error;
  }
};

export const getCountryByName = async (name) => {
  try {
    const response = await axios.get(`${COUNTRIES_BASE_URL}/${name}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    }
    console.error(`Error fetching country ${name}:`, error);
    throw error;
  }
};

export const getCountryByCode = async (code) => {
  try {
    const response = await axios.get(
      `${COUNTRIES_BASE_URL}/code/${code}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error searching for ${code}:`, error);
    throw error;
  }
};

export const getCountriesByRegion = async (region) => {
  try {
    const response = await axios.get(`${COUNTRIES_BASE_URL}/region/${region}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching countries in region ${region}:`, error);
    throw error;
  }
};
