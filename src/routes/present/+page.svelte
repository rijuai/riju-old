<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import { outputJsonStore } from '$lib/stores/output-json';
</script>

<Reveal content={$outputJsonStore} />
