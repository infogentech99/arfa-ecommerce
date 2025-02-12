import express from "express";
import { Cotton } from "../modals/productModel.js";

const router = express.Router();

// Get all fotwear products
router.get("/", async (req, res) => {
  try {
    const cotton = await Cotton.find({});
    res.send(cotton);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new fotwear product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Cotton({
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

// Delete a fotwear product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCotton = await Cotton.findByIdAndDelete(id);

    if (!deletedCotton) {
      return res.status(404).json({ message: "Cotton not found" });
    }

    res.status(200).json({ message: "Cotton deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
