import { CoolShareSpotGeoJsonObject } from "../types/coolShareSpot.ts";

const API_PATH =
  "https://map.bosai.metro.tokyo.lg.jp/data/layer/data/1352/coolShareSpot.geojson";

export const fetchCoolShareSpotGeoJson = async () => {
  const response = await fetch(API_PATH);
  return (await response.json()) as CoolShareSpotGeoJsonObject;
};
