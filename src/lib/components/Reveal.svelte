<script lang="ts">
	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import { onMount } from 'svelte';

	onMount(() => {
		let deck = new Reveal({
			controls: true,
			progress: true,
			history: true,
			center: true,
			transition: 'slide',
			embedded: true,
			autoAnimate: true,
		});

		deck.initialize();
	});
</script>

<section
	class="presentation reveal aspect-video bg-gradient-to-tr from-blue-300 to-blue-600"
>
	<div class="slides">
		<section>
			<h2>Riju</h2>
			<p>A PowerPoint alternative.</p>
		</section>
		<section>
			<h2 class="text-left">Why use Riju?</h2>
			<ol class="text-left list-decimal">
				<li>Easy to use</li>
				<li>Super fast to build</li>
				<li>Super affordable</li>
				<li>Very polished product</li>
			</ol>
		</section>
	</div>
</section>

<style>
</style>
