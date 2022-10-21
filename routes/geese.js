import { Router } from "express";
import * as controllers from "../controllers/geese.js";

const router = Router();

router.get("/geese", controllers.getGeese)
router.get("/geese/region", controllers.getGeese)
router.get("/geese/region/:regionCode", controllers.getRegion)
router.post("/geese/region/", controllers.createRegionData)
router.put("/geese/region/:regionCode", controllers.updateRegionData)
router.delete("/geese/region/:regionCode", controllers.deleteRegionData)

export default router

// populate document of locations and push that to the db as a separate collection
// have landing page for region codes and region names
//for now have it by
// state county

//add by county
