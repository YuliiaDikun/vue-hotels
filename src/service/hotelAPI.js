import axios from "axios";

const BASE_URL = "https://hotels4.p.rapidapi.com/";

const hotelInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    "x-RapidAPI-Key": "85382b5752msh181b02df203503ep1e54dfjsn6ad873c3041b",
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
});

export default hotelInstance;
