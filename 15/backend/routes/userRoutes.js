import express from "express";
import { registerUser, loginUser, logoutUser, profile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, profile);
router.post("/logout", logoutUser);

export default router;
