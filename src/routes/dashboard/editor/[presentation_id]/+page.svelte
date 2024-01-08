<script lang="ts">
	import { page } from '$app/stores'
	import Editor from '$lib/components/Editor.svelte'
	import HelpDialog from '$lib/components/HelpDialog.svelte'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import { onMount } from 'svelte'
	import type { PageData } from '../$types'

	let presentationId: string
	export let data: PageData
	const { content } = data

	onMount(() => {
		presentationId = $page.params.presentation_id
	})
</script>

<MetaTags
	title="Riju | Presentation"
	description="Create and edit presentations with Riju."
/>

<Editor {presentationId} presentationContent={content} />

<HelpDialog />
