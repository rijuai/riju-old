<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte'
	import PresenterNavbar from '$lib/ui/PresenterNavbar.svelte'
	import { page } from '$app/stores'
	import '$lib/assets/presenter.css'
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
	import { currentTheme } from '$lib/stores/presenter'
	import type { JSONContent } from '@tiptap/core'
	import Reveal from 'reveal.js'
	import 'reveal.js/dist/reveal.css'
	import { onMount } from 'svelte'
	import { supabase } from '$lib/config/supabase'

	export let presentationId: string

	let reveal: Reveal.Api, htmlOutput: string, presentationContent: JSONContent

	onMount(async () => {
		presentationId = getPresentationId()
		presentationContent = await getPresentationContent(presentationId!)

		if (presentationContent)
			htmlOutput = convertContentToHtml(presentationContent)

		reveal = new Reveal()

		reveal.initialize({
			controls: false,
			progress: true,
			history: false,
			center: true,
			transition: 'fade',
			embedded: true,
			autoAnimate: true,
			overview: false,
		})
	})

	const getPresentationId = () => {
		const id = $page.url.searchParams.get('id') ?? ''
		return id
	}

	const getPresentationContent = async (
		presentation_id: string,
	): Promise<any> => {
		const { data, error } = await supabase
			.from('confluence_presentations')
			.select('content')
			.eq('presentation_id', presentation_id)

		if (error) return console.log(error)
		return data![0].content
	}
</script>

<MetaData
	title="Riju | Present"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<PresenterNavbar />

<main class="reveal w-full aspect-video" style={$currentTheme}>
	{#if presentationContent}
		<div class="slides">
			{@html htmlOutput}
		</div>
	{/if}

	<small class="bg-white rounded-md fixed bottom-4 right-4 p-2">
		Created in Riju
	</small>
</main>
