import mongoose from "../db/connection.js";
const Schema = mongoose.Schema

// import the data and write to file as array of objs
// this way we can reassign the names of the properties in the Schema

let birdSchema = Schema({
  "speciesCode": String,
  "comName": String,
  "sciName": String,
  "locName": String,
  "obsDt": Date,
  "howMany": Number, // Can organize this data based on observation size
  "lat": Number,
  "lng": Number,
  "obsValid": Boolean,
  "locationPrivate": Boolean,
  "subId": String,
})
let model = mongoose.model
export default model("Bird", birdSchema)