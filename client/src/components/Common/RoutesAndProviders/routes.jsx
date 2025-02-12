import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Login from "../../UserAuthentication/Login";
import Signup from "../../UserAuthentication/Signup";
import ForgotPassword from "../../UserAuthentication/ForgotPassword";
import Home from "../../ECommerceFeatures/Home";
import Orders from "../../ECommerceFeatures/Orders";
import Cart from "../../ECommerceFeatures/AddToCart";
import PlaceOrder from "../../ECommerceFeatures/PlaceOrder";
import PlacedSuccess from "../../ECommerceFeatures/PlaceOrder/placedSuccess";
import OrderDelivered from "../../ECommerceFeatures/Orders/delivered";
import OrderReturned from "../../ECommerceFeatures/Orders/returned";
import OrderCancelled from "../../ECommerceFeatures/Orders/cancelled";
import SearchAndFilter from "../../ECommerceFeatures/SearchAndFilter";
import HelpAndSettings from "../../ECommerceFeatures/HelpAndSettings";
import ProductUpload from "../../AdminAccess/ProductUpload";
import OtherUpload from "../../AdminAccess/OtherUpload";
import LawnFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/lawnFilter";
import VelvetFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/velvetFilter";
import ChiffonFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/chiffonFilter";
import CottonFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/cottonFilter";
import NetFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/netFilter";
//import WatchFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/watchFilter";
//import HandbagFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/handbag";
//import SunglassFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/sunglass";
import TrendingFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/trending";
import BestsellerFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/bestsellerFilter";
import TodayDealFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/todaydealFilter";
import NewArrivalFilter from "../../ECommerceFeatures/SearchAndFilter/Filter/newarrivalFilter";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes for login, signup, and password reset */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      {/* Public home and search routes */}
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchAndFilter />} />

      {/* Routes for different product caegories filtering */}
      <Route path="/filter/lawn" element={<LawnFilter />} />
      <Route path="/filter/velvet" element={<VelvetFilter />} />
      <Route path="/filter/chiffon" element={<ChiffonFilter />} />
      <Route path="/filter/cotton" element={<CottonFilter />} />
      <Route path="/filter/net" element={<NetFilter />} />
      {/* <Route path="/filter/watches" element={<WatchFilter />} />
      <Route path="/filter/handbag" element={<HandbagFilter />} />
      <Route path="/filter/sunglass" element={<SunglassFilter />} /> */}
      <Route path="/filter/trending" element={<TrendingFilter />} />
      <Route path="/filter/bestseller" element={<BestsellerFilter />} />
      <Route path="/filter/todaydeal" element={<TodayDealFilter />} />
      <Route path="/filter/newarrival" element={<NewArrivalFilter />} />

      {/* Protected routes for authenticated users */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/placeorder"
        element={
          <ProtectedRoute>
            <PlaceOrder />
          </ProtectedRoute>
        }
      />
      <Route
        path="/success"
        element={
          <ProtectedRoute>
            <PlacedSuccess />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/delivered"
        element={
          <ProtectedRoute>
            <OrderDelivered />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/returned"
        element={
          <ProtectedRoute>
            <OrderReturned />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/cancelled"
        element={
          <ProtectedRoute>
            <OrderCancelled />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <HelpAndSettings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/adminaccess"
        element={
          <ProtectedRoute>
            <ProductUpload />
          </ProtectedRoute>
        }
      />
      <Route
        path="/adminaccess/others"
        element={
          <ProtectedRoute>
            <OtherUpload />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
