import express from "express";
import {
  check,
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

export default router;
