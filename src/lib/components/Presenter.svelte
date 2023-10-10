<script lang="ts">
	import { page } from '$app/stores'
	import '$lib/assets/presenter.css'
	import { getPresentationContent } from '$lib/db/presentation'
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
	import { currentTheme } from '$lib/stores/presenter'
	import type { JSONContent } from '@tiptap/core'
	import Reveal from 'reveal.js'
	import 'reveal.js/dist/reveal.css'
	import { onMount } from 'svelte'

	let reveal: Reveal.Api, htmlOutput: string, presentationContent: JSONContent

	onMount(async () => {
		const presentationId = getPresentationId()
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
</script>

<main class="reveal w-full aspect-video" style={$currentTheme}>
	<div class="slides">
		{@html htmlOutput}
	</div>

	<small class="bg-white rounded-md fixed bottom-4 right-4 p-2">
		Created in Riju
	</small>
</main>
