<script lang="ts">
	import { page } from '$app/stores'
	import MetaData from '$lib/components/MetaData.svelte'
	import Presenter from '$lib/components/Presenter.svelte'
	import PresenterNavbar from '$lib/ui/PresenterNavbar.svelte'
	import { onMount } from 'svelte'

	let presentationId: string

	onMount(() => {
		presentationId = getPresentationId()
	})

	const getPresentationId = () => {
		const id = $page.url.searchParams.get('id') ?? ''
		return id
	}
</script>

<MetaData
	title="Riju | Present"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<PresenterNavbar {presentationId} />

{#if presentationId}
	<Presenter {presentationId} />
{/if}
