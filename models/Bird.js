import mongoose from "mongoose";
const Schema = mongoose.Schema

// import the data and write to file as array of objs
// this way we can reassign the names of the properties in the Schema

let birdSchema = Schema({
  "speciesCode": {
    type: String,
    require: true,
  },
  "commonName": String,
  "scientificName": String,
  "howMany": Number,
  "regionCode": String,
  "state": String,
  "county": String,
  "location": String,
  "latitude": Number,
  "longitude": Number,
  "privateLocation": Boolean,
  "obsDate": Date,
  "subId": String,
})
let model = mongoose.model
export default model("Bird", birdSchema)