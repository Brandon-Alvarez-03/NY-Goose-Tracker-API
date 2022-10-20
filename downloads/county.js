import { default as axios } from 'axios';

let regionCode = 'US-NY-125'
const birdApiToken = 'rcbsbnma0vns'
let county;
const usNyConfig = {
  method: 'get',
  url: `https://api.ebird.org/v2/ref/region/info/${regionCode}?fmt=json`,
  headers: {
    'X-eBirdApiToken': `${birdApiToken}`
  }
};
async function fetchCounty(config) { 
let countRes = await axios(config)
  county = countRes.data.result
  console.log(regionCode)
  console.log(county)
}

fetchCounty(usNyConfig)