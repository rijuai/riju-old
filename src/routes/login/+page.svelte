<script lang="ts">
	import { supabase } from '$lib/config/supabase'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'

	let email: string
	let emailSent = false
	let loading = false

	const signInWithMagicLink = async (email: string) => {
		let { data, error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: 'https://riju.page/dashboard?userLoggedIn=true',
			},
		})

		if (error) {
			console.log(error)
			return
		} else {
			console.log('SUCCESS')
			console.log(data)
			emailSent = true
		}
	}
</script>

<svelte:head>
	<title>Riju | Signup / Login</title>
	<meta
		name="description"
		content="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
	/>
</svelte:head>

<HomePageNavbar />

<main class="container-fluid">
	{#if emailSent === false}
		<article>
			<h1>Sign In</h1>
			<form
				class="card-body"
				on:submit={() => {
					loading = true
					signInWithMagicLink(email)
				}}
			>
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
					<input
						type="submit"
						value="Continue"
						aria-busy={loading}
						aria-label="Please wait…"
					/>
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
			<header>Note</header>
			<p>Click on the link sent to your email.</p>
		</article>
	{/if}
</main>

<style lang="postcss">
	article {
		@apply max-w-sm mx-auto;
	}
</style>
