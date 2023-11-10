<script lang="ts">
	import { page } from '$app/stores'
	import MetaData from '$lib/components/MetaData.svelte'
	import Presenter from '$lib/components/Presenter.svelte'
	import PresenterNavbar from '$lib/components/PresenterNavbar.svelte'
	import { getPresentation } from '$lib/db/presentation'
	import { Loader } from 'lucide-svelte'
	import { onMount } from 'svelte'

	let presentationId: string,
		presentation: { content: JSON[]; is_public: boolean } | void,
		presentationContent: JSON[] | void,
		is_public = false

	const getPresentationId = () => {
		const id = $page.url.searchParams.get('id') ?? ''
		return id
	}

	onMount(async () => {
		presentationId = getPresentationId()
		presentation = await getPresentation(presentationId!)

		if (presentation) {
			presentationContent = presentation.content
			is_public = presentation.is_public
		}
	})
</script>

<MetaData
	title="Riju | Present"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<PresenterNavbar {presentationId} isPresentationPublic={is_public} />

{#if presentationContent}
	<Presenter {presentationContent} />
{:else}
	<Loader class="fixed left-1/2 top-1/2 animate-spin" />
{/if}
