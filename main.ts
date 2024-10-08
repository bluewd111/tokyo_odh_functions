import * as file from "./functions/file.ts";
import { fetchCoolingShelterGeoJson } from "./repositories/coolingShelterGeoJson.ts";
import { fetchCoolShareSpotGeoJson } from "./repositories/coolShareSpotGeoJson.ts";

const COOLING_SHELTER_OUT_PATH = "./out/coolingShelter.geojson";
const COOLING_SHARE_SPOT_OUT_PATH = "./out/coolingShareSpot.geojson";

if (import.meta.main) {
  // 未DLの場合のみ取得
  if (!(await file.exists(COOLING_SHELTER_OUT_PATH))) {
    const coolingShelterData = await fetchCoolingShelterGeoJson();
    await Deno.writeTextFile(
      COOLING_SHELTER_OUT_PATH,
      JSON.stringify(coolingShelterData)
    );
  }

  // 未DLの場合のみ取得
  if (!(await file.exists(COOLING_SHARE_SPOT_OUT_PATH))) {
    const coolingShareSpotData = await fetchCoolShareSpotGeoJson();
    await Deno.writeTextFile(
      COOLING_SHARE_SPOT_OUT_PATH,
      JSON.stringify(coolingShareSpotData)
    );
  }
}
