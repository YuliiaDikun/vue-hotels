import axios from "axios";

const BASE_URL = "https://hotels4.p.rapidapi.com/";

const hotelInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    "x-RapidAPI-Key": "a6755868dbmshd7a202f66255226p14af0bjsnfb31ddde1f36",
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
});

export default hotelInstance;
