<script lang="ts">
import '../app.css'
import { initAuth } from '$lib/stores/auth'
import { onMount } from 'svelte'

let { children } = $props()

// Initialize auth when the app loads
onMount(() => {
	// Start the auth listener
	  initAuth()
})
</script>

{@render children()}