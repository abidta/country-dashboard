import { api } from "../lib/api.js";
export const getCountries = async (req, res, next) => {
  try {
    const { data } = await api.get("/all", {
      params: {
        fields: "name,capital,flags,population,region,subregion,area,cca2",
      },
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * 
 * This also uses search by country name
 */
export const getCountry = async(req, res, next) => {
  console.log(req.params.id);
  try {
    const { data } = await api.get("/name/" + req.params.id);
    res.send(data)
  } catch (error) {
    // console.error(error)
    console.log(error.data, 'abid')
    next(error)
  }
};

export const getCountryByRegion = async (req, res, next) => {
  try {
    const { data } = await api.get("/region/" + req.params.region, {
      params: {
        fields: "name,capital,flags,population,region,subregion,area",
      },
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getCountryByCode = async (req, res, next) => {
  try {
    const { data } = await api.get("/alpha/" + req.params.id, {
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
