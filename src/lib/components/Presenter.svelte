<script lang="ts">
	import { currentBackgroundCssStore } from '$lib/stores/current_background_css';
	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import { onMount } from 'svelte';
	import '../../presentation.css';

	onMount(() => {
		let deck = new Reveal({
			controls: false,
			progress: true,
			history: false,
			center: true,
			transition: 'slide',
			embedded: true,
			autoAnimate: true,
		});

		deck.initialize();
	});

	export let content: any = [];
	let htmlOutput: string = '<section>';

	if (content !== undefined) {
		content.forEach(
			(item: {
				type: string;
				content: any[];
				attrs: { start: number; src: string };
				text: string;
			}) => {
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
				} else if (item.type === 'bulletList') {
					htmlOutput += `<ul>`;
					item.content.forEach(
						(listItem: { content: { content: { text: any }[] }[] }) => {
							htmlOutput += `<li>${listItem.content[0].content[0].text}</li>`;
						},
					);
					htmlOutput += `</ul>`;
				} else if (item.type === 'image') {
					htmlOutput += `<img src=${item.attrs.src} />`;
				} else {
					htmlOutput += `<p>${item.text}</p>`;
				}
			},
		);
	}
</script>

<main class="reveal aspect-video text-left" style={$currentBackgroundCssStore}>
	<div class="slides">
		{@html htmlOutput}
	</div>
</main>
