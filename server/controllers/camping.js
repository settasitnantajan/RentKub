const prisma = require("../config/prisma");

exports.listCamping = async (req, res, next) => {
  try {
    const camping = await prisma.landmark.findMany();
    res.json({ result: camping });
  } catch (error) {
    next(error);
  }
};

exports.readCamping = async (req, res, next) => {
  try {
    const { id } = req.params;
    const camping = await prisma.landmark.findFirst({
      where: {
        id: Number(id),
      },
    });
    res.json({ result: camping });
  } catch (error) {
    next(error);
  }
};

exports.createCamping = async (req, res, next) => {
  try {
    console.log(req.body);
    const { title, description, price, category, lat, lng, image } = req.body;
    console.log(image);
    const { id } = req.user;
    const camping = await prisma.landmark.create({
      data: {
        title,
        description,
        price,
        category,
        lat,
        lng,
        public_id: image.public_id,
        secure_url: image.secure_url,
        profileId: id,
      },
    });

    res.json({ message: "Created Camping Successfully", result: camping });
  } catch (error) {
    next(error);
  }
};

exports.updateCamping = (req, res, next) => {
  try {
    console.log("data updateCamping");
    res.send("data updateCamping");
  } catch (error) {
    next(error);
  }
};

exports.deleteCamping = (req, res, next) => {
  try {
    console.log("data deleteCamping");
    res.send("data deleteCamping");
  } catch (error) {
    next(error);
  }
};
