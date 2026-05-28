import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/dashboard', authMiddleware, (req, res) => {

  res.json({
    success: true,
    message: "Protected Dashboard Data",
    user: (req as any).user
  });

});

export default router;