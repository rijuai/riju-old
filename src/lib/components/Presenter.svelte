<script lang="ts">
	import '$lib/assets/presenter.css';
	import { editorOutput } from '$lib/stores/editor';
	import { currentTheme } from '$lib/stores/presenter';
	import type { JSONContent } from '@tiptap/core';

	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import { onMount } from 'svelte';

	let deck: Reveal.Api;
	let content: JSONContent = $editorOutput;
	let htmlOutput: string = '<section>';

	onMount(() => {
		deck = new Reveal();

		deck.initialize({
			controls: false,
			progress: true,
			history: false,
			center: true,
			transition: 'slide',
			embedded: true,
			autoAnimate: true,
			backgroundTransition: 'slide',
			overview: false,
		});
	});

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

<main class="reveal" style={$currentTheme}>
	<div class="slides">
		{@html htmlOutput}
	</div>
</main>
