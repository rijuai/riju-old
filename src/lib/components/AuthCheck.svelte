<script lang="ts">
	import { goto } from '$app/navigation'
	import { getUserId, isUserAuthenticated } from '$lib/db/auth'
	import { isUserSignedIn, userId } from '$lib/stores/user'
	import { onMount } from 'svelte'

	onMount(async () => {
		$isUserSignedIn = await isUserAuthenticated()
		if ($isUserSignedIn) $userId = await getUserId()

		if ($isUserSignedIn === false) goto('/login')
	})
</script>

{#if isUserSignedIn}
	<slot />
{/if}
