<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte'
	import { signInWithMagicLink } from '$lib/db/auth'
	import Card from '$lib/ui/Card.svelte'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'

	let email: string
	let isEmailSent = false
	let showLoader = false
</script>

<MetaData title="Riju | Sign In" description="Sign In" />

<HomePageNavbar />

<main class="container-fluid mx-auto max-w-md">
	{#if isEmailSent === false}
		<Card title="Sign In">
			<form>
				<label>
					Email
					<input
						type="email"
						autocomplete="email"
						aria-label="Email"
						bind:value={email}
					/>
				</label>
				<button
					class="w-full"
					aria-busy={showLoader}
					aria-label={showLoader ? 'Please wait' : 'Continue'}
					on:click={async () => {
						showLoader = true
						isEmailSent = await signInWithMagicLink(email)
					}}>{showLoader ? 'Please wait' : 'Continue'}</button
				>
				<small>
					By clicking on continue, you agree to our <a href="/docs/terms"
						>Terms</a
					>
					and
					<a href="/docs/privacy">Privacy Policy</a>.</small
				>
			</form>
			<footer>
				<p>
					Facing problems? <a href="/docs/contact">Contact Us</a>
				</p>
			</footer>
		</Card>
	{:else}
		<Card title="Success!">
			<p>Please click on the link sent to your email.</p>
		</Card>
	{/if}
</main>
