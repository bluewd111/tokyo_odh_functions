import { FeatureCollectionObject } from "./geojson.ts";

export type FeatureObjectProperties = {
  name: string;
  address: string;
  type: number;
  // eg. 9:00～21:00（臨時休館日を除く）
  note: string;
  // eg. 20名 (涼む目的以外のし移設本来の利用状況等により変動あり)
  capacity: string;
  url: string;
};

export type CoolingShelterGeoJsonObject =
  FeatureCollectionObject<FeatureObjectProperties>;
