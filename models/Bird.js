import mongoose from "mongoose";
const Schema = mongoose.Schema

// import the data and write to file as array of objs
// this way we can reassign the names of the properties in the Schema

let birdSchema = Schema({
  "commonName": String,
  "speciesCode": {
    type: String,
    require: true,
  },
  "scientificName": String,
  "howMany": Number,
  "location": String,
  "latitude": Number,
  "longitude": Number,
  "privateLocation": Boolean,
  "obsDate": Date,
  "subId": String,
})
let model = mongoose.model
export default model("Bird", birdSchema)