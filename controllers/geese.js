import Bird from "../models/Bird.js";


// dont write default because then thats the only one you're allowed to export
export const getGoose = async (req, res) => {
  try {
    const characters = await Character.find(); // put await in front of anything that's going to consume a promise
    res.json(characters);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message}); // 500 means internal server error
  }
}

export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params // destructuring
    const character = await Character.findById(id);

    if (character) {
      return res.json(character);
    }

    res.status(404).json({ message: 'Character not found!' }); // 404 means internal server errors
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message }); // 500 means internal server error
  }
}

export const createCharacter = async (req, res) => {
  try {
    const character = new Character(req.body); // this is talking to mongoose server
    await Character.save()
    res.status(201).json(character); // 201 means created
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message }); // 500 means internal server errors
  }
};

export const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params; // destructuring
    const character = await Character.findByIdAndUpdate(id, req.body);
    res.status(204).json(character) // 204 means updated
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message }); // 500 means internal server errors
  }
}

export const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params; // destructuring
    const deleted = await deleteCharacter.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Character deleted successfully")
    }

    throw new Error("Character not found")
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message }); // 500 means internal server errors
  }
}
