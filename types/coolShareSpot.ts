import { FeatureCollectionObject } from "./geojson.ts";

export type FeatureObjectProperties = {
  name: string;
  address: string;
  type: number;
  // eg. 月曜から土曜まで9:00～21:30,日曜日9:00～17:00
  note: string;
  // eg. 1階教養娯楽室(夕涼みコーナーとしてR5使用)
  place: string;
  url: string;
};

export type CoolShareSpotGeoJsonObject =
  FeatureCollectionObject<FeatureObjectProperties>;
