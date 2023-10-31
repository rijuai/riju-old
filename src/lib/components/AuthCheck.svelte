<script lang="ts">
	import { goto } from '$app/navigation'
	import { getUserId, getUserSignInStatus } from '$lib/db/auth'
	import { userId } from '$lib/stores/user'
	import { onMount } from 'svelte'

	let isUserSignedIn = false

	onMount(async () => {
		isUserSignedIn = await getUserSignInStatus()
		$userId = await getUserId()
		if (!isUserSignedIn === false) goto('/login')
	})
</script>

{#if isUserSignedIn}
	<slot />
{/if}
