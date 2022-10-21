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
  - "L15337382"
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
- Boolean Value indicating whether the observation location is on private property
  - I.g. "privateLocation": "false"

Data often needs to be created, read, updated, and deleted accordingly to meet varying needs. (referred to as CRUD)

Full CRUD capability of a database allows for custom projects and opens the doors for new websites and interfaces to be created.

This API features full CRUD functionality.

## Purpose

---

As a former environmental engineer, I understand water quality is primary interest.
Phosphorus and nitrogen are primary contributors to nitrification and eutrophication in both fresh water (phosphorus) and marine (nitrogen) water bodies.

Large flocks of geese defecate en masse.
Goose droppings can be seen as an effective fertilizer for gardens and golf courses,  because they contain significant amounts of nitrogen, phosphorus and carbon when dried.
This fertilizer effect is similar in aquatic plants and algae, however, this is not as desirable.

Geese often flock to large open areas near water bodies. When these areas experience storm events, storm water runoff (in the thousands of gallons) may transport much of these droppings into the surrounding water bodies.

This causes a process known as nitrification/eutrophication. Aquatic vegetation and algae, domestic and invasive, experience booms of growth due to nitrification. It leads to a positive feedback loop where the plants absorb all the nutrients and block natural light from the water. Oxygen is then deprived from the water as plants and algae die off en masse and consume dissolved oxygen throughout the decomposition process. (eutrophication)

This effect sacrifices available resources for other subsurface plants, benthic invertebrates, and fish species. They cannot survive in the anoxic environment.

This domino effect is caused by many factors including runoff from hard surfaces, roadways, and wastewater pollution, however, the purpose of this API is to present a tool that can be used to observe correlation between Canada Goose migration/presence and nutrification of adjacent water bodies.

My intention is to combine this API with GIS software to generate geospatial visuals.

Additionally, a GIS tool can serve as a fun way to visualize where geese flock to so that users can plan where NOT to have their next picnic!

## How to Use the Goose Tracker API

---

Due to this API being created with the intent to present the data geospatially, the CRUD structure is set with a location-centric approach in mind.

### Landing page

---

The landing page exists at the `"/"` or `"/geese"` path.
This route will present the entirety of goose data throughout New York State in a JSON format.

Ex.

```javascript

  {
    "_id": "6351a1acb0f94df883e59015",
    "speciesCode": "cangoo",
    "commonName": "Canada Goose",
    "scientificName": "Branta canadensis",
    "regionCode": "US-NY-119",
    "state": "New York",
    "county": "Westchester",
    "location": "Glen Island Park",
    "latitude": 40.8857395,
    "longitude": -73.783807,
    "privateLocation": false,
    "obsDate": "2022-10-18T15:50:00.000Z",
    "subId": "S120896041",
    "__v": 0
  },

```

<u> **Note:** </u> Each instance of data exists in a single object, with the following properties instance comprising the general location and the date. This means that when searching for a specific location, there will be multiple sets of data for the location based on the date (i.e. one week can have 7 data objects for each day of the week at one location)

<u> **Recall:** </u> The entirety of API JSON data is comprised of a single array of arrays which contain data objects. Each individual array represents a single region with the following breakdown structure.

- regionCode: i.e. "US-NY-119"
- state: "New York"
- county: i.e. "Westchester"

This means that every data object representing geese observations within an individual array will have the same regionCode, state, and county.

Each individual object within that region will then have the following **unique** data:

- location (i.e. "Van Cortlandt Park - South" or "Croton Railroad Station") which are general locations within that region and county
- Observation date and time (i.e. "2022-10-18T15:50:00.000Z")
- Goose Count (number of geese observed at that location on that specific date and time)
- Private Location (true or false)
- Specific latitude and longitude of the observation location
- Unique SubId from the original data source (i.e. "subId": "S120896041")

### Region

---

Search by Region will feature use of the Region codes.
Region codes for New York State are in the following format:

- regionCode: US-NY-001 through US-NY-123
  - **Note**: regionCodes are alphabetical from Albany to Yates and only include odd numbers.
  
  - Sample region get:
  `//api/geese/region/US-NY-005`

  - Sample Result:

```javascript

[
  {
    "_id": "6351a1acb0f94df883e5894e",
    "speciesCode": "cangoo",
    "commonName": "Canada Goose",
    "scientificName": "Branta canadensis",
    "howMany": 29,
    "regionCode": "US-NY-005",
    "state": "New York",
    "county": "Bronx",
    "location": "Van Cortlandt Park--Southwest Zone",
    "latitude": 40.8941483,
    "longitude": -73.8929476,
    "privateLocation": false,
    "obsDate": "2022-10-20T13:43:00.000Z",
    "subId": "S120992068",
    "__v": 0
  },
  {
    "_id": "6351a1acb0f94df883e5894f",
    "speciesCode": "cangoo",
    "commonName": "Canada Goose",
    "scientificName": "Branta canadensis",
    "howMany": 50,
    "regionCode": "US-NY-005",
    "state": "New York",
    "county": "Bronx",
    "location": "Pelham Bay Park--The Meadow and adj. woodland",
    "latitude": 40.8628317,
    "longitude": -73.7972195,
    "privateLocation": false,
    "obsDate": "2022-10-19T15:20:00.000Z",
    "subId": "S120959682",
    "__v": 0
  },

```

### Coming Updates

---

The next updates to this API will be:

1. Search by County
2. Search bird count ranges (i.e. 0-10, 20-50, 50-100, 100-200, 200+)
3. Display list of counties and county codes
4. Display list of common locations (and feature search by common location)
5. Add Connecticut and New Jersey (Tri-state area)
6. Implement automatic updates on recent data

## Credits and Sources

---

I attribute <http://eBird.org> as the source of the data accessed via the API wherever it is used or displayed.
I would like to extend a special thank you to The Cornell Lab of Ornithology <https://www.birds.cornell.edu/home/> for making such data  available. Without this information I would not have been able to gain this experience in combining my software engineering education with my environmental engineering background.

<https://www.birds.cornell.edu/home/ebird-api-terms-of-use/>

## Skills and Tools Used

---

- MongoDB, Mongoose, Express.js
- Routing, Postman, CRUD, controller logic
- JSON, JavaScript, node.js
- Data modeling and Schemas
