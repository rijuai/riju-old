<script lang="ts">
	import Navbar from '$lib/ui/Navbar.svelte';
</script>

<svelte:head>
	<title>Riju | Signup/Login</title>
</svelte:head>

<Navbar />

<main class="p-4 max-w-sm mx-auto">
	<article>
		<header>
			<h1>Sign up / Login</h1>
		</header>
		<form>
			<fieldset>
				<label>
					Email
					<input
						type="email"
						placeholder="mahesh@example.com"
						autocomplete="email"
					/>
				</label>
			</fieldset>
		</form>
		<footer>
			<input type="submit" value="Send Magic Link" />

			<p>
				Facing problems? <a href="/contact-us">Contact Us</a>
			</p>
		</footer>
	</article>
</main>
