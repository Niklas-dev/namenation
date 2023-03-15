export interface CountryData {
  country: Country[];
  name: string;
}

export interface Country {
  country_id: string;
  probability: number;
}

export interface AgeData {
  age: number;
  count: number;
  name: string;
}

export interface FactData {
  fact: string;
}
