import { Router } from 'express';
import { AuthController } from '../controllers/auth.js';
import { asyncHandler } from '../helpers/asyncHandler.js';

const router = Router();

// Registro de usuario.
router.post('/register', asyncHandler(AuthController.registerUser));

// Login de usuario.
router.post('/login', asyncHandler(AuthController.loginUser));

export default router;