import express from "express";
import { Lawn } from "../modals/productModel.js";

const router = express.Router();

// Get all me's products
router.get("/", async (req, res) => {
  try {
    const lawn = await Lawn.find({});
    res.send(lawn);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new me's product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Lawn({
      image,
      title,
      subtitle,
      rating,
      review,
      price,
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a me's product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLawn = await Lawn.findByIdAndDelete(id);

    if (!deletedLawn) {
      return res.status(404).json({ message: "Lawn not found" });
    }

    res.status(200).json({ message: "Lawn deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
