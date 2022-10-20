import data from "../corrected-geese-NY.json" assert {type: "json"};
// import mongoose from "mongoose";
import connection from "../db/connection.js";
import Bird from "../models/Bird.js"; 
// console.log(data)
let gooseData = data.map((item) =>  {
  const goose = {};
  goose.speciesCode = item.speciesCode;
  goose.commonName = item.comName;
  goose.scientificName = item.sciName;
  goose.howMany = item.howMany;
  goose.regionCode = item.regionCode;
  goose.state = "New York"
  goose.county = item.county;
  goose.location = item.locName
  goose.latitude = item.lat
  goose.longitude = item.lng
  goose.privateLocation = item.locationPrivate
  goose.obsDate = item.obsDt
  goose.subId = item.subId
    
  console.log(goose)
  return goose
  })
console.log(gooseData)
// now use all the mongoose funcs to seed the db

//leave Bird. because we want to reuse bird schema it wont change but then pass in the specific data i.e. goose or owl
Bird.deleteMany({})
  .then(() => Bird.create(gooseData))
  .then(Bird.find({}, console.log))
  .then(() => connection.close())
  .then(() => console.log("Done!"))
  .catch((error) => console.log("Error", error));

// this is basically how we can strip what we need from an API

// 1. fetch api and write it to a JSON file after stringifying it as a JSON
// 2. Create a Schema that you want to follow with the portions of the API data
// 3. Create a seed file in which you use the schema structure, import the data you wrote in step one
// 4. Map that data out into a new variable
// 5. put that into a new database
// next establish routers and server connections

// write the a file that has region codes
// get remainder of NYS geese data to populate the whole state in the geese-NY.json
// write readme and especially credit cornell