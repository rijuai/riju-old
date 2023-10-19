<script lang="ts">
	import DeletePresentationModal from '$lib/components/DeletePresentationModal.svelte'
	import Editor from '$lib/components/Editor.svelte'
	import MetaData from '$lib/components/MetaData.svelte'
</script>

<MetaData
	title="Riju | Presentation"
	description="Create and edit presentations with Riju."
/>

<div class="max-w-2xl mx-auto">
	<Editor />
	<DeletePresentationModal />
</div>
