<script lang="ts">
	import Reveal from '$lib/components/Presenter.svelte';
	import { editorOutput } from '$lib/stores/editor';
	import PresenterNavbar from '$lib/ui/PresenterNavbar.svelte';
</script>

<svelte:head>
	<title>Riju | Present</title>
	<meta
		name="description"
		content="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
	/>
</svelte:head>

<PresenterNavbar />

<Reveal content={$editorOutput} />
