"use client";

import { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import NationWrapper from "./components/NationWrapper";
import { AgeData, Country, CountryData, FactData } from "@/types/types";
import NationItem from "./components/NationItem";
import NameInput from "./components/NameInput";
import Link from "next/link";
const poppins_bold = Poppins({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });
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
        <h1
          className={`${poppins_bold.className} text-center text-[2.5rem] lg:text-[4rem] text-[#E2E2E2]`}
        >
          NameNation
        </h1>
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
                  className={`${poppins_bold.className} h-[29.95%] w-full flex flex-col items-center justify-center text-[1rem]  lg:text-[1.25rem]  text-[#D1D1D1] text-center`}
                >
                  Are you sure that&apos;s a name?
                </div>
              )}
            </>
          ) : (
            <div className="h-[29.95%]  flex flex-col justify-center items-center">
              <svg
                aria-hidden="true"
                className="w-14 h-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          )
        ) : (
          <p
            className={`${poppins_bold.className} h-[29.95%] flex flex-col items-center justify-center text-[1rem]  lg:text-[1.25rem]  text-[#D1D1D1] text-center`}
          >
            Enter a name to get started.
          </p>
        )}
        {age >= 1 && (
          <div
            className={`${poppins_bold.className} mt-10 h-20 w-1/2 py-2 px-3 rounded-xl text-[1rem] lg:text-[1.25rem] bg-[#222222]  lg:w-[32rem] text-[#D1D1D1] text-center flex flec-col items-center justify-center gap-1`}
          >
            From your name you could be {age} years old.
          </div>
        )}

        <div className="flex flex-col  justify-center items-center mt-8 pb-4 w-full">
          <h2
            className={`${poppins_bold.className} text-[1rem]  lg:text-[1.25rem]  text-[#D1D1D1] text-center`}
          >
            Fact for you
          </h2>
          <div
            className={`${poppins.className} flex justify-center items-center lg:h-fit text-[1.1rem] bg-[#222222] w-1/2 lg:w-[32rem] h-fit text-[#D1D1D1] text-center rounded-lg  py-2 px-5`}
          >
            {fact}
          </div>
        </div>
        <Link
          href={"https://github.com/Niklas-dev/namenation"}
          className={`${poppins.className} text-white underline py-4`}
        >
          star on github
        </Link>
      </div>
    </div>
  );
}
