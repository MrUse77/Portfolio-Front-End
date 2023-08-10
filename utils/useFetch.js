import { useState, useEffect } from "react";
import axios from "axios";

const createUsers = async () => {
  const res = await axios.post("http://localhost:3001/api/educacion/create", {
    nameInstitution: "Universidad de Buenos Aires",
    dateInit: "2015-03-01",
    dateEnd: "2020-03-01",
    Title: "Licenciatura en Ciencias de la Computacion",
    mediaId: ObtenerUrl(),
  });
};
const ObtenerUrl = async () => {
  const res = await axios.post("http://localhost:3001/api/storage/create", {
    myfile:
      "C:/Users/Usuario/Desktop/Portfolio/Portfolio/src/assets/educacion/uba.jpg",
  });
  const url = await res.data.url;
  return url;
};
