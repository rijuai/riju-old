<script lang="ts">
	import { goto } from '$app/navigation'
	import { supabase } from '$lib/config/supabase'
	import type { AuthSession } from '@supabase/supabase-js'
	import { onMount } from 'svelte'

	let session: AuthSession | null

	onMount(async () => {
		supabase.auth.onAuthStateChange(async (event, session) => {
			session = session

			if (!session) goto('/login')
		})
	})
</script>

{#if session}
	<slot />
{:else}
	<p>Not logged in</p>
{/if}
