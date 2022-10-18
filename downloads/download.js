// import fetch from 'node-fetch';
// import { promises as fsPromises } from 'fs';
// const x_ebirdapitoken = "rcbsbnma0vns"
// const URL = "https://api.ebird.org/v2/ref/taxonomy/ebird"



// fetch(URL)
//   .then(response=> response.json())
//   .then(data => fsPromises.writeFile("./data.js", JSON.stringify(data)))
//   .catch(error=> console.error(error))
import { default as axios } from 'axios';
import { promises as fsPromises } from 'fs'

const config = {
  method: 'get',
  url: 'https://api.ebird.org/v2/data/obs/US-NY-053/recent/cangoo',
  headers: { 
    'X-eBirdApiToken': 'rcbsbnma0vns'
  }
};

axios(config)
.then(function (response) {
  console.log(response);
})
.then(response => fsPromises.writeFile("./data.json", JSON.response))
.catch(function (error) {
  console.log(error);
});