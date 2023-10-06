<script lang="ts">
	import DeletePresentationModal from '$lib/components/DeletePresentationModal.svelte'
	import Editor from '$lib/components/Editor.svelte'
	import MetaDetails from '$lib/components/MetaDetails.svelte'
</script>

<MetaDetails
	title="Riju | Presentation"
	description="Create and edit presentations with Riju."
/>

<div class="max-w-3xl mx-auto">
	<div class="w-full text-center">
		<p>Note: Leave a blank line for new slide.</p>
	</div>
	<Editor />
	<DeletePresentationModal />
</div>
