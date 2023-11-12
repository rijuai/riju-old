<script lang="ts">
	import { page } from '$app/stores'
	import Editor from '$lib/components/Editor.svelte'
	import HelpDialog from '$lib/components/HelpDialog.svelte'
	import MetaData from '$lib/components/MetaData.svelte'
	import { onMount } from 'svelte'

	let presentationId: string

	onMount(() => {
		presentationId = getPresentationId()
	})

	const getPresentationId = () => {
		return $page.params.presentation_id
	}
</script>

<MetaData
	title="Riju | Presentation"
	description="Create and edit presentations with Riju."
/>

<Editor {presentationId} />

<HelpDialog />
