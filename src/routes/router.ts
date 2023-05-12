import { Router } from "express";
import { sendEmailController } from "../controllers/sendEmail.controller";
import { verifyEmailController } from "../controllers/verifyEmail.controller";
import { sendVerificationCode } from "../controllers/sendSms.controller";
import { verifySmsCode } from "../controllers/verifySms.controller";

const router = Router();

router.post('/send-email', sendEmailController);
router.post('/verify-email', verifyEmailController);
router.post('/send-verification-code', sendVerificationCode);
router.post('/verify-sms-code', verifySmsCode);

export { router };