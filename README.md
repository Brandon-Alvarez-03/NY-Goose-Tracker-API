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

Data often needs to be created, read, updated, and deleted accordingly to meet varying needs. (referred to as CRUD)

Full CRUD capability of a database allows for custom projects and opens the doors for new websites and interfaces to be created.

This API features full CRUD functionality.

## Purpose

---

As an former environmental engineer, I understand water quality is primary interest.
Phosphorus and nitrogen are primary contributors to nitrification and eutrophication in both fresh water (phosphorus) and marine (nitrogen) water bodies.

Large flocks of geese defecate en masse.
Goose droppings can be seen as an effective fertilizer for gardens and golf courses,  because they contain significant amounts of nitrogen, phosphorus and carbon when dried.
This fertilizer effect is similar in aquatic plants and algae, however, this is not as desirable.

Geese often flock to large open areas near water bodies. When these areas experience storm events, storm water (in the thousands of gallons) runoff may transport much of these droppings into the surrounding water bodies.

This causes a process known as nitrification/eutrophication. Aquatic vegetation and algae, domestic and invasive, experience booms of growth due to nitrification. It leads to a positive feedback loop where the plants absorb all the nutrients and block natural light from the water. Oxygen is then deprived from the water as plants and algae die off en masse and consume dissolved oxygen throughout the decomposition process. (eutrophication)

This effect sacrifices available resources for other subsurface plants, benthic invertebrates, and fish species. They cannot survive in the anoxic environment.

This domino effect is caused by many factors including runoff from hard surfaces and roadways and wastewater pollution, however, the purpose of this API is to present a tool that can be used to observe correlation between Canada Goose migration/presence and nutrification of adjacent water bodies.

My intention is to combine this API with GIS software to generate geospatial visuals.

Additionally, a GIS tool can serve as a fun way to visualize where geese flock to so users can plan where NOT to have their next picnic!

## How to Use the Goose Tracker API

---

- <http://localhost:3000//api/geese/region/US-NY-001>
- <http://localhost:3000//api/geese/geese>
- <http://localhost:3000//api/>
