import { SendVerificationCode } from '../interfaces/sendSmsCode';
import twilio from 'twilio';
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID as string;
const authToken = process.env.TWILIO_AUTH_TOKEN as string;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER as string;

export class SendSmsService {
  private client;

  constructor() {
    this.client = twilio(accountSid, authToken);
  }

  async execute({ to, body }: SendVerificationCode): Promise<string> {
    try {
      const message = await this.client.messages.create({
        body,
        to,
        from: twilioPhoneNumber,
      });

      return message.sid;
    } catch (error) {
      throw new Error('Falha ao enviar mensagem SMS');
    }
  }
}
