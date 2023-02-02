import { Injectable } from '@nestjs/common';
import { Stripe } from 'stripe';
import { payments } from './entities/payments.entity';

@Injectable()
export class PaysService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.API_STRIPE_KEY, {
      apiVersion: '2022-11-15'
    });
  }

  generatePaymentIntent(paymenRequestBody: Partial<payments>) {
    return this.stripe.paymentIntents.create({
      amount: paymenRequestBody.quantity * 100,
      currency: paymenRequestBody.currency
    })
  }
}
