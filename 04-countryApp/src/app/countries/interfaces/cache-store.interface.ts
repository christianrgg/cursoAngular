// 138. crear archivo con para interfaces de cacheStore (este)
import { Country } from "./country.interface";
import { Region } from "./region.type";


// 139.
export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCountries;
}


  export interface TermCountries {
    term: string;
    countries: Country[];
  }

// 143. Crear una nueva interface para region
export interface RegionCountries {
  region?: Region;
  countries: Country[];
}




