import express from "express";
import { Net } from "../modals/productModel.js";

const router = express.Router();

// Get all lggage products
router.get("/", async (req, res) => {
  try {
    const net = await Net.find({});
    res.send(net);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new lggage product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Net({
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

// Delete a lggage product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNet = await Net.findByIdAndDelete(id);

    if (!deletedNet) {
      return res.status(404).json({ message: "Net not found" });
    }

    res.status(200).json({ message: "Net deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
