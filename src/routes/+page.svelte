<script>
	import { loadStripe } from '@stripe/stripe-js';
	import { Elements, PaymentElement } from 'svelte-stripe';
	import { onMount } from 'svelte';

	let stripe = null;

	onMount(async () => {
		stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
		console.log(`🚀 ~ file: +page.svelte ~ line 10 ~ onMount ~ stripe`, stripe)
	});

	async function submit() {
        
        console.log(`🚀 ~ file: +page.svelte ~ line 14 ~ submit ~ submit`)
		const result = await stripe.confirmPayment({
			elements,
			// specify redirect: 'if_required' or a `return_url`
			redirect: 'if_required'
		});
	}
</script>

<h1>Welcome to Mike's Best Store</h1>
<p>Click here to buy Mike's gratitude.</p>
<form on:submit|preventDefault={submit}>
	{#if stripe}
		<Elements {stripe}>
			<!-- this is where your Stripe components go -->
			<PaymentElement />
		</Elements>
	{/if}

	<button>Pay</button>
</form>

<!-- <h1>Welcome to Mike's Best Store</h1>
<p>Click here to buy Mike's gratitude.</p>
<form on:submit|preventDefault={submit}>
	<Elements {stripe} {clientSecret} bind:elements>
		<PaymentElement />
	</Elements>

	<button>Pay</button>
</form> -->
<style lang="scss">
	:global(body) {
		background: #333;
		color: white;
	}
</style>
