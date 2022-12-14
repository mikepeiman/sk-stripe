import Stripe from 'stripe'

const stripe = new Stripe(process.env['STRIPE_SECRET_KEY'])

export async function POST() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    }
  })

  return {
    body: {
      clientSecret: paymentIntent.client_secret
    }
  }
}