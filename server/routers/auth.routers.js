import express from "express";
import {
  addBooking,
  addFavourites,
  approve,
  check,
  reject,
  removeBooking,
  removeFavourites,
  signIn,
  signOut,
  signUp,
} from "../controllers/auth.controllers.js";
import { ProtectRoute } from "../middleware/middleware.js";

const router = express.Router();

router.route("/signIn").post(signIn);
router.route("/signUp").post(signUp);
router.route("/signOut").get(ProtectRoute, signOut);
router.route("/check").get(ProtectRoute, check);
router.route("/add-favourites").put(ProtectRoute, addFavourites);
router.route("/remove-favourites/:id").delete(ProtectRoute, removeFavourites);
router.route("/add-booking").put(ProtectRoute, addBooking);
router.route("/remove-booking/:id").delete(ProtectRoute, removeBooking);
router.route("/approveProperty/:id").put(ProtectRoute, approve);
router.route("/rejectProperty/:id").put(ProtectRoute, reject);

export default router;
