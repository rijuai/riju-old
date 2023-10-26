<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { getPresentationContent } from '$lib/db/presentation'
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
	import { currentTheme } from '$lib/stores/presenter'
	import WaterMark from '$lib/ui/WaterMark.svelte'
	import type { JSONContent } from '@tiptap/core'
	import Reveal from 'reveal.js'
	import 'reveal.js/dist/reveal.css'
	// import presenter.css ONLY after reveal.css
	import '$lib/assets/css/presenter.css'

	export let presentationId: string
	let reveal: Reveal.Api, htmlOutput: string, presentationContent: JSONContent

	onMount(async () => {
		presentationContent = await getPresentationContent(presentationId!)

		if (presentationContent)
			htmlOutput = convertContentToHtml(presentationContent)

		reveal = new Reveal()

		reveal.initialize({
			controls: false,
			overview: false,
			progress: true,
			history: false,
			center: true,
			// transition: 'zoom',
			embedded: true,
			autoAnimate: true,
		})
	})

	onDestroy(() => {
		reveal.destroy()
	})
</script>

<main class="reveal" style={$currentTheme}>
	<div class="slides">
		{#if htmlOutput === undefined}
			<p class="flex justify-center items-center">Loading...</p>
		{:else}
			{@html htmlOutput}
		{/if}
	</div>

	<WaterMark text="Created in Riju.ai" />
</main>
