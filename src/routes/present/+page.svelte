<script lang="ts">
	import Reveal from '$lib/components/Presenter.svelte';
	import { outputJsonStore } from '$lib/stores/output-json';
</script>

<svelte:head>
	<title>Riju | Present</title>
</svelte:head>

<Reveal content={$outputJsonStore} />
