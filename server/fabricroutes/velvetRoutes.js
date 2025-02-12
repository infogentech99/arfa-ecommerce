import express from "express";
import { Velvet } from "../modals/productModel.js";

const router = express.Router();

// Get all womn's products
router.get("/", async (req, res) => {
  try {
    const velvet = await Velvet.find({});
    res.send(velvet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new woen's product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Velvet({
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

// Delete a woen's product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVelvet = await Velvet.findByIdAndDelete(id);

    if (!deletedVelvet) {
      return res.status(404).json({ message: "Velvet fabric not found" });
    }

    res.status(200).json({ message: "Velvet fabric deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
