import { CoolingShelterGeoJsonObject } from "../types/coolingShelter.ts";

const API_PATH =
  "https://map.bosai.metro.tokyo.lg.jp/data/layer/data/1351/coolingShelter.geojson";

export const fetchCoolingShelterGeoJson = async () => {
  const response = await fetch(API_PATH);
  return (await response.json()) as CoolingShelterGeoJsonObject;
};
