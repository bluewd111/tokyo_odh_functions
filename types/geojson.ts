import { Prettify } from "./utils.ts";

// https://datatracker.ietf.org/doc/html/rfc7946#section-1.4
export type GeometryType =
  | "Point"
  | "MultiPoint"
  | "LineString"
  | "MultiLineString"
  | "Polygon"
  | "MultiPolygon"
  | "GeometryCollection";

export type GeoJSONTypes = Prettify<
  GeometryType | "Feature" | "FeatureCollection"
>;

// https://datatracker.ietf.org/doc/html/rfc7946#section-3.1
// Geometry Collection 以外のタイプの場合、 coordinates をもつ
export type GeometryObject = {
  type: GeometryType;
  coordinates: number[];
};

// https://datatracker.ietf.org/doc/html/rfc7946#section-3.2
export type FeatureObject<T> = {
  type: "Feature";
  geometry: GeometryObject;
  properties: T;
};

// https://datatracker.ietf.org/doc/html/rfc7946#section-3.3
export type FeatureCollectionObject<T> = {
  type: "FeatureCollection";
  features: FeatureObject<T>[];
};
