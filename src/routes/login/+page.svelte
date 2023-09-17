<script lang="ts">
	import { signInWithMagicLink } from '$lib/db/auth'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'

	let email: string
	let isEmailSent = false
	let showLoader = false
</script>

<svelte:head>
	<title>Riju | Sign In</title>
	<meta
		name="description"
		content="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
	/>
</svelte:head>

<HomePageNavbar />

<main class="container-fluid">
	{#if isEmailSent === false}
		<article>
			<h1>Sign In</h1>
			<form>
				<fieldset>
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
				</fieldset>
				<footer>
					<p>
						Facing problems? <a href="/docs/contact">Contact Us</a>
					</p>
				</footer>
			</form>
		</article>
	{:else}
		<article>
			<p>Please click on the link sent to you email.</p>
		</article>
	{/if}
</main>

<style lang="postcss">
	article {
		@apply max-w-sm mx-auto;
	}
</style>
