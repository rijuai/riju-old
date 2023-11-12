<script lang="ts">
	import { page } from '$app/stores'
	import MetaData from '$lib/components/MetaData.svelte'
	import Presenter from '$lib/components/Presenter.svelte'
	import PresenterNavbar from '$lib/components/PresenterNavbar.svelte'
	import { getPresentationContent } from '$lib/db/presentation'
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
	import { Loader } from 'lucide-svelte'
	import { onMount } from 'svelte'

	let presentationId: string, htmlOutput: string

	onMount(async () => {
		presentationId = $page.params.presentation_id
		let content = await getPresentationContent(presentationId)
		htmlOutput = convertContentToHtml(content)
	})
</script>

<MetaData
	title="Riju | Present"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<PresenterNavbar {presentationId} />

{#if htmlOutput}
	<Presenter {htmlOutput} />
{:else}
	<Loader class="fixed left-1/2 top-1/2 animate-spin" />
{/if}
