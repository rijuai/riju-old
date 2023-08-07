<script lang="ts">
	import Navbar from '$lib/ui/Navbar.svelte';

	let email: String, password: String;
</script>

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
						placeholder="ram@example.com"
						autocomplete="email"
					/>
				</label>
			</fieldset>
		</form>
		<footer>
			<input type="submit" value="Send Magic Link" />

			<p>
				Facing problems with Riju? <a href="/contact-us">Contact Us</a>
			</p>
		</footer>
	</article>
</main>
