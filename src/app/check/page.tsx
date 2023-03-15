"use client";

import { useState, useEffect } from "react";
import { Kufam } from "next/font/google";
import NationWrapper from "./components/NationWrapper";
import { AgeData, Country, CountryData, FactData } from "@/types/types";
import NationItem from "./components/NationItem";
import NameInput from "./components/NameInput";
const kufam_bold = Kufam({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const kufam = Kufam({ weight: "400", style: "normal", subsets: ["latin"] });
export default function Check() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [fact, setFact] = useState("");

  const [countries, setCountries] = useState<Array<Country>>([]);

  const fetchFact = () => {
    fetch(`/api/facts`)
      .then((res) => res.json())
      .then((data: FactData) => {
        console.log(data);
        setFact(data.fact);
      });
  };

  const handleNameSubmit = (name: string) => {
    let lowerName = name.toLowerCase();

    fetch(`https://api.nationalize.io?name=${lowerName}`)
      .then((res) => res.json())
      .then((data: CountryData) => handleCountryData(data));

    fetch(`https://api.agify.io?name=${name}`)
      .then((res) => res.json())
      .then((data: AgeData) => setAge(data.age));
  };

  const handleCountryData = (data: CountryData) => {
    console.log(data);
    let newData: Array<Country> = [];

    for (var i = 0; i < data.country.length; i++) {
      console.log(i);
      newData.push({
        country_id: data.country[i].country_id.toLowerCase(),
        probability: data.country[i].probability,
      });
    }
    console.log(newData);
    setCountries(newData);
  };

  const transformPercentage = (probability: number) => {
    let percentage = Math.round(probability * 100).toString();
    return percentage;
  };

  const transformCountryID = (id: string) => {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    let name = regionNames.of(id.toUpperCase());
    console.log(name);

    if (name === undefined) {
      return "ERROR";
    }
    return name;
  };

  useEffect(() => {
    fetchFact();

    return () => {
      setFact("");
      setAge(0);
      setCountries([]);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex flex-row justify-center bg-[#181818] overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col items-center pt-20">
        <h1
          className={`${kufam_bold.className} text-center text-[2.5rem] lg:text-[4rem] text-[#E2E2E2]`}
        >
          NameNation
        </h1>
        <NameInput
          setName={(input: string) => setName(input)}
          handleNameSubmit={() => handleNameSubmit(name)}
        />
        <NationWrapper>
          {countries.map((country: Country) => (
            <NationItem
              nation={transformCountryID(country.country_id)}
              percentage={`${transformPercentage(country.probability)}%`}
              img_src={`https://flagcdn.com/w160/${country.country_id}.png`}
              key={country.country_id}
            />
          ))}
        </NationWrapper>
        {age >= 1 && (
          <div
            className={`${kufam_bold.className} mt-10 h-20 w-1/2 py-2 px-3 rounded-xl text-[1rem] lg:text-[1.25rem] bg-[#222222]  lg:w-[32rem] text-[#D1D1D1] text-center flex flec-col items-center justify-center gap-1`}
          >
            The age {age} has been connected to this name.
          </div>
        )}

        <div className="flex flex-col justify-center items-center mt-8 pb-4 w-full">
          <h2
            className={`${kufam_bold.className} text-[1rem]  lg:text-[1.25rem]  text-[#D1D1D1] text-center`}
          >
            Fact for you
          </h2>
          <div
            className={`${kufam.className} flex justify-center items-center lg:h-20 text-[1rem] bg-[#222222] w-1/2 lg:w-[32rem] h-fit text-[#D1D1D1] text-center rounded-lg  py-1 px-5`}
          >
            {fact}
          </div>
        </div>
      </div>
    </div>
  );
}
