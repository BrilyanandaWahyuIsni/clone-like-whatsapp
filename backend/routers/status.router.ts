import express from "express";
import { DeleteStatus, GetStatusById, NewStatus, TestContorller, UpdateStatus } from "../controllers/status.controller";
import { authenticateToken } from "../middlewares/auth";

const router = express.Router()

router.get("/test", TestContorller)
router.post("/new", authenticateToken, NewStatus)
router.post("/delete", authenticateToken, DeleteStatus)
router.put("/update/:id", authenticateToken, UpdateStatus)
router.get("/:id", authenticateToken, GetStatusById)

export default router