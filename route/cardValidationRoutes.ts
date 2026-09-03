import express from 'express';
import { validateCard } from '../controller/cardValidationController.js';

const router = express.Router();

router.post('/validateCardNumber', validateCard);

export default router;