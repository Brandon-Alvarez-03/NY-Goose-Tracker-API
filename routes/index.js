import { Router } from "express";
import geeseRoutes from "./geese.js"
// import charactersRoutes from "./ characters.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root path");
});

router.use("/geese", geeseRoutes);
// router.get("/characters", charactersRoutes);

export default router;