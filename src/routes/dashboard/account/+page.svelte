<script lang="ts">
</script>

<svelte:head>
	<title>Riju | Account</title>
	<meta name="description" content="Your account details" />
</svelte:head>

<article class="max-w-sm mx-auto">
	<header>
		<h1>Account</h1>
	</header>
	<form>
		<fieldset>
			<label>
				Full name
				<input type="text" name="Full Name" autocomplete="name" />
			</label>
			<label>
				Email
				<input type="email" name="email" autocomplete="email" />
			</label>
		</fieldset>
	</form>
	<input type="submit" value="Save Changes" />
</article>
