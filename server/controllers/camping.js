const prisma = require("../config/prisma");

exports.listCamping = async (req, res) => {
  try {
    const camping = await prisma.landmark.findMany();
    res.json({ result: camping });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.readCamping = async (req, res) => {
  try {
    const { id } = req.params;
    const camping = await prisma.landmark.findFirst({
      where: {
        id: Number(id),
      },
    });
    res.json({ result: camping });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

exports.createCamping = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, price, category, lat, lng } = req.body;
    const { id } = req.user;
    const camping = await prisma.landmark.create({
      data: {
        title,
        description,
        price,
        category,
        lat,
        lng,
        profileId: id,
      },
    });

    res.json({ message: "Created Camping Successfully", result: camping });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateCamping = (req, res) => {
  try {
    console.log("data updateCamping");
    res.send("data updateCamping");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
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
