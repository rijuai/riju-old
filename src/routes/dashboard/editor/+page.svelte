<script lang="ts">
	import DeletePresentationModal from '$lib/components/DeletePresentationModal.svelte'
	import Editor from '$lib/components/Editor.svelte'
</script>

<svelte:head>
	<title>Riju | Presentation</title>
	<meta name="description" content="Create and edit presentations with Riju." />
</svelte:head>

<div class="max-w-3xl mx-auto">
	<div class="w-full text-center">
		<p>Note: Leave a blank line for new slide.</p>
	</div>
	<Editor />
	<DeletePresentationModal />
</div>
