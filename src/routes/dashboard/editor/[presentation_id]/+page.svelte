<script lang="ts">
	import { page } from '$app/stores'
	import Editor from '$lib/components/Editor.svelte'
	import HelpDialog from '$lib/components/HelpDialog.svelte'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import { onMount } from 'svelte'

	let presentationId: string

	onMount(() => {
		presentationId = $page.params.presentation_id
	})
</script>

<MetaTags
	title="Riju | Presentation"
	description="Create and edit presentations with Riju."
/>

<Editor {presentationId} />

<HelpDialog />
