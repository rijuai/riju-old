<script lang="ts">
	import { page } from '$app/stores'
	import { getUserId, getUserSignInStatus } from '$lib/db/auth'
	import { userId } from '$lib/stores/user'
	import { onMount } from 'svelte'

	let isUserSignedIn = false

	onMount(async () => {
		isUserSignedIn = await getUserSignInStatus()
		$userId = await getUserId()
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
