import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
        'pk_test_51MMcc9IzdsqDcbOcMJYvBlp2kLooPb5MF2WXwB5MOEkfvngHO3TsZWfZq8FWgopf7SwfhCb1vlqpy8L5fV4nnCow00MVaRySrA'
    );
  }
  return stripePromise;
};

export default getStripe;
