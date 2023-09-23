"use client";

import { useState, useEffect } from "react";
import NationWrapper from "../components/NationWrapper";
import { AgeData, Country, CountryData, FactData } from "@/types/types";
import NationItem from "../components/NationItem";
import NameInput from "../components/NameInput";
import Link from "next/link";
import LoadingSpinner from "../components/LoadingSpinner";
import AgeDisplay from "../components/AgeDisplay";
import FactDisplay from "../components/FactDisplay";
import StarOnGithub from "../components/StarOnGithub";
import Headline from "../components/Headline";

export default function Check() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [fact, setFact] = useState("");
  const [loadingCountries, setLoadingCountries] = useState<
    "waiting" | "loading" | "loaded"
  >("waiting");

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

    setLoadingCountries("loading");

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
    setLoadingCountries("loaded");
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
    setLoadingCountries("waiting");

    return () => {
      setLoadingCountries("waiting");
      setFact("");
      setAge(0);
      setCountries([]);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex flex-row justify-center bg-[#181818] overflow-y-scroll overflow-x-hidden">
      <div className="flex flex-col items-center pt-20">
        <Headline />
        <NameInput
          setName={(input: string) => setName(input)}
          handleNameSubmit={() => handleNameSubmit(name)}
        />
        {loadingCountries !== "waiting" ? (
          loadingCountries === "loaded" ? (
            <>
              {countries.length >= 1 ? (
                <NationWrapper>
                  {countries.map((country: Country, index) => (
                    <NationItem
                      index={index}
                      nation={transformCountryID(country.country_id)}
                      percentage={`${transformPercentage(country.probability)}`}
                      img_src={`https://flagcdn.com/w160/${country.country_id}.png`}
                      key={country.country_id}
                    />
                  ))}
                </NationWrapper>
              ) : (
                <div
                  className={`font-poppins font-bold h-[29.95%] w-full flex flex-col items-center justify-center text-[1rem]  lg:text-[1.25rem]  text-[#D1D1D1] text-center`}
                >
                  Are you sure that&apos;s a name?
                </div>
              )}
            </>
          ) : (
            <LoadingSpinner />
          )
        ) : (
          <p
            className={`font-poppins font-bold h-[29.95%] flex flex-col items-center justify-center text-[1rem]  lg:text-[1.25rem]  text-[#D1D1D1] text-center`}
          >
            Enter a name to get started.
          </p>
        )}
        {age >= 1 && <AgeDisplay age={age} />}

        <FactDisplay fact={fact} />
        <StarOnGithub />
      </div>
    </div>
  );
}
