<script lang="ts">
import supabase from '$lib/supabase'
import { redirect } from '@sveltejs/kit'
import { onMount } from 'svelte'

let { children } = $props()
let isUserAuthenticated = $state(false)
let subscription: { unsubscribe: () => void } | null = null

// Check initial session
const checkSession = async () => {
	const { data } = await supabase.auth.getSession()

	if (data.session) {
		isUserAuthenticated = true
	} else {
		redirect(307, '/')
	}
}

onMount(() => {
	// Initial session check
	checkSession()

	// Setup auth listener (non-async)
	const authListener = supabase.auth.onAuthStateChange((event, session) => {
		if (session) {
			isUserAuthenticated = true
		} else {
			redirect(307, '/')
		}
	})

	subscription = authListener.data.subscription

	return () => {
		if (subscription) subscription.unsubscribe()
	}
})
</script>

{#if isUserAuthenticated}
	{@render children()}
{/if}
