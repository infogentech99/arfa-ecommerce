import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";


import dotenv from "dotenv"; 

dotenv.config();

// Import Routes
//import categoryheadroutes from "./otherroutes/categoryheadroutes.js";

import fabricheadroutes from "./otherroutes/fabricheadroutes.js";
import sliderRoutes from "./otherroutes/sliderRoutes.js";
//import lawnRoutes from "./categoryroutes/lawnRoutes.js";
import lawnRoutes from "./fabricroutes/lawnRoutes.js";
import velvetRoutes from "./fabricroutes/velvetRoutes.js";
//import kdsRoutes from "./fabricroutes/chiffonRoutes.js";
import chiffonRoutes from "./fabricroutes/chiffonRoutes.js";
import cottonRoutes from "./fabricroutes/cottonRoutes.js";
import netRoutes from "./fabricroutes/netRoutes.js";
// import watchRoutes from "./fabricroutes/watchRoutes.js";
// import handbagRoutes from "./fabricroutes/handbagRoutes.js";
// import sunglassRoutes from "./fabricroutes/sunglassRoutes.js";
import trendingRoutes from "./toppicksroutes/trendingRoutes.js";
import bestsellerRoutes from "./toppicksroutes/bestsellerRoutes.js";
import todaydealRoutes from "./toppicksroutes/todaydealRoutes.js";
import newarrivalRoutes from "./toppicksroutes/newarrivalRoutes.js";
import deliveryAddressRoutes from "./addressroutes/deliveryAddressRoutes.js";
import cartPlaceOrderRoutes from "./cartRoutes/cartPlaceOrderRoutes.js";
import orderedRoutes from "./ordersroutes/orderedRoutes.js";
import cancelledRoutes from "./ordersroutes/cancelledRoutes.js";

const app = express();
app.use(cors());

// Middleware
app.use(json());



// MongoDB Connection
connect(process.env.MONGO_URI) // Use the environment variable
  .then(() => console.log("DB Success"))
  .catch((err) => console.log("DB failed", err));


// Use the routes
// Category Routes (grouped by category)
app.use("/api/lawn", lawnRoutes);
app.use("/api/velvet", velvetRoutes);
app.use("/api/chiffon", chiffonRoutes);
app.use("/api/cotton", cottonRoutes);
app.use("/api/net", netRoutes);
// app.use("/api/watches", watchRoutes);
// app.use("/api/handbags", handbagRoutes);
// app.use("/api/sunglass", sunglassRoutes);

// Top Picks Routes
app.use("/api/trending", trendingRoutes);
app.use("/api/bestseller", bestsellerRoutes);
app.use("/api/todaydeals", todaydealRoutes);
app.use("/api/newarrival", newarrivalRoutes);

// Delivery Details Route
app.use("/api/deliverydetails", deliveryAddressRoutes);

// Cart and Place Order Route
app.use("/api/cartandplaceorder", cartPlaceOrderRoutes);

// Orders Route
app.use("/api/ordered", orderedRoutes);
app.use("/api/cancelled", cancelledRoutes);

// Other Routes
app.use("/api/fabriclist", fabricheadroutes);
app.use("/api/slider", sliderRoutes);

// Start server
const port = 4000;
app.listen(port, () => {
  console.log(`Server started at port ${port}...`);
});
