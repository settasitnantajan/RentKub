exports.listCamping = (req, res) => {
  try {
    console.log("data listCamping");
    res.send("data listCamping");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.readCamping = (req, res) => {
  try {
    console.log("data readCamping");
    res.send("data readCamping");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.createCamping = (req, res) => {
  try {
    console.log("data createCamping");
    res.send("data createCamping");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateCamping = (req, res) => {
  try {
    console.log("data updateCamping");
    res.send("data updateCamping");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteCamping = (req, res) => {
  try {
    console.log("data deleteCamping");
    res.send("data deleteCamping");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};
