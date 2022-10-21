# New York State Goose Tracker (API)

## Overview

---

This API provides recent (within one month) updates on the general and precise locations of flocks of geese by the day throughout New York State in a JSON format.

- (Extrapolated from the Cornell Ornithology eBird API and manipulated for more congruent location information)

Data points include:

- Common Name
  - I.g. "Canada Goose"
- Scientific Taxa Name
  - I.g. "Branta canadensis"
- Location ID (from Original Study)
  - "L15337382
- State
  - "New York"
- County
  - I.g. "Westchester"
- County Code
  - I.g. "US-NY-119"
- General Location
  - I.g. "Central Park Pond"
- Bird Count (at general location on observation date)
  - I.g. "25"
- Observation Date and Time
  - I.g. "2022-10-16 09:11"
- Latitude and Longitude Coordinates
  - "lat": "41.179238"
  - "lng": "-73.894701"
- Boolean Value indication whether the observation location is on private property
  - I.g. "privateLocation": "false"

This is significant because data often needs to be created, read, updated, and deleted accordingly to meet varying needs.

Full CRUD capability of a database allows for custom projects and opens the doors for new websites and interfaces to be created.

## Topic

---

This data is comprised of xyz sections from abs apis

the end result is ______ which can be used for _______

### Steps

---

1. npm setup
2. establish file structure
3. create download.js to fetch api
4. create a schema file from there
5. create a connection file to the db
6. create a seed file
7. create an index file to manipulate
8. create a router file to create routers

### next steps

---

1. controllers
2. pass controllers to routes in routes
3. pass routes to index in routes
4. pass index to server
5. spin up server and test routes

- <http://localhost:3000//api/geese/region/US-NY-001>
- <http://localhost:3000//api/geese/geese>
- <http://localhost:3000//api/>
