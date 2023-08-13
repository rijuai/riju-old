<script lang="ts">
</script>

<svelte:head>
	<title>Riju | Account</title>
</svelte:head>

<main class="px-4">
	<article class="card max-w-sm mx-auto">
		<header>
			<h1 class="text">Account</h1>
		</header>
		<form>
			<fieldset>
				<label>
					Full Name
					<input
						type="text"
						name="Full Name"
						placeholder="Harish Srinivasan"
						autocomplete="name"
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						name="email"
						placeholder="abc@example.com"
						autocomplete="email"
					/>
				</label>
			</fieldset>
		</form>
		<footer>
			<input type="submit" value="Save Changes" />
		</footer>
	</article>
</main>
