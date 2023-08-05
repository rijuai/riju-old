<script lang="ts">
	import { outputJsonStore } from '$lib/stores/output_json';
	import { onMount } from 'svelte';
	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/white.css';

	onMount(() => {
		let deck = new Reveal({
			controls: true,
			progress: true,
			history: false,
			center: true,
			transition: 'slide',
			embedded: true,
			autoAnimate: true,
		});

		deck.initialize();
	});

	let output: any = [];
	let htmlOutput: string = '<section>';

	outputJsonStore.subscribe((value) => {
		output = value;

		output.forEach(
			(item: {
				type: string;
				content: any[];
				attrs: { start: any };
				text: any;
			}) => {
				console.log('Item in output foreach', item);

				if (item.type === 'paragraph' && item.content === undefined) {
					htmlOutput += `</section><section>`;
				} else if (item.type === 'heading') {
					htmlOutput += `<h1>${item.content[0].text}</h1>`;
				} else if (item.type === 'paragraph') {
					htmlOutput += `<p>${item.content[0].text}</p>`;
				} else if (item.type === 'orderedList') {
					htmlOutput += `<ol start=${item.attrs.start}>`;
					item.content.forEach(
						(listItem: { content: { content: { text: any }[] }[] }) => {
							htmlOutput += `<li>${listItem.content[0].content[0].text}</li>`;
						},
					);
					htmlOutput += `</ol>`;
				} else {
					htmlOutput += `<p>${item.text}</p>`;
				}
			},
		);
	});
</script>

<main class="reveal aspect-video">
	<div class="slides">
		{@html htmlOutput}
	</div>
</main>

<style>
</style>
