<script lang="ts">
	import Navbar from '$lib/ui/Navbar.svelte';

	let email: String, password: String;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.0-alpha1/css/pico.min.css"
	/>
</svelte:head>

<Navbar />

<main class="px-4">
	<article class="card max-w-sm mx-auto">
		<header>
			<h1 class="text">Sign up / Login</h1>
		</header>
		<form>
			<fieldset>
				<label>
					Email
					<input
						type="email"
						name="email"
						placeholder="Email"
						autocomplete="email"
					/>
				</label>
			</fieldset>

			<input type="submit" value="Send Magic Link" />
		</form>
		<footer>
			<p class="mt-2">
				Facing problems with Riju? <a href="/contact-us">Contact Us</a>
			</p>
		</footer>
	</article>
</main>

<style>
</style>
