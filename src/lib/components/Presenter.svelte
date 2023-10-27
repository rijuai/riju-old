<script lang="ts">
	import '$lib/assets/css/presenter.css'
	import { getPresentationContent } from '$lib/db/presentation'
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
	import { currentTheme } from '$lib/stores/presenter'
	import WaterMark from '$lib/ui/WaterMark.svelte'
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
			embedded: true,
			controls: false,
			overview: false,
			progress: true,
			history: false,
			center: true,
			transition: 'zoom',
			autoAnimate: true,
		})
	})

	onDestroy(() => {
		reveal.destroy()
	})
</script>

<div class="reveal" style={$currentTheme}>
	<div class="slides">
		{#if htmlOutput === undefined}
			<p class="flex justify-center items-center">Loading...</p>
		{:else}
			{@html htmlOutput}
		{/if}
	</div>
</div>

<footer class="fixed bottom-0 w-full py-4 bg-black">
	<!-- <WaterMark text="Created in Riju.ai" /> -->
</footer>

<WaterMark text="Created in Riju.ai" />

<style lang="postcss">
	.reveal {
		@apply h-screen w-full;
	}
</style>
