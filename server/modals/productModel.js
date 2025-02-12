import { Schema, model } from "mongoose";

// Schema for storing product details
const productSchema = new Schema({
  image: String,
  title: String,
  subtitle: String,
  rating: String,
  review: Number,
  price: Number,
});

// Models for product cegories
export const Lawn = model("Lawn", productSchema, "lawn");
export const Velvet = model("Velvet", productSchema, "velvet");
export const Chiffon = model("Chiffon", productSchema, "chiffon");
export const Cotton = model("Cotton", productSchema, "cotton");
export const Net = model("Net", productSchema, "net");
// export const Watch = model("Watch", productSchema, "watch");
// export const Handbag = model("Handbag", productSchema, "handbag");
// export const Sunglass = model("Sunglass", productSchema, "sunglass");

// Models for product top picks
export const Trending = model("Trending", productSchema, "trending");
export const Bestseller = model("Bestseller", productSchema, "bestseller");
export const Todaydeals = model("Todaydeals", productSchema, "todaydeals");
export const Newarrival = model("Newarrival", productSchema, "newarrival");
