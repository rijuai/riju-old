<script lang="ts">
	import HomePageNavbar from '$lib/ui/HomePageNavbar.svelte';
</script>

<svelte:head>
	<title>Riju | Signup / Login</title>
	<meta
		name="description"
		content="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
	/>
</svelte:head>

<HomePageNavbar />

<article class="max-w-sm mx-auto">
	<header>
		<h1>Sign up / Login</h1>
	</header>
	<form>
		<fieldset>
			<label>
				Email
				<input type="email" autocomplete="email" aria-label="Email" />
			</label>
		</fieldset>
	</form>
	<input type="submit" value="Send Magic Link" />

	<p>
		Facing problems? <a href="/docs/contact">Contact</a>
	</p>
</article>
