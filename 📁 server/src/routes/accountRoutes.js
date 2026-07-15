import express from "express";

import auth from "../middleware/authMiddleware.js";

import {
  getProfile,
  getBalance,
  deposit,
  withdraw
} from "../controllers/accountController.js";

const router = express.Router();

router.get("/profile", auth, getProfile);

router.get("/balance", auth, getBalance);

router.post("/deposit", auth, deposit);

router.post("/withdraw", auth, withdraw);

export default router;
