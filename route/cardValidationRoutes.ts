import express from 'express';
import { validateCard } from '../controller/cardValidationController.js';

// create express router
const router = express.Router();

// create POST endpoint
router.post('/validateCardNumber', validateCard);

export default router;