import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const postImage = (data) =>
  API.post("/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
