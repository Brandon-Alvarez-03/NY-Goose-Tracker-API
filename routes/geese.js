import { Router } from "express";
import * as controllers from "../controllers/geese.js";

const router = Router();

router.get("/geese", controllers.getGeese)
router.get("/region/:regionCode", controllers.getRegion)
router.post("/region/", controllers.createRegionData)
router.put("/region/:regionCode", controllers.updateRegionData)
router.delete("/region/:regionCode", controllers.deleteRegionData)

export default router