import { default as axios } from 'axios';
import { promises as fsPromises } from 'fs'
const birdApiToken = 'rcbsbnma0vns'

const speciesCode = `cangoo`


let regionCodeCounter = 1
let regionCode = `US-NY-00`
let gooseArray = []


  // console.log(`${regionCode + regionCodeCounter.toString()}`)
  let newRegionCode = `${regionCode + regionCodeCounter.toString()}`

  // console.log(newRegionCode)

  let geeseConfig = {
    method: 'get',
    url: `https://api.ebird.org/v2/data/obs/${newRegionCode}/recent/${speciesCode}`,
    headers: {
      'X-eBirdApiToken': `${birdApiToken}`
    }
  };
  async function fetchGeese(index, config) {
    const response = await axios(config)
    const newData = response.data
    newData.forEach((x) => {
      x.regionCode = newRegionCode
      // console.log(x)
    })
    // console.log(index)
    // console.log(newRegionCode)
    // console.log(newData)
    // console.log(newRegionCode)
    // newData.forEach(data => fsPromises.appendFile("./geese-NYS-complete.json", JSON.stringify(data) + "," + "\n"))
    gooseArray[index] = newData
  }

  async function changeRegion() {
    let i = 0
    while (regionCodeCounter <= 123) {
      if (regionCodeCounter > 99) {
        regionCode = 'US-NY-'
        newRegionCode = `${regionCode + regionCodeCounter.toString()}`
      } else if (regionCodeCounter > 9) {
        regionCode = 'US-NY-0'
        newRegionCode = `${regionCode + regionCodeCounter.toString()}`
      } else {
        regionCode = 'US-NY-00'
        newRegionCode = `${regionCode + regionCodeCounter.toString()}`
      }
      await fetchGeese(i, geeseConfig)
      i++
      regionCodeCounter += 2
    }
    // console.log(gooseArray)
    await fsPromises.appendFile("./geese-NY-complete.json", JSON.stringify(gooseArray)  + "," + "\n")
  }
  changeRegion()


    // let usNyConfig = {
    //   method: 'get',
    //   url: `https://api.ebird.org/v2/ref/region/info/${newRegionCode}?fmt=json`,
    //   headers: { 
    //     'X-eBirdApiToken': `${birdApiToken}`
    //   }
    // };
    // NY region --> US-NY this one just says 'new, York, united states'
    // Counties in NY --> US-NY-001 through US-NY-123 only odd numbers these provide one individual object with result i.e. 'Yates, New York, United States'
    // need to write these into a file
    
    // axios(usNyConfig)
    // .then(function (response) {
    //   const newerData = response.data
    //   // console.log(newRegionCode)
    //   // console.log(newerData)
    //   // console.log(newRegionCode)
    //   // newData.forEach(data => fsPromises.appendFile("./downloads/us-ny.json", JSON.stringify(data) + "," + "\n"), {once: true})
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });


// run this to see species codes to populate new json data with diff bird species
// const taxonomyConfig = {
//   method: 'get',
//   url: `https://api.ebird.org/v2/ref/taxonomy/ebird?fmt=json`,
//   headers: { 
//     'X-eBirdApiToken': `${birdApiToken}`
//   }
// };

// axios(taxonomyConfig)
// .then(function (response) {
//   const newData = response.data
//   console.log(newData)
//   newData.forEach(data => fsPromises.appendFile("./downloads/taxonomy.json", JSON.stringify(data) + "," + "\n"), {once: true})
// })
// .catch(function (error) {
//     console.log(error);
// });

// const usNyConfig = {
//   method: 'get',
//   url: `https://api.ebird.org/v2/ref/region/info/US-NY-123?fmt=json`,
//   headers: { 
//     'X-eBirdApiToken': `${birdApiToken}`
//   }
// };
// // NY region --> US-NY this one just says 'new, York, united states'
// // Counties in NY --> US-NY-001 through US-NY-123 only odd numbers these provide one individual object with result i.e. 'Yates, New York, United States'
// // need to write these into a file

// axios(usNyConfig)
// .then(function (response) {
//   const newData = response.data
//   console.log(newData)
//   // newData.forEach(data => fsPromises.appendFile("./downloads/us-ny.json", JSON.stringify(data) + "," + "\n"), {once: true})
// })
// .catch(function (error) {
//     console.log(error);
// });