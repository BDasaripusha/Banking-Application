import express from "express";

import auth from "../middleware/authMiddleware.js";

import {
  transfer,
  history
} from "../controllers/transactionController.js";

const router = express.Router();

router.post("/transfer", auth, transfer);

router.get("/", auth, history);

export default router;
