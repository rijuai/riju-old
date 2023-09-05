<script lang="ts">
	import { supabase } from '$lib/config/supabase'
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte'

	let email: string
	let emailSent = false

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

<main class="container-fluid">
	<HomePageNavbar />
	{#if emailSent === false}
		<article class="max-w-sm mx-auto">
			<header>
				<h1>Sign up / Login</h1>
			</header>
			<form
				on:submit={() => {
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
						aria-busy={emailSent}
						aria-label="Please wait…"
					/>
					<small>
						By continuing, you agree to our <a href="/docs/terms">Terms</a> and
						<a href="/docs/privacy">Privacy Policy</a>.</small
					>
				</fieldset>
				<p>
					Facing problems? <a href="/docs/contact">Contact</a>
				</p>
			</form>
		</article>
	{:else}
		<article class="max-w-sm mx-auto">
			<header>Note</header>
			<p>Click on the link sent to your email.</p>
		</article>
	{/if}
</main>
