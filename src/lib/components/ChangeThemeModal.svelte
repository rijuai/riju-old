<script lang="ts">
	import { backgroundCssListStore } from '$lib/stores/background_css_list';
	import { currentBackgroundCssStore } from '$lib/stores/current_background_css';
	import { isModalOpenStore } from '$lib/stores/modal_store';
	import { outputJsonStore } from '$lib/stores/output-json';
	import Reveal from './Presenter.svelte';
</script>

<dialog open={$isModalOpenStore}>
	<article>
		<header>
			<h2 class="mb-6">Change Theme</h2>
		</header>
		<Reveal content={$outputJsonStore} />
		<footer>
			<button
				class="secondary"
				on:click={() => {
					$isModalOpenStore = false;
				}}
			>
				Cancel</button
			>
			<button
				on:click={() => {
					const bgCssList = $backgroundCssListStore;

					$currentBackgroundCssStore =
						bgCssList[Math.floor(Math.random() * bgCssList.length)];

					console.log('Current background color:', $currentBackgroundCssStore);
				}}>Change Theme</button
			>
		</footer>
	</article>
</dialog>
