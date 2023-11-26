import express from 'express';
import {
  CheckTokenResetPassword,
  CheckYourLogin,
  LoginUser,
  NewUser,
  SendTokenResetPassword
} from '../controllers/user.controller';
import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.post('/signup', NewUser);
router.post('/signin', LoginUser);
router.put('/getToken', SendTokenResetPassword);
router.put('/checkToken', CheckTokenResetPassword);
router.get('/auth', authenticateToken, CheckYourLogin);

export default router;