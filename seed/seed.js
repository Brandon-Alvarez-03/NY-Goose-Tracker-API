import data from "./countries.json" assert {type: "json"};
import mongoose from "mongoose";
import connection from "./connection.js";
import Country from "./Country.js";

let countryData = data.map((item) => {
  const country = {};
  country.name = item.name.official;

  // Some of the capitals are undefined so we have to take care of that

  //ternary : firt thing true? yes : no
  item.capital ? (country.capital = item.capital[0]) : (country.capital = "");
  country.region = item.region;
  country.population = item.population;
  return country;
});

// now use all the mongoose funcs to seed the db
Country.deleteMany({})
  .then(() => Country.create(countryData))
  .then(Country.find({}, console.log))
  .then(() => connection.close())
  .then(() => console.log("Done!"))
  .catch((error) => console.log("Error", error));

// this is basically how we can strip what we need from an API

// 1. fetch api and write it to a JSON file after stringifying it as a JSON
// 2. Create a Schema that you want to follow with the portions of the API data
// 3. Create a seed file in which you use the schema structure, import the data you wrote in step one
// 4. Map that data out into a new variable
// 5. put that into a new database