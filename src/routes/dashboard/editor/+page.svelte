<script lang="ts">
	import { page } from '$app/stores'
	import Editor from '$lib/components/Editor.svelte'
	import HelpDialog from '$lib/components/HelpDialog.svelte'
	import MetaData from '$lib/components/MetaData.svelte'
	import { presentationId } from '$lib/stores/presenter'
	import { onMount } from 'svelte'

	onMount(() => {
		$presentationId = getPresentationId()
	})

	const getPresentationId = () => {
		return $page.url.searchParams.get('id') ?? ''
	}
</script>

<MetaData
	title="Riju | Presentation"
	description="Create and edit presentations with Riju."
/>

<Editor />

<HelpDialog />
