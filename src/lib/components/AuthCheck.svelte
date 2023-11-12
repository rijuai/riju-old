<script lang="ts">
	import { goto } from '$app/navigation'
	import { supabase } from '$lib/config/supabase'
	import { isUserSignedIn } from '$lib/stores/user'
	import { onMount } from 'svelte'

	onMount(async () => {
		supabase.auth.onAuthStateChange(async (event, session) => {
			if (!session) goto('/signin')
			if (session && session.user) $isUserSignedIn = true
		})
	})
</script>

{#if $isUserSignedIn}
	<slot />
{/if}
