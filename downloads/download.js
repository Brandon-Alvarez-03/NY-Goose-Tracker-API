// import fetch from 'node-fetch'
import { default as axios } from 'axios';
import { promises as fsPromises } from 'fs'
const birdApiToken = 'rcbsbnma0vns'
const regionCode = 'US-NY-053'
const speciesCode = `cangoo`

const config = {
  method: 'get',
  url: `https://api.ebird.org/v2/data/obs/${regionCode}/recent/${speciesCode}`,
  headers: { 
    'X-eBirdApiToken': `${birdApiToken}`
  }
};

axios(config)
.then(function (response) {
  const newData = response.data
  console.log(newData)
  newData.forEach(data => fsPromises.appendFile("./data.json", JSON.stringify(data) + "," + "\n"), {once: true})
})
.catch(function (error) {
  console.log(error);
});

// const config2 = {
//   method: 'get',
//   url: `https://api.ebird.org/v2/ref/taxonomy/ebird`,
//   headers: { 
//     'X-eBirdApiToken': `${birdApiToken}`
//   }
// };

// axios(config2)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });