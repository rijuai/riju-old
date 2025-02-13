<script lang="ts">
import MetaTags from '$lib/components/MetaTags.svelte'
import type { PageData } from './$types'
import Editor from './Editor.svelte'

export let data: PageData
const { content, presentationId } = data
</script>

<MetaTags
    title="Riju | Presentation"
    description="Create and edit presentations with Riju."
/>
<Editor {presentationId} {content} />
