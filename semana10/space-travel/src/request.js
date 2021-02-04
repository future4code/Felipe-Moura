import { useRequestData } from "./hooks/useRequestData";
import { baseURL } from "./params";

export const GetTrips = () => {
  return useRequestData(`${baseURL}/trips`, []);
};


