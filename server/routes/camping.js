const express = require("express");
const router = express.Router();

const {
  listCamping,
  readCamping,
  createCamping,
  updateCamping,
  deleteCamping,
} = require("../controllers/camping");

//list
router.get("/camping", listCamping);

//read param
router.get("/camping/:id", readCamping);

//post
router.post("/camping", createCamping);

//put param
router.put("/camping/:id", updateCamping);

//delete param
router.delete("/camping/:id", deleteCamping);

module.exports = router;
