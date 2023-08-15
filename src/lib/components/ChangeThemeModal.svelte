<script lang="ts">
	import { isModalOpenStore } from '$lib/stores/modal_store';
	import { outputJsonStore } from '$lib/stores/output-json';
	import Reveal from './Presenter.svelte';

	let outputJsonStoreValue: any;

	outputJsonStore.subscribe((value) => {
		console.log(value);

		outputJsonStoreValue = value;
	});
</script>

<dialog open={$isModalOpenStore}>
	<article>
		<header>
			<h2 class="mb-6">Change Theme</h2>
		</header>
		<Reveal content={outputJsonStoreValue} />
		<footer>
			<button
				class="secondary"
				on:click={() => {
					$isModalOpenStore = false;
				}}
			>
				Cancel</button
			>
			<button>Confirm</button>
			<button>Change Theme</button>
		</footer>
	</article>
</dialog>
