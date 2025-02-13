<script lang="ts">
import Badge from '$lib/components/ui/badge/badge.svelte'
import './presenter.css'
import Reveal from 'reveal.js'
import { currentTheme, transitionType } from './store'
import 'reveal.js/dist/reveal.css'
import { onDestroy, onMount } from 'svelte'

export let htmlOutput: string
let reveal: Reveal.Api

onMount(async () => {
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

<div class="reveal relative" style={$currentTheme}>
    <div class="slides">
        {@html htmlOutput}
    </div>

    <!-- Watermark -->
    <Badge class="absolute bottom-4 right-4 text-base font-medium"
        >Made with Riju</Badge
    >
</div>

<style lang="postcss">
    .reveal {
        @apply aspect-video h-screen;
    }
</style>
