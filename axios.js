import axios from "axios";
import { API_URL } from "./constants";
import { getFirebaseToken } from "./lib/auth";

const instance = axios.create({
  timeout: 15000,
  baseURL: API_URL,
  headers: {
    Authorization: getFirebaseToken(),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default instance;
