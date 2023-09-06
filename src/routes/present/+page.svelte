<script lang="ts">
	import Presenter from '$lib/components/Presenter.svelte'
	import PresenterNavbar from '$lib/ui/PresenterNavbar.svelte'
</script>

<svelte:head>
	<title>Riju | Present</title>
	<meta
		name="description"
		content="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
	/>
</svelte:head>

<PresenterNavbar />

<Presenter />
