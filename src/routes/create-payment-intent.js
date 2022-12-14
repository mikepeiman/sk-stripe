import Stripe from 'stripe'

// initialize Stripe
const stripe = new Stripe(process.env['STRIPE_SECRET_KEY'])

// handle POST /create-payment-intent
export async function POST() {
  // create the payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1,
    // note, for some EU-only payment methods it must be EUR
    currency: 'usd',
    // specify what payment methods are allowed
    // can be card, sepa_debit, ideal, etc...
    automatic_payment_methods: {
        enabled: true,
      }
  })

  // return the clientSecret to the client
  return {
    body: {
      clientSecret: paymentIntent.client_secret
    }
  }
}