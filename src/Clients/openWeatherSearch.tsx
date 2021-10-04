import { useState, useEffect } from "react";
import { Coordinate } from "../Config/citiesInfo";

export const CitySearch = (url: string) => {
  fetch(url)
    .then((respone) => respone.json())
    .then();
};
