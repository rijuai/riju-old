<script lang="ts">
	import { page } from '$app/stores'
	import { getUserSignInStatus } from '$lib/db/auth'
	import { onMount } from 'svelte'

	let isUserSignedIn = false

	onMount(async () => {
		isUserSignedIn = await getUserSignInStatus()
	})
</script>

{#key $page.url}
	{#if isUserSignedIn}
		<slot />
	{:else}
		<article class="max-w-sm mx-auto">
			<h1>Not logged in</h1>
			<p>You are not logged in. Please log in to continue.</p>
		</article>
	{/if}
{/key}
