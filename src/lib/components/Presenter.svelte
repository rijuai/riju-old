<script lang="ts">
	import '$lib/assets/presenter.css'
	import { getPresentationContent } from '$lib/db/presentation'
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
	import { currentTheme } from '$lib/stores/presenter'
	import type { JSONContent } from '@tiptap/core'
	import Reveal from 'reveal.js'
	import 'reveal.js/dist/reveal.css'
	import { onDestroy, onMount } from 'svelte'

	export let presentationId: string
	let reveal: Reveal.Api, htmlOutput: string, presentationContent: JSONContent

	onMount(async () => {
		presentationContent = await getPresentationContent(presentationId!)

		if (presentationContent)
			htmlOutput = convertContentToHtml(presentationContent)

		reveal = new Reveal()

		reveal.initialize({
			controls: false,
			progress: true,
			history: false,
			center: true,
			transition: 'slide',
			embedded: true,
			autoAnimate: true,
			overview: false,
		})
	})

	onDestroy(() => {
		reveal.destroy()
	})
</script>

<main class="reveal aspect-vide" style={$currentTheme}>
	<div class="slides">
		{#if htmlOutput === undefined}
			<p class="flex justify-center items-center">Loading...</p>
		{:else}
			{@html htmlOutput}
		{/if}
	</div>

	<small class="bg-white rounded-md fixed bottom-4 right-4 p-2">
		Created in Riju
	</small>
</main>
