<script lang="ts">
	import { Heading1, Heading2, List, ListOrdered } from 'lucide-svelte'

	export let editor: any
</script>

<div class="menu z-50 flex flex-col gap-2 p-1 rounded-md">
	<button
		class="secondary"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 1 }).run()
		}}><Heading1 /></button
	>
	<button
		class="secondary"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 2 }).run()
		}}><Heading2 /></button
	>
	<button
		class="secondary"
		on:click={() => {
			editor.chain().focus().toggleBulletList().run()
		}}><List /></button
	>
	<button
		class="secondary"
		on:click={() => {
			editor.chain().focus().toggleOrderedList().run()
		}}><ListOrdered /></button
	>
	<!-- <input
		type="file"
		id="imageInput"
		style="display: none;"
		bind:this={fileInput}
		on:change={handleFileInput}
	/>
	<button class="secondary" on:click={() => fileInput.click()}
		><ImageIcon /></button
	> -->
</div>

<style lang="postcss">
	.menu {
		background-color: var(--pico-card-sectioning-background-color);
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		@apply left-4;
	}

	.menu button {
		background-color: var(--pico-card-sectioning-background-color);
		@apply hover:bg-slate-700 border-0;
	}
</style>
