<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte'
	import '$lib/assets/css/presenter.css'
	import { page } from '$app/stores'
	import { currentTheme } from '$lib/stores/presenter'
	import Reveal from 'reveal.js'
	import 'reveal.js/dist/reveal.css'
	import { onMount } from 'svelte'
	import { supabase } from '$lib/config/supabase'
	import PresenterNavbar from '$lib/ui/PresenterNavbar.svelte'
	import WaterMark from '$lib/ui/WaterMark.svelte'
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
	import type { JSONContent } from '@tiptap/core/dist/packages/core/src/types'

	export let presentationId: string

	let reveal: Reveal.Api, htmlOutput: string, presentationContent: JSONContent

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

		console.log(data[0].content)
		return data![0].content
	}

	onMount(async () => {
		presentationId = getPresentationId()
		presentationContent = await getPresentationContent(presentationId!)
		if (presentationContent)
			htmlOutput = convertContentToHtml(presentationContent)

		if (presentationContent) reveal = new Reveal()

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
</script>

<MetaData
	title="Riju | Present"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<PresenterNavbar />

<main class="reveal w-full aspect-video" style={$currentTheme}>
	<div class="slides">
		{@html htmlOutput}
	</div>
	<div id="editor" />

	<WaterMark text="Created in Riju.ai" />
</main>
