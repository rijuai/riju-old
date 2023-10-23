<script lang="ts">
	import { page } from '$app/stores'
	import { fade } from 'svelte/transition'
</script>

{#key $page.url}
	<main in:fade={{ duration: 300 }}>
		<slot />
	</main>
{/key}
