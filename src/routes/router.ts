import { Router } from "express";
import { sendEmailController } from "../controllers/sendEmail.controller";
import { verifyEmailController } from "../controllers/verifyEmail.controller";

const router = Router();

router.post('/send-email', sendEmailController);
router.get('/verify-email', verifyEmailController);

export { router };