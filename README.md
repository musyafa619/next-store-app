[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmusyafa619%2Fnext-store-app)

# Next Store App

The simple e-commerce app using Next.js.

## Demo

- [Live Demo](https://next-store-app-musyafa.vercel.app)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Build App

```bash
npm run build
# or
yarn build
```

Open `.next` folder to see the result.

## Features Available

The following features also available at this app which easily to customize

- auth
- cart
- stripe integration

## How to change or create env

Open or Create `.env` file and change the value of each available env

The setup for this app would look like this for example:

```
NEXT_PUBLIC_STRIPE_SECRET_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Testing pay invoice

To confirm that your integration works correctly, simulate transactions without moving any money, using special values in test mode.

When testing interactively, use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.

1. Use a valid future date, such as 12/34.
2. Use any three-digit CVC (four digits for American Express cards).
3. Use any value you like for other form fields.

Check out our [Stripe testing documentation](https://stripe.com/docs/testing) for more details.

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmusyafa619%2Fnext-store-app) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
