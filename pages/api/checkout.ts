import { stripe } from 'config/stripe';
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

type Data = {
  session?: Stripe.Checkout.Session;
  message: string;
};

type LineItem = {
  price: string;
  quantity: number;
};

type Req = {
  lineItems: LineItem[];
  baseUrl: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'POST method required' });
  }

  try {
    const body: Req = JSON.parse(req.body);

    const session = await stripe.checkout.sessions.create({
      line_items: body.lineItems,
      mode: 'payment',
      success_url: `${body.baseUrl}/orders/success`,
      cancel_url: `${body.baseUrl}/cart`,
    });

    res.status(200).json({ session, message: 'Success create session' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
