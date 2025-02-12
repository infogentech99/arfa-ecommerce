import { Schema, model } from "mongoose";

// Schema for storing caegory details
const fabricSchema = new Schema({
  image: String,
  title: String,
  subtitle: String,
});

// Model for the Caegories collection
export const Fabric = model("Fabric", fabricSchema, "fabrics");
