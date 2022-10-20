import Bird from "../models/Bird.js";


// don't write default because then thats the only one you're allowed to export
export const getGeese = async (req, res) => {
  try {
    const geese = await Bird.find(); // put await in front of anything that's going to consume a promise
    res.json(geese);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message}); // 500 means internal server error
  }
}

export const getRegion = async (req, res) => {
  try {
    const { regionCode } = req.params // destructuring
    const region = await Bird.find({ regionCode: regionCode });

    if (region) {
      return res.json(region);
    }

    res.status(404).json({ message: 'Region not found!' }); // 404 means internal server errors
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message }); // 500 means internal server error
  }
}

export const createRegionData = async (req, res) => {
  try {
    const RegionData = new Bird(req.body); // this is talking to mongoose server
    await RegionData.save()
    res.status(201).json(RegionData); // 201 means created
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message }); // 500 means internal server errors
  }
};

export const updateRegionData = async (req, res) => {
  try {
    const { regionCode } = req.params; // destructuring
    const regionData = await Bird.findByIdAndUpdate(regionCode, req.body);
    res.status(204).json(regionData) // 204 means updated
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message }); // 500 means internal server errors
  }
}

export const deleteRegionData = async (req, res) => {
  try {
    const { regionCode } = req.params; // destructuring
    const deleted = await deleteRegionData.findByIdAndDelete( regionCode);

    if (deleted) {
      return res.status(200).send("Region Data deleted successfully")
    }

    throw new Error("Region Data not found")
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message }); // 500 means internal server errors
  }
}
