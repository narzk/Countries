import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import NavBar from "./NavBar";
import Search from "./Search";


import "../style/Display.css";

function Display() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    userAction();
  }, []);

  const userAction = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const myJson = await response.json();
    setCountries(myJson);

    console.log(myJson.map(i=>i.region))
  };
  return (
    <div>
        <NavBar />
        <Search />
      <div className="container">
        {countries.map((country) => (
          <CountriesCard
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </div>
  );
}
export default Display;
