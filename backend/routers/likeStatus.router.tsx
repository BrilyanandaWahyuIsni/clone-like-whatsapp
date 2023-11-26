import express from 'express';
import { LikeStatusById, TestSementara } from '../controllers/likeStatus.controller';
import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.get("/", TestSementara);
router.get("/:id", authenticateToken, LikeStatusById);

export default router;