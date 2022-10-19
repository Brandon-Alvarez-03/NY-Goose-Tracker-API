import { default as axios } from 'axios';
import { promises as fsPromises } from 'fs'
const birdApiToken = 'rcbsbnma0vns'

const speciesCode = `cangoo`


let regionCodeCounter = 1
let regionCode = `US-NY-00`

// while (regionCodeCounter < 2) {
//   if (regionCodeCounter > 99) {
//     regionCode = 'US-NY-'
//   } else if (regionCodeCounter > 9) {
//     regionCode = 'US-NY-0'
//   }
//   console.log(`${regionCode + regionCodeCounter.toString()}`)
//   let geeseConfig = {
//     method: 'get',
//     url: `https://api.ebird.org/v2/data/obs/${regionCode+regionCodeCounter.toString}/recent/${speciesCode}`,
//     headers: {
//       'X-eBirdApiToken': `${birdApiToken}`
//     }
//   };
//   setTimeout(getGeese, 60000)
//     function getGeese() {
//     axios(geeseConfig)
//     .then(function (response) {
//       const newData = response.data
//       console.log(newData)
//       //   newData.forEach(data => fsPromises.appendFile("./data.json", JSON.stringify(data) + "," + "\n"))
//       // })
//     })
//       .catch(function (error) {
//         console.log(error);
//       })
//     }
//   // getGeese()
//   regionCodeCounter += 2
// }


console.log(`${regionCode + regionCodeCounter.toString()}`)
let newRegionCode = `${regionCode + regionCodeCounter.toString()}`
console.log(newRegionCode)
  let geeseConfig = {
    method: 'get',
    url: `https://api.ebird.org/v2/data/obs/${newRegionCode}/recent/${speciesCode}`,
    headers: {
      'X-eBirdApiToken': `${birdApiToken}`
    }
  };
axios(geeseConfig)
  .then(function (response) {
    const newData = response.data
    console.log(newData)
    // newData.forEach(data => fsPromises.appendFile("./data.json", JSON.stringify(data) + "," + "\n"))
        })
  .catch(function (error) {
    console.log(error);
  })



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
// NY region --> US-NY this one just says 'new, York, united states'
// Counties in NY --> US-NY-001 through US-NY-123 only odd numbers these provide one individual object with result i.e. 'Yates, New York, United States'
// need to write these into a file

// axios(usNyConfig)
// .then(function (response) {
//   const newData = response.data
//   console.log(newData)
//   // newData.forEach(data => fsPromises.appendFile("./downloads/us-ny.json", JSON.stringify(data) + "," + "\n"), {once: true})
// })
// .catch(function (error) {
//     console.log(error);
// });