<script lang="ts">
import '../app.css'
import { initAuth } from '$lib/stores/auth'
import { onMount } from 'svelte'

let { children } = $props()

onMount(() => {
	initAuth()
})
</script>

{@render children()}