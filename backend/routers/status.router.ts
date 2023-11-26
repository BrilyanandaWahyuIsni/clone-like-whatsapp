import express from "express";
import { DeleteStatus, GetAccountStatus, GetManyStatusRandom, GetStatusById, NewStatus, TestContorller, UpdateStatus } from "../controllers/status.controller";
import { authenticateToken } from "../middlewares/auth";

const router = express.Router();

router.get("/test", TestContorller);
router.post("/new", authenticateToken, NewStatus);
router.post("/delete", authenticateToken, DeleteStatus);
router.put("/update/:id", authenticateToken, UpdateStatus);
router.get("/search/:id", authenticateToken, GetStatusById);
router.get("/many", GetManyStatusRandom);
router.get("/account/:id", authenticateToken, GetAccountStatus);

export default router;