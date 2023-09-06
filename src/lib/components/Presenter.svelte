<script lang="ts">
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'

	import '$lib/assets/presenter.css'
	import { editorOutput } from '$lib/stores/editor'
	import { currentTheme } from '$lib/stores/presenter'

	import Reveal from 'reveal.js'
	import 'reveal.js/dist/reveal.css'
	import { onMount } from 'svelte'

	let deck: Reveal.Api
	let content = $editorOutput
	let htmlOutput = '<section>'

	onMount(() => {
		deck = new Reveal()

		deck.initialize({
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

	if (content !== undefined) htmlOutput = convertContentToHtml(content)
</script>

<main class="reveal w-full aspect-video" style={$currentTheme}>
	<div class="slides">
		{@html htmlOutput}
	</div>
</main>
