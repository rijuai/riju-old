<script lang="ts">
	import '$lib/assets/css/presenter.css'
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
	import { currentTheme, transitionType } from '$lib/stores/presenter'
	import WaterMark from '$lib/components/WaterMark.svelte'
	import { Loader } from 'lucide-svelte'
	import Reveal from 'reveal.js'
	import 'reveal.js/dist/reveal.css'
	import { onDestroy, onMount } from 'svelte'

	export let presentationContent: JSON[] | void
	let reveal: Reveal.Api,
		htmlOutput: string,
		showLoader = true

	onMount(async () => {
		if (presentationContent) {
			htmlOutput = convertContentToHtml(presentationContent)
			showLoader = false
		}

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

	$: {
		if (reveal) {
			reveal.configure({
				transition: $transitionType,
			})
		}
	}

	onDestroy(() => {
		reveal.destroy()
	})
</script>

<div class="reveal" style={$currentTheme}>
	<div class="slides">
		{#if showLoader}
			<Loader class="fixed left-1/2 top-1/2 animate-spin" />
		{:else}
			{@html htmlOutput}
		{/if}
	</div>
</div>

<WaterMark text="Made in Riju.ai" />

<style lang="postcss">
	.reveal {
		@apply h-screen w-full;
	}
</style>
