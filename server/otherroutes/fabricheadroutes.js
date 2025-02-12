import express from "express";
import { Fabric } from "../modals/fabricHeadModel.js";

const router = express.Router();

// Get all caegories
router.get("/", async (req, res) => {
  try {
    const fabric = await Fabric.find({});
    res.send(fabric);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new caegory
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle } = req.body;

    const newFabric = new Fabric({
      image,
      title,
      subtitle,
    });

    await newFabric.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: newFabric });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
