<script lang="ts">
	import Editor from '$lib/components/Editor.svelte'
	import HelpDialog from '$lib/components/HelpDialog.svelte'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import type { PageData } from '../$types'

	export let data: PageData
	const { content, presentationId } = data
</script>

<MetaTags
	title="Riju | Presentation"
	description="Create and edit presentations with Riju."
/>
<Editor {presentationId} {content} />
<HelpDialog />
