import { default as axios } from 'axios';
import { promises as fsPromises } from 'fs'
const birdApiToken = 'rcbsbnma0vns'

const speciesCode = `cangoo`


let regionCodeCounter = 1
let regionCode = `US-NY-00`
let gooseArray = []
let countyData;


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

  const usNyConfig = {
    method: 'get',
    url: `https://api.ebird.org/v2/ref/region/info/${newRegionCode}?fmt=json`,
    headers: {
      'X-eBirdApiToken': `${birdApiToken}`
    }
  };
async function fetchCounty(config) { 
  let countRes = await axios(config)
  let countyData = countRes.data.result
}


  async function fetchGeese(index, config) {
    const response = await axios(config)
    const newData = response.data


    newData.forEach((x) => {
      x.regionCode = newRegionCode
      x.countyLocation = countyData
    })
    console.log(newData)
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
      await fetchCounty(usNyConfig)
      i++
      regionCodeCounter += 2
    }
    // console.log(gooseArray)
    // await fsPromises.appendFile("./geese-NY-complete.json", JSON.stringify(gooseArray)  + "," + "\n")
  }
  changeRegion()

