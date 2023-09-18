<script lang="ts">
	import { goto } from '$app/navigation'
	import { supabase } from '$lib/config/supabase'
	import { getUserData } from '$lib/db/user'
	import { onMount } from 'svelte'

	let email: string

	onMount(async () => {
		let result = await getUserData()
		if (result) email = result.email!
	})
</script>

<section>
	<article class="mx-auto max-w-sm">
		<header>
			<h1>Settings</h1>
		</header>
		<fieldset>
			<label
				>Email
				<input type="email" aria-label="Email" disabled bind:value={email} />
			</label>
			<div class="flex justify-end">
				<button
					class="secondary"
					on:click={async () => {
						await supabase.auth.signOut()
						goto('/')
					}}>Sign Out</button
				>
			</div>
		</fieldset>
	</article>
</section>
