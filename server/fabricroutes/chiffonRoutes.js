import express from "express";
import { Chiffon } from "../modals/productModel.js";

const router = express.Router();

// Get all ks products
router.get("/", async (req, res) => {
  try {
    const chiffon = await Chiffon.find({});
    res.send(chiffon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new kds product
router.post("/", async (req, res) => {
  try {
    const { image, title, subtitle, rating, review, price } = req.body;

    const newProduct = new Chiffon({
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

// Delete a ids product by ID
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedids = await ids.findByIdAndDelete(id);

//     if (!deletedids) {
//       return res.status(404).json({ message: "ids not found" });
//     }

//     res.status(200).json({ message: "ids deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });



router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Product ID received:", id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const deletedChiffon = await Chiffon.findByIdAndDelete(id);
    if (!deletedChiffon) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});


export default router;
