<script lang="ts">
	import { page } from '$app/stores'
	import { getUserData } from '$lib/db/user'
	import { isUserSignedIn, userId } from '$lib/stores/user'
	import { onMount } from 'svelte'

	onMount(async () => {
		const user = await getUserData()

		if (user !== undefined) {
			$isUserSignedIn = true
			$userId = user.id

			console.log('USER ID', $userId)
		}
	})
</script>

{#key $page.url}
	{#if $isUserSignedIn}
		<slot />
	{:else}
		<article class="max-w-sm mx-auto">
			<h1>Not logged in</h1>
			<p>You are not logged in. Please log in to continue.</p>
		</article>
	{/if}
{/key}
