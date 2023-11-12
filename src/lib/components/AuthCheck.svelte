<script lang="ts">
	import { goto } from '$app/navigation'
	import { supabase } from '$lib/config/supabase'
	import { onMount } from 'svelte'

	let isUserAuthenticated = false

	onMount(async () => {
		supabase.auth.onAuthStateChange(async (event, session) => {
			if (!session) goto('/signin')
			if (session && session.user) isUserAuthenticated = true
		})
	})
</script>

{#if isUserAuthenticated}
	<slot />
{/if}
