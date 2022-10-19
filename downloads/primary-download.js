
import { default as axios } from 'axios';
import { promises as fsPromises } from 'fs'
const birdApiToken = 'rcbsbnma0vns'
const speciesCode = `cangoo`
let regionCode = 'US-NY-005'

let geeseConfig = {
  method: 'get',
  url: `https://api.ebird.org/v2/data/obs/${regionCode}/recent/${speciesCode}`,
  headers: {
    'X-eBirdApiToken': `${birdApiToken}`
  }
}

axios(geeseConfig)
  .then(function (response) {
  const newData = response.data
  console.log(newData)
  newData.forEach(data => fsPromises.appendFile("./geese-bronx-NY.json", JSON.stringify(data) + "," + "\n"), {once: true})
})
.catch(function (error) {
  console.log(error);
})